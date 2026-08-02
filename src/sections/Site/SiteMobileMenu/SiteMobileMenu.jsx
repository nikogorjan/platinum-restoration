"use client";
import Link from "next/link";
import { useState } from "react";
import {
    SITE,
    RESTORATION_SERVICES,
    CONSTRUCTION_SERVICES,
    TEMPLATE_HOMEPAGES,
    TEMPLATE_INNERPAGES,
} from "../siteData";

const SubMenu = ({ id, label, links, openMenu, toggle }) => {
    const isOpen = openMenu === id;
    return (
        <li className={`menu-item-has-children submenu-item-has-children ${isOpen ? "active-class" : ""}`}>
            <Link onClick={(e) => { e.preventDefault(); toggle(id); }} href="#">
                {label} <span className="mean-expand-class"></span>
            </Link>
            <ul
                className={`sub-menu submenu-class ${isOpen ? "menu-open" : ""}`}
                style={{ display: isOpen ? "block" : "none" }}
            >
                {links.map((link) => (
                    <li key={link.href}>
                        <Link href={link.href}>{link.title}</Link>
                    </li>
                ))}
            </ul>
        </li>
    );
};

const SiteMobileMenu = ({ isMenuOpen, setIsMenuOpen }) => {
    const [openMenu, setOpenMenu] = useState(null);
    const toggle = (id) => setOpenMenu(openMenu === id ? null : id);

    const restorationLinks = [
        { title: "All Restoration Services", href: "/restoration-services" },
        ...RESTORATION_SERVICES.map((s) => ({ title: s.title, href: `/restoration-services/${s.slug}` })),
    ];
    const constructionLinks = [
        { title: "All Construction Services", href: "/construction-services" },
        ...CONSTRUCTION_SERVICES.map((s) => ({ title: s.title, href: `/construction-services/${s.slug}` })),
    ];

    return (
        <div className={`mobile-menu-wrapper ${isMenuOpen ? "body-visible" : ""}`}>
            <div className="mobile-menu-area">
                <div className="mobile-logo">
                    <Link href="/">
                        <img src={SITE.logo} alt={SITE.name} style={{ maxWidth: "200px", height: "auto" }} />
                    </Link>
                    <button onClick={() => setIsMenuOpen(false)} className="menu-toggle">
                        <i className="ri-close-line"></i>
                    </button>
                </div>
                <div className="mobile-menu">
                    <ul>
                        <li><Link href="/">Home</Link></li>
                        <li><Link href="/about">About</Link></li>
                        <SubMenu id="restoration" label="Restoration" links={restorationLinks} openMenu={openMenu} toggle={toggle} />
                        <SubMenu id="construction" label="Construction" links={constructionLinks} openMenu={openMenu} toggle={toggle} />
                        <li><Link href="/property-management">Property Management</Link></li>
                        <li><Link href="/contact">Contact</Link></li>
                        {/* TEMPORARY: template page links — remove before launch */}
                        <SubMenu id="template-home" label="Template: Homepages" links={TEMPLATE_HOMEPAGES} openMenu={openMenu} toggle={toggle} />
                        <SubMenu id="template-inner" label="Template: Inner pages" links={TEMPLATE_INNERPAGES} openMenu={openMenu} toggle={toggle} />
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default SiteMobileMenu;
