import { NextResponse } from "next/server";
import nodemailer, { type Transporter } from "nodemailer";
import { SITE } from "~/sections/Site/siteData";

// Contact form handler — delivers submissions by email over SMTP.
//
// Sends through a cPanel mailbox (mail.nikogorjan.com, SSL on 465) that
// forwards to the client's inbox. The From address must be the
// authenticated mailbox (cPanel rejects other senders); the customer's
// own address goes in Reply-To so replying from the inbox reaches them.
//
// Env (set in .env locally and in Vercel → Project Settings → Environment
// Variables for production):
//   SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS  — mailbox credentials
//   CONTACT_TO_EMAIL                            — where enquiries land
//                                                 (defaults to SMTP_USER)

export const runtime = "nodejs";

interface ContactPayload {
    name?: string;
    email?: string;
    phone?: string;
    subject?: string;
    message?: string;
    /** Honeypot — real users never fill this in. */
    ref_code?: string;
}

const MAX_FIELD = 200;
const MAX_MESSAGE = 5000;

const escapeHtml = (value: string) =>
    value
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;");

// Header fields must be single-line — strip CR/LF so a submitted value
// can never inject extra mail headers.
const headerSafe = (value: string) => value.replace(/[\r\n]+/g, " ").trim();

let transporter: Transporter | null = null;

const getTransporter = () => {
    if (transporter) return transporter;
    const host = process.env.SMTP_HOST;
    const user = process.env.SMTP_USER;
    const pass = process.env.SMTP_PASS;
    if (!host || !user || !pass) return null;
    const port = Number(process.env.SMTP_PORT || 465);
    transporter = nodemailer.createTransport({
        host,
        port,
        secure: port === 465, // SSL/TLS on 465, STARTTLS otherwise
        auth: { user, pass },
    });
    return transporter;
};

export async function POST(request: Request) {
    let body: ContactPayload;

    try {
        body = await request.json();
    } catch {
        return NextResponse.json({ error: "Invalid request." }, { status: 400 });
    }

    // Silently accept bot submissions so they stop retrying.
    if (body.ref_code) {
        // Logged so a "form said success but nothing arrived" report is explainable.
        console.info("Contact form: honeypot tripped, submission dropped.");
        return NextResponse.json({ ok: true });
    }

    const name = body.name?.trim().slice(0, MAX_FIELD);
    const email = body.email?.trim().slice(0, MAX_FIELD);
    const phone = body.phone?.trim().slice(0, MAX_FIELD);
    const service = body.subject?.trim().slice(0, MAX_FIELD);
    const message = body.message?.trim().slice(0, MAX_MESSAGE);

    if (!name || !message || (!email && !phone)) {
        return NextResponse.json(
            { error: "Please include your name, a message, and either an email or a phone number." },
            { status: 400 }
        );
    }

    const mailer = getTransporter();
    const from = process.env.SMTP_USER;
    const to = process.env.CONTACT_TO_EMAIL || from;

    if (!mailer || !from || !to) {
        console.error("SMTP_HOST / SMTP_USER / SMTP_PASS are not set — contact form cannot deliver.");
        return NextResponse.json(
            { error: "The form is not configured yet. Please call us in the meantime." },
            { status: 503 }
        );
    }

    const rows: Array<[string, string]> = [
        ["Name", name],
        ["Email", email || "not provided"],
        ["Phone", phone || "not provided"],
        ["Service", service || "not selected"],
    ];

    try {
        const info = await mailer.sendMail({
            from: { name: `${SITE.name} Website`, address: from },
            to,
            // Replying in the client's inbox goes straight back to the customer.
            replyTo: email ? { name: headerSafe(name), address: headerSafe(email) } : undefined,
            subject: headerSafe(`Website enquiry — ${service || "General"} — ${name}`),
            text: [
                ...rows.map(([label, value]) => `${label}: ${value}`),
                "",
                "Message:",
                message,
            ].join("\n"),
            html: `
                <h2 style="font-family:Arial,sans-serif">New website enquiry</h2>
                <table style="font-family:Arial,sans-serif;border-collapse:collapse">
                    ${rows
                    .map(
                        ([label, value]) =>
                            `<tr><td style="padding:4px 12px 4px 0"><strong>${label}</strong></td><td style="padding:4px 0">${escapeHtml(value)}</td></tr>`
                    )
                    .join("")}
                </table>
                <p style="font-family:Arial,sans-serif"><strong>Message</strong></p>
                <p style="font-family:Arial,sans-serif;white-space:pre-wrap">${escapeHtml(message)}</p>
            `,
        });

        // The server queue id ("250 OK id=...") can be looked up in cPanel -> Track Delivery.
        console.info("Contact form delivered", { to, messageId: info.messageId, response: info.response });

        return NextResponse.json({ ok: true });
    } catch (caught) {
        console.error("Contact form delivery failed", caught);
        return NextResponse.json(
            { error: "We couldn't send your message. Please call us instead." },
            { status: 502 }
        );
    }
}
