import { NextResponse } from "next/server";
import { Resend } from "resend";
import { SITE } from "~/sections/Site/siteData";

// Contact form handler — delivers submissions by email via Resend.
//
// Why Resend rather than an SMTP/Nodemailer setup: SMTP would need the
// client's Outlook password (or a Microsoft app password) stored as a
// secret. Resend needs only an API key that we own, and the recipient is
// set here in code — CONTACT_TO_EMAIL, defaulting to the address on the
// site — so mail always lands in the client's inbox, not ours.
//
// Free tier: 3,000 emails/month (100/day), which is far more than a
// contact form on a local contractor site will use.

interface ContactPayload {
    name?: string;
    email?: string;
    phone?: string;
    subject?: string;
    message?: string;
    /** Honeypot — real users never fill this in. */
    company?: string;
}

const escapeHtml = (value: string) =>
    value
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;");

export async function POST(request: Request) {
    let body: ContactPayload;

    try {
        body = await request.json();
    } catch {
        return NextResponse.json({ error: "Invalid request." }, { status: 400 });
    }

    // Silently accept bot submissions so they stop retrying.
    if (body.company) {
        return NextResponse.json({ ok: true });
    }

    const name = body.name?.trim();
    const email = body.email?.trim();
    const phone = body.phone?.trim();
    const service = body.subject?.trim();
    const message = body.message?.trim();

    if (!name || !message || (!email && !phone)) {
        return NextResponse.json(
            { error: "Please include your name, a message, and either an email or a phone number." },
            { status: 400 }
        );
    }

    const apiKey = process.env.RESEND_API_KEY;
    const to = process.env.CONTACT_TO_EMAIL || SITE.email;
    const from = process.env.CONTACT_FROM_EMAIL;

    if (!apiKey || !from) {
        console.error("RESEND_API_KEY or CONTACT_FROM_EMAIL is not set — contact form cannot deliver.");
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
        const resend = new Resend(apiKey);
        const { error } = await resend.emails.send({
            from,
            to: [to],
            // Replying in the client's inbox goes straight back to the customer.
            replyTo: email || undefined,
            subject: `Website enquiry — ${service || "General"} — ${name}`,
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

        if (error) {
            console.error("Resend rejected the submission", error);
            return NextResponse.json(
                { error: "We couldn't send your message. Please call us instead." },
                { status: 502 }
            );
        }

        return NextResponse.json({ ok: true });
    } catch (caught) {
        console.error("Contact form delivery failed", caught);
        return NextResponse.json(
            { error: "We couldn't send your message. Please call us instead." },
            { status: 502 }
        );
    }
}
