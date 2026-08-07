import Link from "next/link";
import Reveal from "../Reveal";

// Numbered service ledger: full-width hairline rows (01 / icon+title /
// blurb / arrow) with a red accent bar + indent on hover. Same props API
// as the old card grid — the overview pages pass their own items.
// Styles: modern.css (.pmx-svc-*).
const FALLBACK_ICONS = [
    "ri-tools-line",
    "ri-home-gear-line",
    "ri-hammer-line",
    "ri-shield-check-line",
    "ri-brush-line",
];

interface ServiceAreaGridItem {
    title: string;
    href: string;
    blurb: string;
    icon?: string;
}

interface ServiceAreaGridProps {
    subTitle?: string;
    title: string;
    text?: string;
    items: ServiceAreaGridItem[];
}

const ServiceAreaGrid = ({
    subTitle = "What We Do",
    title,
    text,
    items,
}: ServiceAreaGridProps) => {
    return (
        <div className="pmx-section">
            <div className="pmx-wrap">
                <div className="pmx-sechead">
                    <div>
                        <span className="pmx-eyebrow">{subTitle}</span>
                        <h2 className="pmx-title">{title}</h2>
                    </div>
                    <div className="pmx-sechead-side">
                        {text && <p className="pmx-lead">{text}</p>}
                        <span className="pmx-index">( Services )</span>
                    </div>
                </div>

                <div className="pmx-svc-list">
                    {items.map((item, index) => (
                        <Reveal key={item.href} delay={index * 90}>
                            <Link href={item.href} className="pmx-svc-row">
                                <span className="pmx-svc-num">
                                    {String(index + 1).padStart(2, "0")}
                                </span>
                                <span className="pmx-svc-main">
                                    <span className="pmx-svc-icon">
                                        <i className={item.icon || FALLBACK_ICONS[index % FALLBACK_ICONS.length]}></i>
                                    </span>
                                    <span className="pmx-svc-title">{item.title}</span>
                                </span>
                                <span className="pmx-svc-blurb">{item.blurb}</span>
                                <span className="pmx-svc-arrow">
                                    <i className="ri-arrow-right-up-line"></i>
                                </span>
                            </Link>
                        </Reveal>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ServiceAreaGrid;
