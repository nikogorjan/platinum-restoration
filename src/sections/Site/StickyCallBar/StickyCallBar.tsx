import Link from "next/link";
import { SITE } from "../siteData";

// Mobile-only action bar pinned to the bottom of the screen. Water damage
// and mold searches are urgent, so the phone number should never be more
// than one tap away. Hidden on desktop, where the header already shows it.
const StickyCallBar = () => (
    <div className="pm-sticky-bar">
        <a href={SITE.phoneHref} className="pm-sticky-call">
            <i className="ri-phone-fill"></i>
            <span>
                <span className="label">Call us any time</span>
                <span className="num">{SITE.phone}</span>
            </span>
        </a>
        <Link href="/contact" className="pm-sticky-quote">
            <i className="ri-chat-quote-line"></i>
            <span>Free quote</span>
        </Link>
    </div>
);

export default StickyCallBar;
