import Link from "next/link";
import { SITE } from "../siteData";

// Wireframe service-detail body using the template's single-page markup.
// service: { title, image, blurb } — copy below is draft placeholder text.
const ServiceDetailDraft = ({ service, related }) => {
    return (
        <div className="service-details-area space overflow-hidden">
            <div className="container3">
                <div className="row gy-30 gx-30">
                    <div className="col-12">
                        <div className="single-page">
                            <div className="service-thumb mb-50">
                                <img
                                    className="w-100"
                                    src={service.image}
                                    alt={service.title}
                                    style={{ maxHeight: "520px", objectFit: "cover" }}
                                />
                            </div>
                            <h2 className="sec-title2 mb-25">{service.title}</h2>
                            <p className="mb-30">{service.blurb}</p>
                            <p className="mb-50">
                                [Draft copy] This paragraph will explain how Platinum Restoration &
                                Construction approaches {service.title.toLowerCase()} — what the
                                process looks like, how fast we respond, and what homeowners can
                                expect from start to finish. Final copy comes later; this is
                                wireframe placeholder text.
                            </p>
                            <div className="checklist mb-50">
                                <ul>
                                    <li><i className="ri-check-double-line"></i> [Draft] Key benefit or inclusion one</li>
                                    <li><i className="ri-check-double-line"></i> [Draft] Key benefit or inclusion two</li>
                                    <li><i className="ri-check-double-line"></i> [Draft] Key benefit or inclusion three</li>
                                    <li><i className="ri-check-double-line"></i> [Draft] Licensed, insured, and locally trusted</li>
                                </ul>
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
