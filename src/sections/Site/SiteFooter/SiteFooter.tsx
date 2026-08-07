import Image from "next/image";
import Link from "next/link";
import {
    SITE,
    RESTORATION_SERVICES,
    CONSTRUCTION_SERVICES,
} from "../siteData";

// Mega footer (.pmx-footer): CTA row up top, brand + link columns, a
// giant ghost "PLATINUM" wordmark, then the bottom bar. The bottom bar
// keeps the .pm-footer-bottom class so the sticky mobile call bar's
// clearance rule in site-theme.css still applies.
const SiteFooter = () => {
    return (
        <footer className="pmx-footer">
            <div className="pmx-wrap">
                <div className="pmx-footer-cta">
                    <h3>
                        Have a project in mind? <em>Let&apos;s talk.</em>
                    </h3>
                    <div className="pmx-footer-cta-actions">
                        <Link href="/contact" className="pmx-btn">
                            Get a Free Consultation <i className="ri-arrow-right-up-line"></i>
                        </Link>
                        <a href={SITE.phoneHref} className="pmx-btn pmx-btn--ghost-dark">
                            <i className="ri-phone-fill"></i> {SITE.phone}
                        </a>
                    </div>
                </div>

                <div className="pmx-footer-grid">
                    <div className="pmx-footer-brand">
                        <Link href="/" className="pmx-footer-logo">
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
                        <p className="pmx-footer-serving">
                            <i className="ri-map-pin-2-line"></i>
                            {SITE.serviceArea}
                        </p>
                        <div className="pmx-footer-social">
                            <Link href={SITE.facebook} aria-label="Facebook">
                                <i className="ri-facebook-fill"></i>
                            </Link>
                        </div>
                    </div>

                    <div className="pmx-footer-col">
                        <h4>Restoration</h4>
                        <ul>
                            {RESTORATION_SERVICES.map((service) => (
                                <li key={service.slug}>
                                    <Link href={`/restoration-services/${service.slug}`}>{service.title}</Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="pmx-footer-col">
                        <h4>Construction</h4>
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

                    <div className="pmx-footer-col">
                        <h4>Get in Touch</h4>
                        <a href={SITE.phoneHref} className="pmx-footer-phone">
                            <i className="ri-phone-fill"></i>
                            <span>
                                <span className="label">Call us any time</span>
                                <span className="num">{SITE.phone}</span>
                            </span>
                        </a>
                        <a href={`mailto:${SITE.email}`} className="pmx-footer-line">
                            <i className="ri-mail-line"></i>
                            <span>{SITE.email}</span>
                        </a>
                        <p className="pmx-footer-line">
                            <i className="ri-map-pin-line"></i>
                            <span>{SITE.address}</span>
                        </p>
                    </div>
                </div>
            </div>

            <span className="pmx-footer-wordmark" aria-hidden="true">
                PLATINUM
            </span>

            <div className="pm-footer-bottom">
                <div className="pmx-wrap pmx-footer-bottom-in">
                    <p>© 2026 <Link href="/">{SITE.name}</Link> | All rights reserved</p>
                    <div className="pmx-footer-bottom-links">
                        <Link href="/privacy-policy">Privacy Policy</Link>
                        <Link href="/contact">Contact Us</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default SiteFooter;
