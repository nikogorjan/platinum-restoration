"use client";

import { useEffect } from "react";
import niceSelect from "react-nice-select";

// Inquiry dropdown with Platinum's actual service areas (replaces the
// template's ContactDropdown, which lists web-design services). Uses
// defaultValue instead of a `selected` attribute so React stays quiet.
const OPTIONS = [
    "Water Damage / Emergency",
    "Mold Inspection & Remediation",
    "Crawlspace / Moisture Control",
    "Construction & Remodeling",
    "Property Management & Repairs",
    "Other",
];

const SiteContactDropdown = () => {
    useEffect(() => {
        niceSelect();
    }, []);

    return (
        <div className="col-md-6">
            <div className="form-group custom-form-design">
                <select
                    name="subject"
                    id="subject"
                    className="single-select nice-select form-select"
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
