"use client";
import Link from "next/link";
import { useState } from "react";
import { KEY_BENEFITS } from "../siteData";

// Home-3 WhyChoose tabs, data-driven with the five real Platinum benefits.
const HomeWhyChoose = () => {
    const [activeTab, setActiveTab] = useState(0);

    return (
        <div className="why-area-3 space-top overflow-hidden" id="service-sec">
            <div
                className="why-sec-bg3-1"
                style={{ backgroundImage: "url('/main-assets/img/bg/why-bg3-1.png')" }}
            ></div>
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-6 why-three-extra">
                        <div className="title-area text-center">
                            <span className="sub-title text-theme">
                                Why choose Platinum <i className="ri-arrow-right-down-line"></i>
                            </span>
                            <h2 className="homeThree-custom-titleOne">
                                When you choose Platinum, you're choosing a team <br /> that prioritizes your needs
                            </h2>
                        </div>
                    </div>
                </div>
                <div className="row gy-50">
                    <div className="col-xl-4">
                        <ul className="why-tab-wrap nav nav-pills" role="tablist">
                            {KEY_BENEFITS.map((benefit, index) => (
                                <li className="nav-item" key={benefit.tab} role="presentation">
                                    <button
                                        className={`nav-link ${activeTab === index ? "active" : ""}`}
                                        id={`why-pill-${index}-tab`}
                                        onClick={() => setActiveTab(index)}
                                        type="button"
                                        role="tab"
                                        aria-controls={`why-pill-${index}`}
                                        aria-selected={activeTab === index}
                                    >
                                        {benefit.tab} <i className="ri-arrow-right-down-line"></i>
                                    </button>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="col-xl-8">
                        <div className="tab-content custom-animation">
                            {KEY_BENEFITS.map((benefit, index) => (
                                <div
                                    key={benefit.tab}
                                    className={`tab-pane fade ${activeTab === index ? "show active custom-fadeIn" : ""}`}
                                    id={`why-pill-${index}`}
                                    role="tabpanel"
                                    aria-labelledby={`why-pill-${index}-tab`}
                                >
                                    <div className="row gx-80 gy-40 align-items-center">
                                        <div className="col-lg-5">
                                            <div className="why-thumb-wrap3-1">
                                                <div className="why-tab-thumb">
                                                    <img src={benefit.image} alt={benefit.title} style={{ objectFit: "cover" }} />
                                                </div>
                                                <div className="why-text-wrap">
                                                    <h4 className="title">Platinum</h4>
                                                    <hr className="line" />
                                                    <div className="number">{String(index + 1).padStart(2, "0")}</div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-7">
                                            <div className="why-content-wrap">
                                                <h4 className="title">Why choose us</h4>
                                                <h5 className="subtitle">{benefit.title}</h5>
                                                <p className="text">{benefit.text}</p>
                                                <div className="checklist mb-35">
                                                    <ul>
                                                        <li>
                                                            <img src="/main-assets/img/icon/about-checklsit-icon1-1.svg" alt="img" />
                                                            Honesty, transparency, and respect guide every interaction
                                                        </li>
                                                    </ul>
                                                </div>
                                                <div className="btn-group mt-35">
                                                    <Link href="/about" className="btn style3">
                                                        More Details <i className="ri-arrow-right-up-line"></i>
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HomeWhyChoose;
