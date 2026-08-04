import SiteHeader from "~/sections/Site/SiteHeader";
import SiteFooter from "~/sections/Site/SiteFooter";
import SiteBreadcrumb from "~/sections/Site/SiteBreadcrumb";
import Scroll from "~/sections/Common/Scroll";
import { SITE, PRIVACY } from "~/sections/Site/siteData";

export const metadata = { title: "Privacy Policy" };

export default function PrivacyPolicyPage() {
    return (
        <div style={{ overflow: "hidden" }}>
            <SiteHeader />
            <SiteBreadcrumb title="Privacy Policy" />
            <div className="space-top space-bottom">
                <div className="container">
                    <div className="row gy-50 gx-60">
                        {/* Sticky contents */}
                        <div className="col-lg-4">
                            <nav className="pm-legal-toc" aria-label="Sections">
                                <h4>Contents</h4>
                                <ul>
                                    {PRIVACY.sections.map((section) => (
                                        <li key={section.id}>
                                            <a href={`#${section.id}`}>{section.title}</a>
                                        </li>
                                    ))}
                                    <li><a href="#contact">Contact Us</a></li>
                                </ul>
                            </nav>
                        </div>

                        {/* Policy body */}
                        <div className="col-lg-8">
                            <div className="pm-legal">
                                <p className="pm-legal-intro">{PRIVACY.intro}</p>
                                <p className="pm-legal-date">{PRIVACY.effectiveDate}</p>

                                {PRIVACY.sections.map((section, index) => (
                                    <section className="pm-legal-section" id={section.id} key={section.id}>
                                        <h3>
                                            <span className="num">{String(index + 1).padStart(2, "0")}</span>
                                            {section.title}
                                        </h3>
                                        <p>{section.body}</p>
                                        {section.items && (
                                            <ul>
                                                {section.items.map((item) => (
                                                    <li key={item}>
                                                        <i className="ri-check-line"></i>
                                                        {item}
                                                    </li>
                                                ))}
                                            </ul>
                                        )}
                                    </section>
                                ))}

                                <section className="pm-legal-section" id="contact">
                                    <h3>
                                        <span className="num">{String(PRIVACY.sections.length + 1).padStart(2, "0")}</span>
                                        Contact Us
                                    </h3>
                                    <p>
                                        If you have any questions about this policy or about the
                                        information we hold, please get in touch:
                                    </p>
                                    <div className="pm-legal-contact">
                                        <p><strong>{SITE.name}</strong></p>
                                        <p>
                                            <i className="ri-map-pin-2-line"></i>
                                            {SITE.address}
                                        </p>
                                        <p>
                                            <i className="ri-phone-fill"></i>
                                            <a href={SITE.phoneHref}>{SITE.phone}</a>
                                        </p>
                                        <p>
                                            <i className="ri-mail-line"></i>
                                            <a href={`mailto:${SITE.email}`}>{SITE.email}</a>
                                        </p>
                                    </div>
                                </section>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <SiteFooter />
            <Scroll />
        </div>
    );
}
