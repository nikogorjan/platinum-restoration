"use client";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import SiteMobileMenu from "../SiteMobileMenu";
import { SITE, RESTORATION_SERVICES, CONSTRUCTION_SERVICES } from "../siteData";

// Fixed translucent header (pmx-header): logo left, nav + CTA right,
// custom hover/focus dropdowns. Publishes its rendered height as
// --pm-header-h — the hero and every breadcrumb page offset by it.
const SiteHeader = () => {
    const [scrolled, setScrolled] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const headerRef = useRef<HTMLElement | null>(null);

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 8);
        onScroll();
        window.addEventListener("scroll", onScroll, { passive: true });
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    useEffect(() => {
        const setHeaderHeight = () => {
            if (headerRef.current) {
                document.documentElement.style.setProperty(
                    "--pm-header-h",
                    `${headerRef.current.offsetHeight}px`
                );
            }
        };
        setHeaderHeight();
        window.addEventListener("resize", setHeaderHeight);
        return () => window.removeEventListener("resize", setHeaderHeight);
    }, []);

    return (
        <div>
            <SiteMobileMenu isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
            <header className={`pmx-header ${scrolled ? "scrolled" : ""}`} ref={headerRef}>
                <div className="pmx-wrap pmx-header-in">
                    <Link href="/" className="pmx-logo">
                        <Image
                            src={SITE.logo}
                            alt={SITE.name}
                            width={260}
                            height={54}
                            priority
                            style={{ width: "auto", height: "44px" }}
                        />
                    </Link>

                    <ul className="pmx-nav">
                        <li><Link href="/">Home</Link></li>
                        <li><Link href="/about">About</Link></li>
                        <li>
                            <Link href="/restoration-services">
                                Restoration <i className="ri-arrow-down-s-line"></i>
                            </Link>
                            <ul className="pmx-drop">
                                <li>
                                    <Link href="/restoration-services" className="all">
                                        All Restoration Services
                                    </Link>
                                </li>
                                {RESTORATION_SERVICES.map((service) => (
                                    <li key={service.slug}>
                                        <Link href={`/restoration-services/${service.slug}`}>
                                            {service.title}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </li>
                        <li>
                            <Link href="/construction-services">
                                Construction <i className="ri-arrow-down-s-line"></i>
                            </Link>
                            <ul className="pmx-drop">
                                <li>
                                    <Link href="/construction-services" className="all">
                                        All Construction Services
                                    </Link>
                                </li>
                                {CONSTRUCTION_SERVICES.map((service) => (
                                    <li key={service.slug}>
                                        <Link href={`/construction-services/${service.slug}`}>
                                            {service.title}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </li>
                        <li><Link href="/property-management">Property Mgmt</Link></li>
                        <li><Link href="/contact">Contact</Link></li>
                    </ul>

                    <div className="pmx-header-cta">
                        <a href={SITE.phoneHref} className="pmx-header-phone">
                            <i className="ri-phone-fill"></i>
                            <span>
                                <span className="label">Call us any time</span>
                                <span className="num">{SITE.phone}</span>
                            </span>
                        </a>
                        <Link href="/contact" className="pmx-btn">
                            Get a Quote <i className="ri-arrow-right-up-line"></i>
                        </Link>
                        <button
                            onClick={() => setIsMenuOpen(true)}
                            type="button"
                            className="pmx-burger"
                            aria-label="Open menu"
                        >
                            <i className="ri-menu-line"></i>
                        </button>
                    </div>
                </div>
            </header>
        </div>
    );
};

export default SiteHeader;
