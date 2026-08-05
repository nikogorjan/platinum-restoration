import Image from "next/image";
import Link from "next/link";
import {
    SITE,
    RESTORATION_SERVICES,
    CONSTRUCTION_SERVICES,
} from "../siteData";

// Custom footer (.pm-footer) — deep blue-black with a faint blueprint grid,
// diamond-bulleted columns, and a prominent phone block. No template
// widget classes, so none of their hover effects leak in.
const SiteFooter = () => {
    return (
        <footer className="pm-footer">
            <div className="container">
                <div className="pm-footer-top">
                    <div className="pm-footer-brand">
                        <Link href="/" className="pm-footer-logo">
                            <Image
                                src={SITE.logo}
                                alt={SITE.name}
                                width={280}
                                height={58}
                                style={{ width: "auto", height: "auto" }}
                            />
                        </Link>
                        <p>
                            With over 30 years of experience, we combine expertise,
                            integrity, and personalized care to transform and protect
                            your property.
                        </p>
                        <p className="pm-footer-serving">
                            <i className="ri-map-pin-2-line"></i>
                            {SITE.serviceArea}
                        </p>
                        <div className="pm-footer-social">
                            <Link href={SITE.facebook} aria-label="Facebook">
                                <i className="ri-facebook-fill"></i>
                            </Link>
                        </div>
                    </div>
                    <div className="pm-footer-cols">
                        <div>
                            <h4 className="pm-footer-title"><span className="d"></span>Restoration</h4>
                            <ul>
                                {RESTORATION_SERVICES.map((service) => (
                                    <li key={service.slug}>
                                        <Link href={`/restoration-services/${service.slug}`}>{service.title}</Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div>
                            <h4 className="pm-footer-title"><span className="d"></span>Construction</h4>
                            <ul>
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
                        <div>
                            <h4 className="pm-footer-title"><span className="d"></span>Get in Touch</h4>
                            <a href={SITE.phoneHref} className="pm-footer-phone">
                                <i className="ri-phone-fill"></i>
                                <span>
                                    <span className="label">Call us any time</span>
                                    <span className="num">{SITE.phone}</span>
                                </span>
                            </a>
                            <a href={`mailto:${SITE.email}`} className="pm-footer-line">
                                <i className="ri-mail-line"></i>
                                <span>{SITE.email}</span>
                            </a>
                            <p className="pm-footer-line">
                                <i className="ri-map-pin-line"></i>
                                <span>{SITE.address}</span>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="pm-footer-bottom">
                <div className="container">
                    <p>© 2026 <Link href="/">{SITE.name}</Link> | All rights reserved</p>
                    <div className="pm-footer-bottom-links">
                        <Link href="/privacy-policy">Privacy Policy</Link>
                        <Link href="/contact">Contact Us</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default SiteFooter;
