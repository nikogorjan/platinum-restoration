import Link from "next/link";
import Reveal from "../Reveal";
import { CHALLENGES, SITE } from "../siteData";

// Full-bleed navy band: pains as a hairline ledger, then numbered
// problem → solution rows that each link to the matching service area,
// closed by a consultation CTA row. Styles: modern.css (.pmx-flip-*).
const HomeChallenges = () => (
    <div className="pmx-flip pmx-dark">
        <div className="pmx-wrap">
            <div className="pmx-sechead">
                <div>
                    <Reveal>
                        <span className="pmx-eyebrow">Sound Familiar?</span>
                        <h2 className="pmx-title">{CHALLENGES.painHeadline}</h2>
                    </Reveal>
                </div>
                <div className="pmx-sechead-side">
                    <Reveal delay={120}>
                        <p className="pmx-lead">
                            If any of this sounds like your property, you&apos;re not
                            alone — and you don&apos;t have to live with it.
                        </p>
                    </Reveal>
                </div>
            </div>

            <Reveal>
                <div className="pmx-pains">
                    {CHALLENGES.pains.map((pain) => (
                        <div className="pmx-pain" key={pain.title}>
                            <i className={pain.icon}></i>
                            <h5>{pain.title}</h5>
                            <p>{pain.text}</p>
                        </div>
                    ))}
                </div>
            </Reveal>

            <Reveal>
                <span className="pmx-eyebrow">Our Solutions</span>
                <h3 className="pmx-title" style={{ fontSize: "clamp(1.6rem, 3vw, 2.4rem)", marginBottom: "clamp(28px, 4vw, 44px)" }}>
                    {CHALLENGES.headline}
                </h3>
            </Reveal>

            <div className="pmx-flip-list">
                {CHALLENGES.pairs.map((pair, index) => (
                    <Reveal key={pair.problemTitle} delay={index * 100}>
                        <Link href={pair.href} className="pmx-flip-row">
                            <span className="pmx-flip-num">
                                {String(index + 1).padStart(2, "0")}
                            </span>
                            <span className="pmx-flip-cell">
                                <span className="tag">The Challenge</span>
                                <h4>{pair.problemTitle}</h4>
                                <p>{pair.problem}</p>
                            </span>
                            <span className="pmx-flip-arrow" aria-hidden="true">
                                <i className="ri-arrow-right-line"></i>
                            </span>
                            <span className="pmx-flip-cell pmx-flip-cell--solution">
                                <span className="tag red">Our Solution</span>
                                <h4>{pair.solutionTitle}</h4>
                                <p>{pair.solution}</p>
                            </span>
                            <span className="pmx-flip-go">
                                <i className="ri-arrow-right-up-line"></i>
                            </span>
                        </Link>
                    </Reveal>
                ))}
            </div>

            <Reveal>
                <div className="pmx-flip-cta">
                    <p>
                        <strong>{CHALLENGES.ctaTitle}</strong>
                        {CHALLENGES.ctaText}
                    </p>
                    <a href={SITE.phoneHref} className="pmx-btn">
                        <i className="ri-phone-fill"></i> {SITE.phone}
                    </a>
                </div>
            </Reveal>
        </div>
    </div>
);

export default HomeChallenges;
