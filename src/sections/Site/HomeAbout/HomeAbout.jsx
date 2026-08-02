import Link from "next/link";
import { SITE, ABOUT } from "../siteData";

// Home-3 About section with the real Platinum story and old-site photos.
// The template's video popup and founder-signature block are dropped.
const HomeAbout = () => {
    return (
        <div>
            <div className="about-area-3 space overflow-hidden" id="about-sec">
                <div className="container">
                    <div className="row gy-80 gx-100 align-items-end">
                        <div className="col-xl-7">
                            <div className="about-wrap3">
                                <div className="title-area mb-25">
                                    <span className="sub-title text-theme">ABOUT US <i className="ri-arrow-right-down-line"></i></span>
                                    <h2 className="sec-title">{ABOUT.title}</h2>
                                    <p className="sec-text">{ABOUT.text}</p>
                                </div>
                                <div className="checklist mb-35">
                                    <ul>
                                        {ABOUT.checklist.map((item) => (
                                            <li key={item}>
                                                <img src="/main-assets/img/icon/about-checklsit-icon1-1.svg" alt="img" />
                                                {item}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                                <div className="btn-wrap">
                                    <div className="cta-grid-wrap">
                                        <div className="icon-btn">
                                            <i className="ri-phone-fill"></i>
                                        </div>
                                        <div className="media-body">
                                            <Link className="link" href={SITE.phoneHref}>{SITE.phone}</Link>
                                            <h6 className="title">Need Help?</h6>
                                        </div>
                                    </div>
                                    <div className="about-author-wrap">
                                        <div className="media-body">
                                            <div className="author-text"><strong>{ABOUT.owner}</strong> — {ABOUT.ownerRole}</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="about-thumb3 mt-70">
                                <div className="about-img-1">
                                    <img src={ABOUT.image1} alt="Our work" />
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-5 col-md-8">
                            <div className="about-thumb3 mb-30">
                                <div className="about-img-2" style={{ maskImage: "url('/main-assets/img/normal/about_mask3-2.png')" }}>
                                    <img src={ABOUT.image2} alt="Our work" />
                                </div>
                            </div>
                            <p>{ABOUT.text2}</p>
                            <div className="btn-group mt-35">
                                <Link href="/about" className="btn">More About Us <i className="ri-arrow-right-up-line"></i></Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HomeAbout;
