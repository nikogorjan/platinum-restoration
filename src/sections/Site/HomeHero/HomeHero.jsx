import Link from "next/link";
import { HERO } from "../siteData";

// Home-3 hero rebuilt for Platinum: real copy + old-site photo, and without
// the jumping shape animation that sat bottom-left in the template version.
const HomeHero = () => {
    return (
        <div className="hero-wrapper hero-3" id="hero">
            {/* dark navy overlay keeps the template's white hero text readable on the light photo */}
            <div className="hero-bg-3-1 background-image bg-mask"
                style={{
                    backgroundImage: `linear-gradient(90deg, rgba(6, 18, 42, 0.78) 0%, rgba(6, 18, 42, 0.55) 45%, rgba(6, 18, 42, 0.25) 100%), url('${HERO.image}')`,
                    backgroundPosition: "center",
                    maskImage: "url('/main-assets/img/hero/hero_bg_mask_3_1.png')",
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "cover",
                }}>
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
