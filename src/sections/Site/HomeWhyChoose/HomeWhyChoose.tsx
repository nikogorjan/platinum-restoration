"use client";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { KEY_BENEFITS } from "../siteData";

// "Why choose Platinum" — minimal numbered rail (hairline rows, red
// active state) + image stage with a floating white card. The stage
// remounts on tab change (key={active}) so its CSS reveal animations
// replay. Auto-advances every 6s with a progress line under the active
// rail item; pauses on hover. Styles: modern.css (.pmx-why-*).
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
        <div className="pmx-section" id="service-sec">
            <div className="pmx-wrap">
                <div className="pmx-sechead">
                    <div>
                        <span className="pmx-eyebrow">Why Choose Platinum</span>
                        <h2 className="pmx-title">
                            A team that prioritizes <span className="accent">your needs</span>
                        </h2>
                    </div>
                    <div className="pmx-sechead-side">
                        <p className="pmx-lead">
                            Five reasons homeowners across the Triangle keep coming back
                            to Platinum — project after project.
                        </p>
                        <span className="pmx-index">( Why Us )</span>
                    </div>
                </div>

                <div
                    className="pmx-why-grid"
                    onMouseEnter={() => setPaused(true)}
                    onMouseLeave={() => setPaused(false)}
                >
                    <ul className="pmx-why-rail" role="tablist" aria-label="Why choose Platinum">
                        {KEY_BENEFITS.map((item, index) => (
                            <li key={item.tab} className={active === index ? "active" : ""}>
                                <button
                                    type="button"
                                    role="tab"
                                    aria-selected={active === index}
                                    onClick={() => setActive(index)}
                                >
                                    <span className="num">{String(index + 1).padStart(2, "0")}</span>
                                    <span className="label">{item.tab}</span>
                                    <i className="ri-arrow-right-line"></i>
                                </button>
                                {active === index && <span className="pmx-why-progress" aria-hidden="true"></span>}
                            </li>
                        ))}
                    </ul>

                    <div className="pmx-why-stage" key={active} role="tabpanel">
                        <div className="pmx-why-media">
                            <Image
                                src={benefit.image}
                                alt={benefit.title}
                                width={760}
                                height={428}
                                sizes="(max-width: 1199px) 92vw, 720px"
                                style={{ width: "100%", height: "100%", objectFit: "cover" }}
                            />
                            <span className="pmx-why-ghost">{String(active + 1).padStart(2, "0")}</span>
                        </div>
                        <div className="pmx-why-card">
                            <h4>{benefit.title}</h4>
                            <p>{benefit.text}</p>
                            <ul className="pmx-why-points">
                                {benefit.points.map((point) => (
                                    <li key={point}>
                                        <i className="ri-checkbox-circle-fill"></i>
                                        {point}
                                    </li>
                                ))}
                            </ul>
                            <Link href="/about" className="pmx-link">
                                More Details <i className="ri-arrow-right-line"></i>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HomeWhyChoose;
