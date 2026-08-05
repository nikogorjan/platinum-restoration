import SiteContactDropdown from "../SiteContactDropdown";
import { SITE, TRUST_STRIP } from "../siteData";

// Consultation section: dark panel (matching the challenges panel) with a
// supporting column left and the form on an elevated white card right.
// The form is wireframe-only — it does not submit anywhere yet.
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
                                <form className="contact-form">
                                    <div className="row gy-4">
                                        <div className="col-md-6">
                                            <div className="form-group">
                                                <input type="text" className="form-control" name="name" id="name" placeholder="Your Name" />
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
                                            <div className="form-group ">
                                                <textarea name="message" id="message" cols={30} rows={4} className="form-control" placeholder="Tell us about your project..."></textarea>
                                            </div>
                                        </div>
                                        <div className="form-btn col-12">
                                            <button className="btn w-100">
                                                Request Free Consultation <i className="ri-arrow-right-up-line"></i>
                                            </button>
                                        </div>
                                    </div>
                                    <p className="pm-quote-note">
                                        No obligation — we&apos;ll never share your details.
                                    </p>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HomeContact;
