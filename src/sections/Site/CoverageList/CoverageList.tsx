import Reveal from "../Reveal";

// "Everything we cover" checklist for the service overview pages — carries
// the old site's expanded lists, including items without dedicated pages
// (e.g. basement waterproofing & sump pumps).
interface CoverageListProps {
    title: string;
    items: string[];
}

const CoverageList = ({ title, items }: CoverageListProps) => (
    <div className="space-top">
        <div className="container">
            <Reveal>
                <div className="pm-coverage">
                    <h3>{title}</h3>
                    <ul>
                        {items.map((item) => (
                            <li key={item}>
                                <i className="ri-check-double-line"></i>
                                {item}
                            </li>
                        ))}
                    </ul>
                </div>
            </Reveal>
        </div>
    </div>
);

export default CoverageList;
