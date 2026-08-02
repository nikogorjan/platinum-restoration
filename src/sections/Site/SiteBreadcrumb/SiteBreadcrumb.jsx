import Link from "next/link";

// Parametrized version of the template breadcrumb (BreadcumbTen markup).
// `parent` is optional: { label, href } for a middle level.
const SiteBreadcrumb = ({ title, parent }) => {
    return (
        <div className="breadcumb-wrapper" style={{ backgroundImage: "url('/main-assets/img/bg/breadcrumb-bg.png')" }}>
            <div className="section-animation-shape1-1 shape-mockup animation-infinite" data-top="0" style={{ backgroundImage: "url('/main-assets/img/shape/global-line-shape1.png')" }}>
            </div>
            <div className="container3">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="breadcumb-content">
                            <h1 className="breadcumb-title">{title}</h1>
                            <ul className="breadcumb-menu item-decoration">
                                <li><Link href="/"><i className="ri-home-4-fill"></i> HOME</Link></li>
                                {parent && (
                                    <li><Link href={parent.href}>{parent.label.toUpperCase()}</Link></li>
                                )}
                                <li className="active">{title.toUpperCase()}</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SiteBreadcrumb;
