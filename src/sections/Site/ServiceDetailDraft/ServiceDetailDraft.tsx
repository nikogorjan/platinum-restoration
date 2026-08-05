import Image from "next/image";
import Link from "next/link";
import Reveal from "../Reveal";
import BeforeAfter from "../BeforeAfter";
import type { LinkedService, Service, ServiceArea } from "../types";
import {
    SITE,
    DETAIL_CONTENT,
    SERVICE_DETAILS,
    SERVICE_FACTS,
    RELATED_SERVICES,
    URGENT_SERVICES,
    RESTORATION_SERVICES,
    CONSTRUCTION_SERVICES,
    PROPERTY_MANAGEMENT,
} from "../siteData";

// Resolve a slug to its service object + URL, across all three areas.
const findService = (slug: string): LinkedService | null => {
    const restoration = RESTORATION_SERVICES.find((s) => s.slug === slug);
    if (restoration) return { ...restoration, href: `/restoration-services/${slug}` };
    const construction = CONSTRUCTION_SERVICES.find((s) => s.slug === slug);
    if (construction) return { ...construction, href: `/construction-services/${slug}` };
    if (slug === PROPERTY_MANAGEMENT.slug) {
        return { ...PROPERTY_MANAGEMENT, href: "/property-management" };
    }
    return null;
};

// Service detail page body: image hero, at-a-glance facts, problem/solution
// split, connected process timeline, benefits, reference boxes, pricing,
// related services and a closing action bar.
interface ServiceDetailProps {
    service: Service;
    area?: ServiceArea;
}

