import Link from "next/link";
import {
    SITE,
    RESTORATION_SERVICES,
    CONSTRUCTION_SERVICES,
} from "../siteData";

const SiteFooter = () => {
    return (
        <div>
            <footer
                className="footer-wrapper footer-layout1 background-image"
                style={{ backgroundImage: "url('/main-assets/img/bg/footer-bg1-1.png')" }}
            >
                <div className="container">
                    <div className="footer-top-1">
                        <div className="footer-logo">
                            <Link href="/">
                                {/* white panel so the blue/red logo stays readable on the dark footer */}
                                <img
                                    src={SITE.logo}
                                    alt={SITE.name}
                                    style={{ background: "#fff", padding: "10px 16px", borderRadius: "8px", maxHeight: "64px", width: "auto" }}
                                />
                            </Link>
                        </div>
                        <div className="subscribe-box">
                            <p className="subscribe-box_text">
                                Restoration and construction services you can rely on — call us any time at{" "}
                                <Link href={SITE.phoneHref}>{SITE.phone}</Link>.
                            </p>
                        </div>
                    </div>
                    <div className="widget-area">
                        <div className="row justify-content-between">
                            <div className="col-md-6 col-xl-3">
                                <div className="widget widget-about footer-widget">
                                    <h3 className="widget_title">About Company</h3>
                                    <p className="about-text">
                                        With over 30 years of experience, we combine expertise, integrity,
                                        and personalized care to transform and protect your property.
                                    </p>
                                    <h4 className="about-year">30+ Years of Experience</h4>
                                    <p className="about-text">{SITE.serviceArea}</p>
                                </div>
                            </div>
                            <div className="col-md-6 col-xl-auto">
                                <div className="widget widget_nav_menu footer-widget">
                                    <h3 className="widget_title">Restoration</h3>
                                    <div className="menu-all-pages-container">
                                        <ul className="menu">
                                            {RESTORATION_SERVICES.map((service) => (
                                                <li key={service.slug}>
                                                    <Link href={`/restoration-services/${service.slug}`}>{service.title}</Link>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6 col-xl-auto">
                                <div className="widget widget_nav_menu footer-widget">
                                    <h3 className="widget_title">Construction</h3>
                                    <div className="menu-all-pages-container">
                                        <ul className="menu">
                                            {CONSTRUCTION_SERVICES.map((service) => (
                                                <li key={service.slug}>
                                                    <Link href={`/construction-services/${service.slug}`}>{service.title}</Link>
                                                </li>
                                            ))}
                                            <li>
                                                <Link href="/property-management">Property Management</Link>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6 col-xl-auto">
                                <div className="widget footer-widget widget-contact">
                                    <h3 className="widget_title">Get in Touch</h3>
                                    <p className="footer-text">
                                        <Link href={SITE.phoneHref}>{SITE.phone}</Link>
                                    </p>
                                    <p className="footer-text">
                                        <Link href={`mailto:${SITE.email}`}>{SITE.email}</Link>
                                    </p>
                                    <p className="contact-text">{SITE.address}</p>
                                    <h3 className="widget_title">Follow Us</h3>
                                    <div className="social-btn style2">
                                        <Link href={SITE.facebook}><i className="ri-facebook-fill"></i></Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <div className="copyright-wrap">
                        <div className="row gy-3 justify-content-md-between justify-content-center">
                            <div className="col-auto align-self-center">
                                <p className="copyright-text text-center">
                                    © 2026 <Link href="/">{SITE.name}</Link> | All rights reserved
                                </p>
                            </div>
                            <div className="col-auto">
                                <div className="footer-links">
                                    <Link href="/privacy-policy">Privacy Policy</Link>
                                    <Link href="/contact">Contact Us</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default SiteFooter;
