"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import SiteMobileMenu from "../SiteMobileMenu";
import {
    SITE,
    RESTORATION_SERVICES,
    CONSTRUCTION_SERVICES,
    TEMPLATE_HOMEPAGES,
    TEMPLATE_INNERPAGES,
} from "../siteData";

const SiteHeader = () => {
    const [isSticky, setIsSticky] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsSticky(window.scrollY > 500);
        };
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <div>
            <SiteMobileMenu isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
            <header className="nav-header header-layout3">
                <div className={`sticky-wrapper ${isSticky ? "sticky" : ""}`}>
                    <div className="menu-area">
                        <div className="container">
                            <div className="row align-items-center justify-content-lg-start justify-content-between">
                                <div className="col-auto">
                                    <div className="header-logo">
                                        <Link href="/">
                                            <img
                                                src={SITE.logo}
                                                alt={SITE.name}
                                                style={{ maxHeight: "54px", width: "auto" }}
                                            />
                                        </Link>
                                    </div>
                                </div>
                                <div className="col-auto menu-bar ms-xxl-0">
                                    <nav className="main-menu d-none d-lg-inline-block">
                                        <ul>
                                            <li>
                                                <Link href="/">HOME</Link>
                                            </li>
                                            <li>
                                                <Link href="/about">ABOUT</Link>
                                            </li>
                                            <li className="menu-item-has-children">
                                                <Link href="/restoration-services">RESTORATION</Link>
                                                <ul className="sub-menu">
                                                    <li><Link href="/restoration-services">All Restoration Services</Link></li>
                                                    {RESTORATION_SERVICES.map((service) => (
                                                        <li key={service.slug}>
                                                            <Link href={`/restoration-services/${service.slug}`}>{service.title}</Link>
                                                        </li>
                                                    ))}
                                                </ul>
                                            </li>
                                            <li className="menu-item-has-children">
                                                <Link href="/construction-services">CONSTRUCTION</Link>
                                                <ul className="sub-menu">
                                                    <li><Link href="/construction-services">All Construction Services</Link></li>
                                                    {CONSTRUCTION_SERVICES.map((service) => (
                                                        <li key={service.slug}>
                                                            <Link href={`/construction-services/${service.slug}`}>{service.title}</Link>
                                                        </li>
                                                    ))}
                                                </ul>
                                            </li>
                                            <li>
                                                <Link href="/property-management">PROPERTY MGMT</Link>
                                            </li>
                                            <li>
                                                <Link href="/contact">CONTACT</Link>
                                            </li>
                                            {/* TEMPORARY: browse all template pages while wireframing — remove before launch */}
                                            <li className="menu-item-has-children">
                                                <Link href="#">TEMPLATE</Link>
                                                <ul className="sub-menu">
                                                    <li className="menu-item-has-children">
                                                        <Link href="#">Homepages</Link>
                                                        <ul className="sub-menu">
                                                            {TEMPLATE_HOMEPAGES.map((page) => (
                                                                <li key={page.href}>
                                                                    <Link href={page.href}>{page.title}</Link>
                                                                </li>
                                                            ))}
                                                        </ul>
                                                    </li>
                                                    <li className="menu-item-has-children">
                                                        <Link href="#">Inner pages</Link>
                                                        <ul className="sub-menu">
                                                            {TEMPLATE_INNERPAGES.map((page) => (
                                                                <li key={page.href}>
                                                                    <Link href={page.href}>{page.title}</Link>
                                                                </li>
                                                            ))}
                                                        </ul>
                                                    </li>
                                                </ul>
                                            </li>
                                        </ul>
                                    </nav>
                                    <div className="navbar-right d-inline-flex d-lg-none">
                                        <button onClick={() => setIsMenuOpen(true)} type="button" className="menu-toggle icon-btn">
                                            <i className="ri-menu-line"></i>
                                        </button>
                                    </div>
                                </div>
                                <div className="col-auto d-xl-block d-none space-left">
                                    <div className="header-button">
                                        <div className="navbar-right-desc">
                                            <div className="icon-btn">
                                                <i className="ri-phone-fill"></i>
                                            </div>
                                            <div className="navbar-right-desc-details">
                                                <h6 className="title">Call us any time</h6>
                                                <Link className="link" href={SITE.phoneHref}>{SITE.phone}</Link>
                                            </div>
                                        </div>
                                        <Link href="/contact" className="btn d-xxl-flex d-none">
                                            GET A QUOTE <i className="ri-arrow-right-up-line"></i>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        </div>
    );
};

export default SiteHeader;
