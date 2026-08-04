"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import { SITE, RESTORATION_SERVICES, CONSTRUCTION_SERVICES } from "../siteData";

// Right-hand slide-in drawer with iOS-style drill-down sub-panels.
// Styles live in site-theme.css under .pm-menu-*.
const GROUPS = {
    restoration: {
        title: "Restoration",
        links: [
            { title: "All Restoration Services", href: "/restoration-services" },
            ...RESTORATION_SERVICES.map((s) => ({ title: s.title, href: `/restoration-services/${s.slug}` })),
        ],
    },
    construction: {
        title: "Construction",
        links: [
            { title: "All Construction Services", href: "/construction-services" },
            ...CONSTRUCTION_SERVICES.map((s) => ({ title: s.title, href: `/construction-services/${s.slug}` })),
        ],
    },
};

const SiteMobileMenu = ({ isMenuOpen, setIsMenuOpen }) => {
    const [activeGroup, setActiveGroup] = useState(null);

    const close = () => {
        setIsMenuOpen(false);
        setActiveGroup(null);
    };

    useEffect(() => {
        document.body.style.overflow = isMenuOpen ? "hidden" : "";
        return () => {
            document.body.style.overflow = "";
        };
    }, [isMenuOpen]);

    useEffect(() => {
        const onKey = (e) => {
            if (e.key === "Escape") close();
        };
        document.addEventListener("keydown", onKey);
        return () => document.removeEventListener("keydown", onKey);
    });

    const group = activeGroup ? GROUPS[activeGroup] : null;

    return (
        <div className={`pm-mobile-menu ${isMenuOpen ? "open" : ""}`} aria-hidden={!isMenuOpen}>
            <div className="pm-menu-backdrop" onClick={close}></div>
            <aside className="pm-menu-panel" role="dialog" aria-label="Menu">
                <div className="pm-menu-head">
                    <Link href="/" onClick={close}>
                        <img src={SITE.logo} alt={SITE.name} />
                    </Link>
                    <button type="button" className="pm-menu-close" onClick={close} aria-label="Close menu">
                        <i className="ri-close-line"></i>
                    </button>
                </div>
                <div className={`pm-menu-levels ${activeGroup ? "sub-active" : ""}`}>
                    <nav className="pm-menu-level pm-menu-root">
                        <ul>
                            <li><Link href="/" onClick={close}>Home</Link></li>
                            <li><Link href="/about" onClick={close}>About</Link></li>
                            <li>
                                <button type="button" className="pm-menu-item" onClick={() => setActiveGroup("restoration")}>
                                    Restoration <i className="ri-arrow-right-s-line"></i>
                                </button>
                            </li>
                            <li>
                                <button type="button" className="pm-menu-item" onClick={() => setActiveGroup("construction")}>
                                    Construction <i className="ri-arrow-right-s-line"></i>
                                </button>
                            </li>
                            <li><Link href="/property-management" onClick={close}>Property Management</Link></li>
                            <li><Link href="/contact" onClick={close}>Contact</Link></li>
                        </ul>
                        <div className="pm-menu-cta">
                            <a href={SITE.phoneHref} className="btn w-100">
                                <i className="ri-phone-fill"></i> {SITE.phone}
                            </a>
                            <Link href="/contact" onClick={close} className="btn style2 w-100">
                                GET A QUOTE <i className="ri-arrow-right-up-line"></i>
                            </Link>
                        </div>
                    </nav>
                    <nav className="pm-menu-level pm-menu-sub">
                        <button type="button" className="pm-menu-back" onClick={() => setActiveGroup(null)}>
                            <i className="ri-arrow-left-s-line"></i> Back
                        </button>
                        {group && (
                            <>
                                <h4 className="pm-menu-sub-title">{group.title}</h4>
                                <ul>
                                    {group.links.map((link) => (
                                        <li key={link.href}>
                                            <Link href={link.href} onClick={close}>{link.title}</Link>
                                        </li>
                                    ))}
                                </ul>
                            </>
                        )}
                    </nav>
                </div>
            </aside>
        </div>
    );
};

export default SiteMobileMenu;
