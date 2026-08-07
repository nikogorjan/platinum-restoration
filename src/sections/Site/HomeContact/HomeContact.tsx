import ContactForm from "../ContactForm";
import { SITE, TRUST_STRIP } from "../siteData";

// Consultation — full-bleed navy band with blueprint grid: pitch, phone
// and hairline trust list left, elevated white form card right. The form
// itself (ContactForm) is untouched and still posts to /api/contact.
// Styles: modern.css (.pmx-quote-*).
const HomeContact = () => {
    return (
        <section className="pmx-quote pmx-dark" id="contact-sec">
            <div className="pmx-wrap">
                <div className="pmx-quote-grid">
                    <div className="pmx-quote-copy">
                        <span className="pmx-eyebrow">Get a Free Consultation</span>
                        <h2 className="pmx-title">Ready to take the first step?</h2>
                        <p>
                            Tell us what your property needs and we&apos;ll get back to
                            you quickly with honest advice and a clear estimate.
                        </p>
                        <a href={SITE.phoneHref} className="pmx-quote-phone">
                            <i className="ri-phone-fill"></i>
                            <span>
                                <span className="label">Call us any time</span>
                                <span className="num">{SITE.phone}</span>
                            </span>
                        </a>
                        <ul className="pmx-quote-points">
                            {TRUST_STRIP.map((item) => (
                                <li key={item.text}>
                                    <i className={item.icon}></i>
                                    {item.text}
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="pmx-quote-card">
                        <h3>Request your free consultation</h3>
                        <p>No obligation — we&apos;ll reply within one business day.</p>
                        <ContactForm />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HomeContact;
