import Link from "next/link";
import { SITE, CTA_SECTION } from "../siteData";

// Home-3 CTA band with the old site's closing pitch.
const HomeCTA = () => {
    return (
        <div className="cta-area-3">
            <div className="container">
                <div className="cta-wrap3 text-center background-image" data-overlay="title" data-opacity="6" style={{ backgroundImage: "url('/main-assets/img/bg/cta-bg3-1.png')" }}>
                    <div className="title-area mb-30">
                        <span className="sub-title text-white">{CTA_SECTION.subtitle} <i className="ri-arrow-right-down-line"></i></span>
                        <h2 className="cta-title style2">{CTA_SECTION.titleLine1}</h2>
                        <h3 className="cta-title text-white">{CTA_SECTION.titleLine2}</h3>
                        <p className="text-white mt-3">{CTA_SECTION.text}</p>
                    </div>
                    <div className="btn-wrap justify-content-center">
                        <Link href="/contact" className="btn">Free Consultation <i className="ri-arrow-right-up-line"></i></Link>
                        <Link href={SITE.phoneHref} className="btn style2">{SITE.phone} <i className="ri-phone-fill"></i></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HomeCTA;
