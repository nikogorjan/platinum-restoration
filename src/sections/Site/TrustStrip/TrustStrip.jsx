import { TRUST_STRIP } from "../siteData";

// Slim dark strip of company facts (licensed & insured, 30+ years, …).
const TrustStrip = () => (
    <div className="space-top">
        <div className="container">
            <div className="pm-trust-strip">
                {TRUST_STRIP.map((item) => (
                    <div className="pm-trust-strip-item" key={item.text}>
                        <i className={item.icon}></i>
                        <span>{item.text}</span>
                    </div>
                ))}
            </div>
        </div>
    </div>
);

export default TrustStrip;
