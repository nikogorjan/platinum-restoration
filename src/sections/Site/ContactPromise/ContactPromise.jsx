import Reveal from "../Reveal";
import { PROMISE } from "../siteData";

// "Our Promise to You" — faith intro + the three promise cards from the
// old home page, framed as what to expect when you reach out.
const ContactPromise = () => (
    <div className="space-top">
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-lg-8">
                    <Reveal>
                        <div className="title-area text-center">
                            <span className="sub-title text-theme">
                                OUR PROMISE TO YOU <i className="ri-arrow-right-down-line"></i>
                            </span>
                            <h2 className="sec-title">A Foundation of Faith and Integrity</h2>
                            <p>{PROMISE.intro}</p>
                        </div>
                    </Reveal>
                </div>
            </div>
            <div className="row gy-30 gx-30 justify-content-center">
                {PROMISE.items.map((item, index) => (
                    <div className="col-xl-4 col-md-6 d-flex" key={item.title}>
                        <Reveal delay={index * 120} className="w-100 d-flex">
                            <div className="pm-value-card">
                                <i className={item.icon}></i>
                                <h4>{item.title}</h4>
                                <p>{item.text}</p>
                            </div>
                        </Reveal>
                    </div>
                ))}
            </div>
        </div>
    </div>
);

export default ContactPromise;
