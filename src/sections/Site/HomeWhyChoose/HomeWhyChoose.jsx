"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import { KEY_BENEFITS } from "../siteData";

// "Why choose Platinum" — numbered rail + animated showcase stage.
// The stage remounts on tab change (key={active}) so its CSS reveal
// animations replay: image wipe, ken-burns settle, ghost number drop,
// staggered card content. Auto-advances every 6s (progress bar on the
// active rail item), pauses on hover. Styles: site-theme.css (.pm-why-*).
const AUTO_ADVANCE_MS = 6000;

const HomeWhyChoose = () => {
    const [active, setActive] = useState(0);
    const [paused, setPaused] = useState(false);

    useEffect(() => {
        if (paused) return;
        const timer = setInterval(
            () => setActive((current) => (current + 1) % KEY_BENEFITS.length),
            AUTO_ADVANCE_MS
        );
        return () => clearInterval(timer);
    }, [paused, active]);

    const benefit = KEY_BENEFITS[active];

    return (
        <div className="why-area-3 space-top" id="service-sec">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-8">
                        <div className="title-area text-center">
                            <span className="sub-title text-theme">
                                Why choose Platinum <i className="ri-arrow-right-down-line"></i>
                            </span>
                            <h2 className="sec-title">
                                When you choose Platinum, you're choosing a team that prioritizes your needs
                            </h2>
                        </div>
                    </div>
                </div>

                <div
                    className="pm-why-grid"
                    onMouseEnter={() => setPaused(true)}
                    onMouseLeave={() => setPaused(false)}
                >
                    <ul className="pm-why-rail" role="tablist" aria-label="Why choose Platinum">
                        {KEY_BENEFITS.map((item, index) => (
                            <li key={item.tab} className={active === index ? "active" : ""}>
                                <button
                                    type="button"
                                    role="tab"
                                    aria-selected={active === index}
                                    onClick={() => setActive(index)}
                                >
                                    <span className="pm-why-num">{String(index + 1).padStart(2, "0")}</span>
                                    <span className="pm-why-label">{item.tab}</span>
                                    <i className="ri-arrow-right-line"></i>
                                </button>
                                {active === index && <span className="pm-why-progress" aria-hidden="true"></span>}
                            </li>
                        ))}
                    </ul>

                    <div className="pm-why-stage" key={active} role="tabpanel">
                        <div className="pm-why-media">
                            <img src={benefit.image} alt={benefit.title} />
                            <span className="pm-why-ghost">{String(active + 1).padStart(2, "0")}</span>
                        </div>
                        <div className="pm-why-card">
                            <h4 className="pm-why-card-title">{benefit.title}</h4>
                            <p className="pm-why-card-text">{benefit.text}</p>
                            <ul className="pm-why-card-points">
                                {benefit.points.map((point) => (
                                    <li key={point}>
                                        <i className="ri-checkbox-circle-fill"></i>
                                        {point}
                                    </li>
                                ))}
                            </ul>
                            <Link href="/about" className="btn">
                                More Details <i className="ri-arrow-right-up-line"></i>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HomeWhyChoose;
