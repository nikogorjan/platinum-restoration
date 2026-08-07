import Image from "next/image";
import Link from "next/link";
import { HERO, SITE } from "../siteData";

// Full-bleed editorial hero: photo with layered navy gradients, copy
// anchored to the bottom-left, and a translucent stat rail pinned to the
// bottom edge. Styles: modern.css (.pmx-hero-*).
const HERO_STATS = [
    { num: "30", accent: "+", label: "Years of experience" },
    { num: "3", accent: "", label: "Service divisions" },
    { num: "24/7", accent: "", label: "Emergency response" },
    { num: "100", accent: "%", label: "Licensed & insured" },
];

const HomeHero = () => {
    return (
        <div className="pmx-hero" id="hero">
            <div className="pmx-hero-bg">
                <Image
                    src={HERO.image}
                    alt="Platinum Restoration & Construction crew at work"
                    fill
                    priority
                    sizes="100vw"
                    style={{ objectFit: "cover" }}
                />
            </div>

            <div className="pmx-wrap pmx-hero-in">
                <span className="pmx-hero-eyebrow">{HERO.subtitle}</span>
                <h1 className="pmx-hero-title">
                    {HERO.titleLine1}
                    <span className="accent d-block">{HERO.titleLine2}</span>
                </h1>
                <p className="pmx-hero-text">{HERO.text}</p>
                <div className="pmx-hero-actions">
                    <Link href="/contact" className="pmx-btn">
                        Get a Free Consultation <i className="ri-arrow-right-up-line"></i>
                    </Link>
                    <a href={SITE.phoneHref} className="pmx-btn pmx-btn--ghost-dark">
                        <i className="ri-phone-fill"></i> {SITE.phone}
                    </a>
                </div>
            </div>

            <div className="pmx-hero-stats">
                <div className="pmx-wrap pmx-hero-stats-in">
                    {HERO_STATS.map((stat) => (
                        <div className="pmx-hero-stat" key={stat.label}>
                            <span className="num">
                                {stat.num}
                                {stat.accent && <em>{stat.accent}</em>}
                            </span>
                            <span className="label">{stat.label}</span>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default HomeHero;
