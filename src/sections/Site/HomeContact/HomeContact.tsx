import ContactForm from "../ContactForm";
import { SITE, TRUST_STRIP } from "../siteData";

// Consultation section: dark panel (matching the challenges panel) with a
// supporting column left and the form on an elevated white card right.
// The form itself is a client component (ContactForm) that posts to /api/contact.
const HomeContact = () => {
    return (
        <section className="contact-area-2 space-top overflow-hidden" id="contact-sec">
            <div className="container">
                <div className="pm-quote-panel">
                    <span className="pm-quote-diamond" aria-hidden="true"></span>
                    <div className="row gy-50 gx-60 align-items-center">
                        <div className="col-lg-5">
                            <span className="sub-title">Get a Free Consultation</span>
                            <h2 className="pm-quote-title">Ready to take the first step?</h2>
                            <p className="pm-quote-text">
                                Tell us what your property needs and we&apos;ll get back to
                                you quickly with honest advice and a clear estimate.
                            </p>
                            <a href={SITE.phoneHref} className="pm-quote-phone">
                                <i className="ri-phone-fill"></i>
                                <span>
                                    <span className="label">Call us any time</span>
                                    <span className="num">{SITE.phone}</span>
                                </span>
                            </a>
                            <ul className="pm-quote-points">
                                {TRUST_STRIP.map((item) => (
                                    <li key={item.text}>
                                        <i className={item.icon}></i>
                                        {item.text}
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="col-lg-7">
                            <div className="pm-quote-card">
                                <h3 className="pm-quote-card-title">Request your free consultation</h3>
                                <ContactForm />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HomeContact;
