import Link from "next/link";
import Reveal from "../Reveal";
import { SITE, ABOUT_PAGE as A } from "../siteData";

// About page sections — distinct from the homepage, copy verbatim from the
// old site. Styles: site-theme.css ("About v2" block, .pm2-*).

// 1 — Story: stacked tricolor headline, offset-framed photo, 30+ badge.
export const AboutStory = () => {
    const phrases = A.headline.split(", ");
    return (
        <div className="space-top overflow-hidden">
            <div className="container">
                <div className="pm2-story">
                    <div className="row gy-50 gx-60 align-items-center">
                        <div className="col-xl-6">
                            <Reveal>
                                <span className="sub-title text-theme">
                                    WHO WE ARE <i className="ri-arrow-right-down-line"></i>
                                </span>
                                <h2 className="pm2-story-title">
                                    {phrases.map((phrase, index) => (
                                        <span key={phrase} className={index === 1 ? "accent" : ""}>
                                            {phrase}.
                                        </span>
                                    ))}
                                </h2>
                            </Reveal>
                            <Reveal delay={120}>
                                <p className="mb-3">{A.intro}</p>
                                <p className="mb-3">{A.experience}</p>
                                <p className="mb-4">{A.team}</p>
                            </Reveal>
                            <Reveal delay={200}>
                                <div className="pm-owner-card">
                                    <img src={SITE.favicon} alt="Platinum mark" />
                                    <div>
                                        <h6>{A.localHeadline}</h6>
                                        <p>{A.localIntro}</p>
                                        <p>{A.ownerLine}</p>
                                    </div>
                                </div>
                            </Reveal>
                        </div>
                        <div className="col-xl-6">
                            <Reveal delay={150}>
                                <div className="pm2-story-media">
                                    <img src={A.image} alt="A finished Platinum project" />
                                    <div className="pm-about-badge">
                                        <span className="num">30+</span>
                                        <span className="label">Years of<br />Experience</span>
                                    </div>
                                    <span className="pm2-diamond" aria-hidden="true"></span>
                                </div>
                            </Reveal>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

// 2 — Core values: editorial ledger rows, not cards.
export const AboutValues = () => (
    <div className="space-top">
        <div className="container">
            <div className="row">
                <div className="col-lg-7">
                    <Reveal>
                        <div className="title-area mb-0">
                            <span className="sub-title text-theme">
                                OUR CORE VALUES <i className="ri-arrow-right-down-line"></i>
                            </span>
                            <h2 className="sec-title">What Makes Us Different</h2>
                        </div>
                    </Reveal>
                </div>
            </div>
            <div className="pm2-ledger">
                {A.values.map((value, index) => (
                    <Reveal key={value.title} delay={index * 120}>
                        <div className="pm2-ledger-row">
                            <span className="pm2-ledger-num">{String(index + 1).padStart(2, "0")}</span>
                            <div className="pm2-ledger-thumb">
                                <img src={value.image} alt={value.title} />
                            </div>
                            <div className="pm2-ledger-body">
                                <h4>{value.title}</h4>
                                <p>{value.text}</p>
                            </div>
                            <i className={value.icon} aria-hidden="true"></i>
                        </div>
                    </Reveal>
                ))}
            </div>
        </div>
    </div>
);

// 3 — What we do: one "spec sheet" block, three columns with divider rules.
export const AboutServices = () => (
    <div className="space-top">
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-lg-8">
                    <Reveal>
                        <div className="title-area text-center">
                            <span className="sub-title text-theme">
                                WHAT WE DO <i className="ri-arrow-right-down-line"></i>
                            </span>
                            <h2 className="sec-title">Protect, restore, and elevate your property</h2>
                            <p>{A.servicesIntro}</p>
                        </div>
                    </Reveal>
                </div>
            </div>
            <Reveal>
                <div className="pm2-spec">
                    {A.serviceColumns.map((column, index) => (
                        <div className="pm2-spec-col" key={column.title}>
                            <div className="pm2-spec-media">
                                <img src={column.image} alt={column.title} />
                            </div>
                            <div className="pm2-spec-head">
                                <span className="pm2-spec-icon"><i className={column.icon}></i></span>
                                <div>
                                    <span className="pm2-spec-tag">AREA {String(index + 1).padStart(2, "0")}</span>
                                    <h4>{column.title}</h4>
                                </div>
                            </div>
                            <ul>
                                {column.items.map((item) => (
                                    <li key={item}>
                                        <i className="ri-check-line"></i>
                                        {item}
                                    </li>
                                ))}
                            </ul>
                            <Link href={column.href} className="pm2-spec-link">
                                Explore {column.title} <i className="ri-arrow-right-line"></i>
                            </Link>
                        </div>
                    ))}
                </div>
            </Reveal>
            <Reveal delay={150}>
                <p className="pm-svc-outro">{A.servicesOutro}</p>
            </Reveal>
        </div>
    </div>
);

// 4 — Trust: brand-blue band with blueprint grid, stacked reasons + photo.
export const AboutTrust = () => (
    <div className="space-top">
        <div className="pm2-blueprint">
            <span className="pm2-blueprint-diamond" aria-hidden="true"></span>
            <div className="container">
                <div className="row gy-50 gx-60 align-items-center">
                    <div className="col-lg-6">
                        <Reveal>
                            <span className="pm2-blueprint-label">WHY PLATINUM</span>
                            <h2 className="pm2-blueprint-title">{A.trustHeadline}</h2>
                            <p className="pm2-blueprint-intro">{A.trustIntro}</p>
                        </Reveal>
                        <div className="pm2-trust-list">
                            {A.trust.map((reason, index) => (
                                <Reveal key={reason.title} delay={index * 130}>
                                    <div className="pm2-trust-item">
                                        <span className="num">{String(index + 1).padStart(2, "0")}</span>
                                        <div>
                                            <h4>{reason.title}</h4>
                                            <p>{reason.text}</p>
                                        </div>
                                    </div>
                                </Reveal>
                            ))}
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <Reveal delay={150}>
                            <img
                                className="pm2-blueprint-img"
                                src={A.imageSecondary}
                                alt="Platinum crew protecting a home from the ground up"
                            />
                        </Reveal>
                    </div>
                </div>
            </div>
        </div>
    </div>
);

// 5 — Mission: large statement with highlighted phrases + diamond signature.
export const AboutMission = () => (
    <div className="space-top">
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-lg-10">
                    <Reveal>
                        <div className="pm2-mission">
                            <span className="pm2-mission-quote"><i className="ri-double-quotes-l"></i></span>
                            <h3>
                                Our mission is simple: to <em>protect and enhance</em> the
                                properties of our clients while fostering <em>trust</em> and
                                delivering <em>unparalleled service</em>.
                            </h3>
                            <p>{A.missionEmphasis}</p>
                            <span className="pm2-signature" aria-hidden="true">
                                <span className="d red"></span>
                                <span className="d blue"></span>
                                {SITE.name}
                            </span>
                        </div>
                    </Reveal>
                </div>
            </div>
        </div>
    </div>
);

// 6 — CTA: full-bleed dark band, oversized phone, red/blue signature bar.
// No bottom spacing — the band sits flush against the footer.
export const AboutCTA = () => (
    <div className="space-top">
        <div className="pm3-cta">
            <span className="pm3-cta-diamond" aria-hidden="true"></span>
            <div className="container">
                <Reveal>
                    <span className="pm3-cta-label">LET'S BUILD</span>
                    <h2>{A.ctaHeadline}</h2>
                    <p>{A.ctaText}</p>
                </Reveal>
                <Reveal delay={140}>
                    <div className="pm3-cta-actions">
                        <Link href="/contact" className="btn">
                            GET A QUOTE <i className="ri-arrow-right-up-line"></i>
                        </Link>
                        <a href={SITE.phoneHref} className="pm3-cta-phone">
                            <i className="ri-phone-fill"></i>
                            {SITE.phone}
                        </a>
                    </div>
                </Reveal>
            </div>
            <span className="pm3-cta-bar" aria-hidden="true"></span>
        </div>
    </div>
);
