import Link from "next/link";
import Reveal from "../Reveal";
import { CHALLENGES } from "../siteData";

// One dark panel that tells the whole story: pains ("Sound familiar?") →
// divider → solutions (challenge/solution pair cards) → consultation CTA.
// Echoes the hero's dark immersive mood; styles in site-theme (.pm-chal-*).
const HomeChallenges = () => (
    <div className="space-top">
        <div className="container">
            <div className="pm-chal-panel">
                <div className="row gy-30 gx-60 align-items-end pm-chal-head">
                    <div className="col-lg-7">
                        <Reveal>
                            <span className="sub-title">
                                SOUND FAMILIAR? <i className="ri-arrow-right-down-line"></i>
                            </span>
                            <h2>{CHALLENGES.painHeadline}</h2>
                        </Reveal>
                    </div>
                    <div className="col-lg-5">
                        <Reveal delay={120}>
                            <p className="pm-chal-lead">
                                If any of this sounds like your property, you&apos;re not
                                alone — and you don&apos;t have to live with it.
                            </p>
                        </Reveal>
                    </div>
                </div>

                <div className="row gy-30 gx-30">
                    {CHALLENGES.pains.map((pain, index) => (
                        <div className="col-lg-4 d-flex" key={pain.title}>
                            <Reveal delay={index * 120} className="w-100 d-flex">
                                <div className="pm-pain-card">
                                    <i className={pain.icon}></i>
                                    <h5>{pain.title}</h5>
                                    <p>{pain.text}</p>
                                </div>
                            </Reveal>
                        </div>
                    ))}
                </div>

                <div className="pm-chal-divider" aria-hidden="true">
                    <span></span>
                    <i className="ri-arrow-down-line"></i>
                    <span></span>
                </div>

                <div className="row justify-content-center">
                    <div className="col-lg-9">
                        <Reveal>
                            <div className="text-center pm-chal-solutions-head">
                                <span className="sub-title">
                                    OUR SOLUTIONS <i className="ri-arrow-right-down-line"></i>
                                </span>
                                <h3>{CHALLENGES.headline}</h3>
                            </div>
                        </Reveal>
                    </div>
                </div>

                <div className="row gy-30 gx-30 justify-content-center">
                    {CHALLENGES.pairs.map((pair, index) => (
                        <div className="col-xl-4 col-md-6 d-flex" key={pair.problemTitle}>
                            <Reveal delay={index * 120} className="w-100 d-flex">
                                <div className="pm-pair-card">
                                    <div className="pm-pair-problem">
                                        <span className="pm-pair-tag">THE CHALLENGE</span>
                                        <h4>{pair.problemTitle}</h4>
                                        <p>{pair.problem}</p>
                                    </div>
                                    <div className="pm-pair-arrow" aria-hidden="true">
                                        <i className="ri-arrow-down-line"></i>
                                    </div>
                                    <div className="pm-pair-solution">
                                        <span className="pm-pair-tag">OUR SOLUTION</span>
                                        <h4>{pair.solutionTitle}</h4>
                                        <p>{pair.solution}</p>
                                        <Link href={pair.href} className="pm-pair-link">
                                            Explore <i className="ri-arrow-right-line"></i>
                                        </Link>
                                    </div>
                                </div>
                            </Reveal>
                        </div>
                    ))}
                </div>

                <Reveal>
                    <p className="pm-chal-cta">
                        <strong>{CHALLENGES.ctaTitle}</strong> {CHALLENGES.ctaText}
                    </p>
                </Reveal>
            </div>
        </div>
    </div>
);

export default HomeChallenges;
