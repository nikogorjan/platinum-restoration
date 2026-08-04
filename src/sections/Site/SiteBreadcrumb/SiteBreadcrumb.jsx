import Link from "next/link";
import { PAGE_HEADER_IMAGE } from "../siteData";

// Page header: title + breadcrumb trail centered over a page-specific
// photo. Pass `image` to give each page its own; falls back to the
// shared header photo.
const SiteBreadcrumb = ({ title, parent, image }) => {
    const bg = image || PAGE_HEADER_IMAGE;

    return (
        <div
            className="breadcumb-wrapper pm-pagehead"
            style={{
                backgroundImage: `linear-gradient(rgba(8, 15, 28, 0.72), rgba(8, 15, 28, 0.58)), url('${bg}')`,
                backgroundSize: "cover",
                backgroundPosition: "center",
            }}
        >
            <div className="container3">
                <div className="breadcumb-content">
                    <h1 className="breadcumb-title">{title}</h1>
                    <ul className="breadcumb-menu">
                        <li><Link href="/"><i className="ri-home-4-fill"></i> HOME</Link></li>
                        {parent && (
                            <li><Link href={parent.href}>{parent.label.toUpperCase()}</Link></li>
                        )}
                        <li className="active">{title.toUpperCase()}</li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default SiteBreadcrumb;
