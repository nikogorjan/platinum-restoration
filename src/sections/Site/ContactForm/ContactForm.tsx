"use client";

import { useState, type FormEvent } from "react";
import SiteContactDropdown from "../SiteContactDropdown";
import { SITE } from "../siteData";

type Status = "idle" | "sending" | "sent" | "error";

// The consultation form. Posts to /api/contact, which forwards to the
// client's inbox — see that route for why no mailbox password is needed.
const ContactForm = () => {
    const [status, setStatus] = useState<Status>("idle");
    const [error, setError] = useState<string>("");

    const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        setStatus("sending");
        setError("");

        const data = new FormData(event.currentTarget);
        const payload = {
            name: String(data.get("name") || ""),
            email: String(data.get("email") || ""),
            phone: String(data.get("number") || ""),
            subject: String(data.get("subject") || ""),
            message: String(data.get("message") || ""),
            company: String(data.get("company") || ""),
        };

        try {
            const response = await fetch("/api/contact", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(payload),
            });
            const result = await response.json();

            if (!response.ok) {
                setError(result.error || "Something went wrong. Please call us instead.");
                setStatus("error");
                return;
            }

            setStatus("sent");
        } catch {
            setError("Something went wrong. Please call us instead.");
            setStatus("error");
        }
    };

    if (status === "sent") {
        return (
            <div className="pm-form-success" role="status">
                <i className="ri-checkbox-circle-fill"></i>
                <h4>Thank you — your message is on its way.</h4>
                <p>
                    We&apos;ll get back to you shortly. If it&apos;s urgent, call us
                    any time at <a href={SITE.phoneHref}>{SITE.phone}</a>.
                </p>
            </div>
        );
    }

    return (
        <form className="contact-form" onSubmit={handleSubmit} noValidate>
            <div className="row gy-4">
                <div className="col-md-6">
                    <div className="form-group">
                        <input type="text" className="form-control" name="name" id="name" placeholder="Your Name" required />
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="form-group">
                        <input type="email" className="form-control" name="email" id="email" placeholder="Email Address" />
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="form-group">
                        <input type="tel" className="form-control" name="number" id="number" placeholder="Phone Number" />
                    </div>
                </div>
                <SiteContactDropdown />
                <div className="col-12">
                    <div className="form-group">
                        <textarea name="message" id="message" cols={30} rows={4} className="form-control" placeholder="Tell us about your project..." required></textarea>
                    </div>
                </div>

                {/* Honeypot — hidden from people, catches bots. */}
                <div className="pm-hp" aria-hidden="true">
                    <label htmlFor="company">Company</label>
                    <input type="text" name="company" id="company" tabIndex={-1} autoComplete="off" />
                </div>

                <div className="form-btn col-12">
                    <button className="btn w-100" type="submit" disabled={status === "sending"}>
                        {status === "sending" ? "Sending…" : "Request Free Consultation"}
                        <i className={status === "sending" ? "ri-loader-4-line" : "ri-arrow-right-up-line"}></i>
                    </button>
                </div>
            </div>

            {status === "error" && (
                <p className="pm-form-error" role="alert">
                    <i className="ri-error-warning-line"></i> {error}
                </p>
            )}

            <p className="pm-quote-note">
                No obligation — we&apos;ll never share your details.
            </p>
        </form>
    );
};

export default ContactForm;
