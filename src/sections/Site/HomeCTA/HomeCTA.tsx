import Image from "next/image";
import Link from "next/link";
import { SITE, CTA_SECTION } from "../siteData";

// Closing CTA — full-bleed project photo under layered navy gradients,
// giant left-aligned display type, dual actions, and the red/blue brand
// bar along the bottom edge. Styles: modern.css (.pmx-cta-*).
const HomeCTA = () => {
    return (
        <div className="pmx-cta">
            <div className="pmx-cta-bg">
                <Image
                    src="/aditional-assets/images/Gallery-3.webp"
                    alt=""
                    fill
                    sizes="100vw"
                    style={{ objectFit: "cover" }}
                />
            </div>
            <div className="pmx-wrap pmx-cta-in">
                <span className="pmx-hero-eyebrow">{CTA_SECTION.subtitle}</span>
                <h2 className="pmx-cta-title">
                    {CTA_SECTION.titleLine1}{" "}
                    <span className="accent">{CTA_SECTION.titleLine2}</span>
                </h2>
                <p>{CTA_SECTION.text}</p>
                <div className="pmx-cta-actions">
                    <Link href="/contact" className="pmx-btn">
                        Free Consultation <i className="ri-arrow-right-up-line"></i>
                    </Link>
                    <a href={SITE.phoneHref} className="pmx-btn pmx-btn--ghost-dark">
                        <i className="ri-phone-fill"></i> {SITE.phone}
                    </a>
                </div>
            </div>
            <span className="pmx-cta-bar" aria-hidden="true"></span>
        </div>
    );
};

export default HomeCTA;