const ServiceDetailDraft = ({ service, area = "restoration" }: ServiceDetailProps) => {
    const content = DETAIL_CONTENT[area];
    const detail = SERVICE_DETAILS[service.slug] || {};
    const facts = SERVICE_FACTS[area] || [];
    const urgent = URGENT_SERVICES[service.slug];
    const related = (RELATED_SERVICES[service.slug] || [])
        .map(findService)
        .filter((item): item is LinkedService => item !== null);

    return (
        <div className="service-details-area space-top overflow-hidden">
            <div className="container3">
                {/* Intro — the page header above carries the photo */}
                <Reveal>
                    <div className="pm-sv-intro">
                        <span className="pm-sv-hero-tag">
                            {area === "construction"
                                ? "Construction Service"
                                : area === "property"
                                    ? "Property Management"
                                    : "Restoration Service"}
                        </span>
                        <h2>{detail.headline || service.title}</h2>
                        <p>{detail.intro || service.blurb}</p>
                    </div>
                </Reveal>

                {/* At-a-glance facts */}
                <Reveal>
                    <div className="pm-sv-facts">
                        {facts.map((fact) => (
                            <div className="pm-sv-fact" key={fact.label}>
                                <i className={fact.icon}></i>
                                <div>
                                    <span className="label">{fact.label}</span>
                                    <span className="value">{fact.value}</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </Reveal>

                {urgent && (
                    <Reveal>
                        <a href={SITE.phoneHref} className="pm-sv-urgent">
                            <i className="ri-alarm-warning-fill"></i>
                            <span className="text">{urgent}</span>
                            <span className="cta">Call {SITE.phone} <i className="ri-arrow-right-up-line"></i></span>
                        </a>
                    </Reveal>
                )}

                <Reveal>
                    <p className="pm-sv-lead">{content.description}</p>
                </Reveal>

                {/* Problem / solution split */}
                {detail.problems && (
                    <Reveal>
                        <div className="pm-ps-grid">
                            <div className="pm-ps-col pm-ps-problem">
                                <span className="pm-ps-tag">THE CHALLENGE</span>
                                <h3>{detail.problemsTitle}</h3>
                                {detail.problems.map((item) => (
                                    <div className="pm-ps-item" key={item.title}>
                                        <h5>{item.title}</h5>
                                        <p>{item.text}</p>
                                    </div>
                                ))}
                            </div>
                            <div className="pm-ps-col pm-ps-solution">
                                <span className="pm-ps-tag">OUR SOLUTION</span>
                                <h3>{detail.solutionsTitle}</h3>
                                <div className="pm-sv-timeline">
                                    {detail.solutions.map((item, index) => (
                                        <div className="pm-sv-tl-item" key={item.title}>
                                            <span className="pm-sv-tl-dot">{String(index + 1).padStart(2, "0")}</span>
                                            <div>
                                                <h5>{item.title}</h5>
                                                <p>{item.text}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </Reveal>
                )}

                {/* Before / after comparison */}
                {detail.beforeAfter && (
                    <Reveal>
                        <figure className="pm-sv-figure">
                            <BeforeAfter
                                image={detail.beforeAfter}
                                altBefore={`${service.title} — before`}
                                altAfter={`${service.title} — after`}
                            />
                            {detail.beforeAfterCaption && (
                                <figcaption>{detail.beforeAfterCaption}</figcaption>
                            )}
                        </figure>
                    </Reveal>
                )}

                {/* Showcase image */}
                {detail.showcase && (
                    <Reveal>
                        <figure className="pm-sv-figure">
                            <Image src={detail.showcase} alt={service.title} width={1200} height={640} sizes="(max-width: 1200px) 92vw, 1140px" style={{ width: "100%", height: "auto" }} />
                            {detail.showcaseCaption && (
                                <figcaption>{detail.showcaseCaption}</figcaption>
                            )}
                        </figure>
                    </Reveal>
                )}

                {/* Benefits */}
                {detail.benefits && (
                    <Reveal>
                        <div className="pm-benefit-band">
                            <h3>Why choose Platinum for {service.title.toLowerCase()}</h3>
                            <ul>
                                {detail.benefits.map((benefit) => (
                                    <li key={benefit}>
                                        <i className="ri-checkbox-circle-fill"></i>
                                        {benefit}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </Reveal>
                )}

                {/* Reference boxes */}
                <Reveal>
                    <div className="pm-sv-boxes">
                        {detail.signs && (
                            <div className="pm-detail-box">
                                <h4><i className="ri-list-check-2"></i> {detail.signsTitle}</h4>
                                <ul>
                                    {detail.signs.map((sign) => (
                                        <li key={sign}>
                                            <i className="ri-check-line"></i>
                                            {sign}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        )}
                        <div className="pm-detail-box">
                            <h4><i className="ri-checkbox-multiple-line"></i> What&apos;s included</h4>
                            <ul>
                                {content.includes.map((item) => (
                                    <li key={item}>
                                        <i className="ri-check-line"></i>
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="pm-detail-box">
                            <h4><i className="ri-time-line"></i> What to expect</h4>
                            <p className="mb-0">{content.timeline}</p>
                        </div>
                        <div className="pm-detail-box">
                            <h4><i className="ri-shield-check-line"></i> Backed by real warranties</h4>
                            <p className="mb-0">{DETAIL_CONTENT.warranty}</p>
                        </div>
                    </div>
                </Reveal>

                {/* Pricing / timelines */}
                {detail.pricing && (
                    <Reveal>
                        <div className="pm-pricing">
                            <h3>{detail.pricingTitle}</h3>
                            <div className="pm-pricing-rows">
                                {detail.pricing.map((row) => (
                                    <div className="pm-pricing-row" key={row.label}>
                                        <span className="pm-pricing-label">{row.label}</span>
                                        <span className="pm-pricing-value">{row.value}</span>
                                        {row.time && <span className="pm-pricing-time">{row.time}</span>}
                                    </div>
                                ))}
                            </div>
                            {detail.pricingNote && <p className="pm-pricing-note">{detail.pricingNote}</p>}
                        </div>
                    </Reveal>
                )}

                {/* Related services */}
                {related.length > 0 && (
                    <Reveal>
                        <div className="pm-sv-related">
                            <h3>Often paired with</h3>
                            <div className="pm-sv-related-grid">
                                {related.map((item) => (
                                    <Link href={item.href} className="pm-sv-related-card" key={item.slug}>
                                        <Image src={item.image} alt={item.title} width={480} height={270} sizes="(max-width: 767px) 92vw, 360px" style={{ width: "100%", height: "auto" }} />
                                        <div className="body">
                                            <h5>{item.title}</h5>
                                            <span className="link">
                                                Explore <i className="ri-arrow-right-line"></i>
                                            </span>
                                        </div>
                                    </Link>
                                ))}
                            </div>
                        </div>
                    </Reveal>
                )}

                {/* Closing actions */}
                <div className="pm-detail-actions">
                    <Link href="/contact" className="btn">
                        Request a FREE Consultation <i className="ri-arrow-right-up-line"></i>
                    </Link>
                    <span className="pm-detail-or">or</span>
                    <a href={SITE.phoneHref} className="pm-detail-phone">
                        <i className="ri-phone-fill"></i>
                        <span>
                            <span className="label">Call us any time</span>
                            <span className="num">{SITE.phone}</span>
                        </span>
                    </a>
                </div>
            </div>
        </div>
    );
};

export default ServiceDetailDraft;
