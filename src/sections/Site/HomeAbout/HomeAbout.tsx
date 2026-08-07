import Link from "next/link";
import BeforeAfter from "../BeforeAfter";
import Reveal from "../Reveal";
import { SITE, ABOUT, BEFORE_AFTER_IMAGE, SERVICE_TOWNS } from "../siteData";

// About — editorial split: story + hairline checklist left, interactive
// before/after right, then a full-width row of big stat numerals
// (Terahaus-style). Styles: modern.css (.pmx-about-*, .pmx-stats).
const HomeAbout = () => {
    return (
        <div className="pmx-section" id="about-sec">
            <div className="pmx-wrap">
                <div className="pmx-about-grid">
                    <Reveal className="pmx-about-copy">
                        <span className="pmx-eyebrow">About Us</span>
                        <h2 className="pmx-title">{ABOUT.title}</h2>
                        <p className="pmx-lead">{ABOUT.text}</p>
                        <ul className="pmx-checklist">
                            {ABOUT.checklist.map((item) => (
                                <li key={item}>
                                    <i className="ri-checkbox-circle-fill"></i>
                                    {item}
                                </li>
                            ))}
                        </ul>
                        <div className="pmx-about-owner">
                            <span className="pmx-owner-sig">
                                <span className="name">{ABOUT.owner}</span>
                                <span className="role">{ABOUT.ownerRole}, born & raised in the Triangle</span>
                            </span>
                            <Link href="/about" className="pmx-btn pmx-btn--ghost">
                                More About Us <i className="ri-arrow-right-up-line"></i>
                            </Link>
                        </div>
                    </Reveal>

                    <Reveal delay={140} className="pmx-about-media">
                        <BeforeAfter
                            image={BEFORE_AFTER_IMAGE}
                            altBefore="Water-damaged room before restoration"
                            altAfter="Fully restored living space"
                        />
                        <p>{ABOUT.text2}</p>
                    </Reveal>
                </div>

                <Reveal>
                    <div className="pmx-stats">
                        <div className="pmx-stat">
                            <span className="num">
                                30<em>+</em>
                            </span>
                            <span className="label">Years of experience</span>
                            <span className="sub">Restoration, construction & property care</span>
                        </div>
                        <div className="pmx-stat">
                            <span className="num">{SERVICE_TOWNS.towns.length}<em>+</em></span>
                            <span className="label">Towns served</span>
                            <span className="sub">Across the Triangle, North Carolina</span>
                        </div>
                        <div className="pmx-stat">
                            <span className="num">
                                24<em>–</em>48<em>h</em>
                            </span>
                            <span className="label">Typical response</span>
                            <span className="sub">
                                Most routine requests resolved fast —{" "}
                                <a href={SITE.phoneHref} style={{ color: "var(--theme-color)", fontWeight: 600 }}>
                                    call us
                                </a>
                            </span>
                        </div>
                    </div>
                </Reveal>
            </div>
        </div>
    );
};

export default HomeAbout;
