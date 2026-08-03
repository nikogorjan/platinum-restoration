import Link from "next/link";
import { HERO } from "../siteData";

// Home-3 hero rebuilt for Platinum: real copy + old-site photo, and without
// the jumping shape animation that sat bottom-left in the template version.
const HomeHero = () => {
    return (
        <div className="hero-wrapper hero-3" id="hero">
            {/* SVG filter that rounds the sharp corners of the mask path by ~8px:
                blur the alpha channel, re-threshold it, keep original pixels */}
            <svg aria-hidden="true" width="0" height="0" style={{ position: "absolute" }}>
                <filter id="pm-round-corners">
                    <feGaussianBlur in="SourceGraphic" stdDeviation="8" result="blur" />
                    <feColorMatrix
                        in="blur"
                        mode="matrix"
                        values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 19 -9"
                        result="rounded"
                    />
                    <feComposite in="SourceGraphic" in2="rounded" operator="atop" />
                </filter>
            </svg>
            {/* Filter must sit on a WRAPPER: CSS applies masks after filters,
                so filtering the masked element itself has no visible effect.
                The wrapper receives the masked output and rounds its corners. */}
            <div className="pm-hero-round" style={{ position: "absolute", inset: 0, zIndex: -1 }}>
                {/* dark navy overlay keeps the white hero text readable on the light photo */}
                <div className="hero-bg-3-1 background-image bg-mask"
                    style={{
                        backgroundImage: `linear-gradient(90deg, rgba(6, 18, 42, 0.78) 0%, rgba(6, 18, 42, 0.55) 45%, rgba(6, 18, 42, 0.25) 100%), url('${HERO.image}')`,
                        backgroundPosition: "center",
                        maskImage: "url('/main-assets/img/hero/hero_bg_mask_3_1.png')",
                        backgroundRepeat: "no-repeat",
                        backgroundSize: "cover",
                        zIndex: 0,
                    }}>
                </div>
            </div>
            <div className="container">
                <div className="hero-style3">
                    <div className="row">
                        <div className="col-lg-12">
                            <span className="hero-subtitle">{HERO.subtitle}</span>
                            <h1 className="hero-title">{HERO.titleLine1}</h1>
                            <h1 className="hero-title style2">{HERO.titleLine2}</h1>
                            <p className="hero-text">{HERO.text}</p>
                            <Link href="/contact" className="btn style2">GET A QUOTE <i className="ri-arrow-right-up-line"></i></Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HomeHero;
