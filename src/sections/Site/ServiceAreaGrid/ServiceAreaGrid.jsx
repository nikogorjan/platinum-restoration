import Link from "next/link";

// Grid of service cards (template `service-card style3` markup) fed by data.
// items: [{ title, href, blurb, icon? }] — icon is a remixicon class name;
// falls back to a rotating set when not provided.
const FALLBACK_ICONS = [
    "ri-tools-line",
    "ri-home-gear-line",
    "ri-hammer-line",
    "ri-shield-check-line",
    "ri-brush-line",
];

const ServiceAreaGrid = ({ subTitle = "What We Do", title, text, items }) => {
    return (
        <div className="service-area-4 space overflow-hidden">
            <div className="container">
                <div className="row gy-30 gx-30">
                    <div className="col-xl-4 col-md-6">
                        <div className="title-area mb-0 text-left content-text-extra-style">
                            <span className="sub-title text-theme">
                                {subTitle} <i className="ri-arrow-right-down-line"></i>
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
                                        {/* box matches the 52px circle drawn by .service-card_icon:after,
                                            cancelling the wrapper's 10px padding so the glyph centers in it */}
                                        <i
                                            className={item.icon || FALLBACK_ICONS[index % FALLBACK_ICONS.length]}
                                            style={{
                                                display: "flex",
                                                alignItems: "center",
                                                justifyContent: "center",
                                                width: "52px",
                                                height: "52px",
                                                marginLeft: "-10px",
                                                marginTop: "-10px",
                                                fontSize: "26px",
                                                lineHeight: 1,
                                                color: "var(--theme-color)",
                                            }}
                                        ></i>
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
