import Link from "next/link";

// Grid of service cards (template `service-card style3` markup) fed by data.
// items: [{ title, href, blurb }]
const ICONS = [
    "/main-assets/img/icon/service-icon1-1.png",
    "/main-assets/img/icon/service-icon1-2.png",
    "/main-assets/img/icon/service-icon1-3.png",
    "/main-assets/img/icon/service-icon1-4.png",
    "/main-assets/img/icon/service-icon1-5.png",
];

const ServiceAreaGrid = ({ subTitle = "What We Do", title, text, items }) => {
    return (
        <div className="service-area-4 space overflow-hidden">
            <div className="container">
                <div className="row gy-30 gx-30">
                    <div className="col-xl-4 col-md-6">
                        <div className="title-area mb-0 text-left content-text-extra-style">
                            <span className="sub-title">
                                <img src="/main-assets/img/icon/section-subtitle-icon.svg" alt="img" /> {subTitle}
                            </span>
                            <h2 className="sec-title">{title}</h2>
                            {text && <p>{text}</p>}
                        </div>
                    </div>
                    {items.map((item, index) => (
                        <div className="col-xl-4 col-md-6" key={item.href}>
                            <div className="service-card style3">
                                <div className="service-card-shadow-text">
                                    SERVICES - {String(index + 1).padStart(2, "0")}
                                </div>
                                <div className="service-card_content">
                                    <div className="service-card_icon">
                                        <img src={ICONS[index % ICONS.length]} alt="icon" />
                                    </div>
                                    <h4 className="service-card_title">
                                        <Link href={item.href}>{item.title}</Link>
                                    </h4>
                                    <p className="service-card_text">{item.blurb}</p>
                                    <div className="btn-wrap">
                                        <div className="icon-btn"><i className="ri-arrow-right-up-line"></i></div>
                                        <Link href={item.href} className="btn">
                                            Explore Service <i className="ri-arrow-right-up-line"></i>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ServiceAreaGrid;
