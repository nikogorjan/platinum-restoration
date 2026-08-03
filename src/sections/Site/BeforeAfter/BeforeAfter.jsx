"use client";
import { useState } from "react";

// Interactive before/after comparison built from a single side-by-side
// composite image (left half = before, right half = after). Drag the
// divider to compare. No extra dependencies.
const BeforeAfter = ({ image, altBefore = "Before", altAfter = "After" }) => {
    const [pos, setPos] = useState(50);

    const halfStyle = {
        position: "absolute",
        inset: 0,
        backgroundImage: `url('${image}')`,
        backgroundSize: "200% auto",
        backgroundRepeat: "no-repeat",
    };

    const labelStyle = {
        position: "absolute",
        top: "14px",
        padding: "4px 12px",
        fontSize: "12px",
        fontWeight: 700,
        letterSpacing: "0.08em",
        color: "#fff",
        background: "rgba(21, 22, 28, 0.65)",
        pointerEvents: "none",
    };

    return (
        <div
            style={{ position: "relative", overflow: "hidden", aspectRatio: "16 / 10", borderRadius: "var(--radius-lg)" }}
            role="img"
            aria-label={`${altBefore} and ${altAfter} comparison`}
        >
            {/* before — left half of the composite */}
            <div style={{ ...halfStyle, backgroundPosition: "left center" }} />
            {/* after — right half, revealed right of the divider */}
            <div style={{ ...halfStyle, backgroundPosition: "right center", clipPath: `inset(0 0 0 ${pos}%)` }} />

            {/* divider + handle */}
            <div style={{ position: "absolute", top: 0, bottom: 0, left: `${pos}%`, width: "3px", background: "#fff", transform: "translateX(-50%)", pointerEvents: "none", boxShadow: "0 0 8px rgba(0,0,0,0.45)" }}>
                <div style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)", width: "42px", height: "42px", background: "#fff", display: "flex", alignItems: "center", justifyContent: "center", boxShadow: "0 2px 10px rgba(0,0,0,0.35)", color: "var(--theme-color)", fontSize: "18px" }}>
                    <i className="ri-arrow-left-right-line"></i>
                </div>
            </div>

            <span style={{ ...labelStyle, left: "14px" }}>BEFORE</span>
            <span style={{ ...labelStyle, right: "14px" }}>AFTER</span>

            {/* invisible range input drives the divider — works with touch, mouse and keyboard */}
            <input
                type="range"
                min="0"
                max="100"
                value={pos}
                onChange={(e) => setPos(Number(e.target.value))}
                aria-label="Drag to compare before and after"
                style={{ position: "absolute", inset: 0, width: "100%", height: "100%", opacity: 0, cursor: "ew-resize", margin: 0 }}
            />
        </div>
    );
};

export default BeforeAfter;
