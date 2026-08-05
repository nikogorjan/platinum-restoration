import {
    RESTORATION_SERVICES,
    CONSTRUCTION_SERVICES,
    PROPERTY_MANAGEMENT,
} from "../siteData";

// Inquiry dropdown listing every Platinum service (built from siteData, so
// it stays in sync automatically). Plain native <select> — no nice-select
// library, which cloned itself into duplicate dropdowns.
const OPTIONS = [
    ...RESTORATION_SERVICES.map((s) => s.title),
    ...CONSTRUCTION_SERVICES.map((s) => s.title),
    PROPERTY_MANAGEMENT.title,
    "Other",
];

const SiteContactDropdown = () => {
    return (
        <div className="col-md-6">
            <div className="form-group">
                <select
                    name="subject"
                    id="subject"
                    className="form-select form-control"
                    defaultValue=""
                >
                    <option value="" disabled hidden>
                        Your Inquiry
                    </option>
                    {OPTIONS.map((option) => (
                        <option key={option} value={option}>
                            {option}
                        </option>
                    ))}
                </select>
            </div>
        </div>
    );
};

export default SiteContactDropdown;
