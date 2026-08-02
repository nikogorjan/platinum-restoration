import SiteContactDropdown from "../SiteContactDropdown";
import { SITE } from "../siteData";

// Home-3 contact/quote section with real contact details.
// The form is wireframe-only — it does not submit anywhere yet.
const HomeContact = () => {
    return (
        <section className="contact-area-2 space-bottom space-top overflow-hidden" id="contact-sec">
            <div className="container">
                <div
                    className="contact-wrap2 space overflow-hidden shape-mockup-wrap"
                    style={{ backgroundColor: "var(--smoke-color3)" }}
                >
                    <div className="row gy-60 justify-content-center">
                        <div className="col-xl-8">
                            <div className="contact-form-wrap">
                                <div className="title-area text-center">
                                    <span className="sub-title text-theme">
                                        Get a Free Consultation <i className="ri-arrow-right-down-line"></i>
                                    </span>
                                    <h2 className="sec-title">Ready to take the first step?</h2>
                                    <p>
                                        Call us at{" "}
                                        <a href={SITE.phoneHref}><strong>{SITE.phone}</strong></a>
                                        {" "}or send a message — we&apos;ll get back to you quickly.
                                    </p>
                                </div>
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
                                                <textarea name="message" id="message" cols="30" rows="3" className="form-control" placeholder="Tell us about your project..."></textarea>
                                            </div>
                                        </div>
                                        <div className="form-btn col-12">
                                            <button className="btn w-100">
                                                Request Free Consultation <i className="ri-arrow-right-up-line"></i>
                                            </button>
                                        </div>
                                    </div>
                                    <p className="form-messages mb-0 mt-3"></p>
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
