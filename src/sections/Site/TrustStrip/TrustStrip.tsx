import { TRUST_STRIP, SERVICE_AREAS } from "../siteData";

// Scrolling marquee ticker on navy — company facts interleaved with the
// three service divisions, separated by brand diamonds. The track holds
// two copies of the sequence; the CSS animation slides -50% for a
// seamless loop (pauses on hover / reduced motion).
const ITEMS = [
    ...TRUST_STRIP.map((item) => item.text),
    ...SERVICE_AREAS.map((area) => area.title),
];

// `flush` drops the top margin so the strip can sit directly against a
// dark section (used on the homepage right under the hero).
const TrustStrip = ({ flush = false }: { flush?: boolean }) => (
    <div className={`pmx-marquee ${flush ? "" : "pmx-marquee--band"}`}>
        <div className="pmx-marquee-track">
            {[0, 1].map((copy) => (
                <div
                    className="pmx-marquee-seq"
                    key={copy}
                    aria-hidden={copy === 1 || undefined}
                >
                    {ITEMS.map((text) => (
                        <span className="pmx-marquee-item" key={text}>
                            {text}
                        </span>
                    ))}
                </div>
            ))}
        </div>
    </div>
);

export default TrustStrip;
