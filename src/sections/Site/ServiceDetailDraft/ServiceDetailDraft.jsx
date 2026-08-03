import Link from "next/link";
import { SITE, DETAIL_CONTENT } from "../siteData";

// Service detail body assembled from real old-site content: category
// description, what's-included checklist, expected timeline (from the FAQ
// articles), and the warranty promise.
// service: { title, image, blurb } · area: "restoration" | "construction" | "property"
const ServiceDetailDraft = ({ service, area = "restoration" }) => {
    const content = DETAIL_CONTENT[area];

    return (
        <div className="service-details-area space-top overflow-hidden">
            <div className="container3">
                <div className="row gy-30 gx-30">
                    <div className="col-12">
                        <div className="single-page">
                            <div className="service-thumb mb-50">
                                <img
                                    className="w-100"
                                    src={service.image}
                                    alt={service.title}
                                    style={{ maxHeight: "520px", objectFit: "cover", borderRadius: "var(--radius-lg)" }}
                                />
                            </div>
                            <h2 className="sec-title2 mb-25">{service.title}</h2>
                            <p className="mb-3">{service.blurb}</p>
                            <p className="mb-40">{content.description}</p>

                            <div className="row gy-30 gx-30 mb-40">
                                <div className="col-lg-6 d-flex">
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
                                </div>
                                <div className="col-lg-6 d-flex">
                                    <div className="pm-detail-box">
                                        <h4><i className="ri-time-line"></i> What to expect</h4>
                                        <p>{content.timeline}</p>
                                        <h4 className="mt-4"><i className="ri-shield-check-line"></i> Backed by real warranties</h4>
                                        <p className="mb-0">{DETAIL_CONTENT.warranty}</p>
                                    </div>
                                </div>
                            </div>

                            <div className="row gy-4 align-items-center">
                                <div className="col-auto">
                                    <Link href="/contact" className="btn">
                                        Request a FREE Consultation <i className="ri-arrow-right-up-line"></i>
                                    </Link>
                                </div>
                                <div className="col-auto">
                                    <div className="navbar-right-desc">
                                        <div className="icon-btn">
                                            <i className="ri-phone-fill"></i>
                                        </div>
                                        <div className="navbar-right-desc-details">
                                            <h6 className="title">Call us any time</h6>
                                            <Link className="link" href={SITE.phoneHref}>{SITE.phone}</Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ServiceDetailDraft;
