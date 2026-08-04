import Reveal from "../Reveal";
import { PROCESS_STEPS } from "../siteData";

// "How we work" — real four-step process with a real project photo,
// replacing the template's lorem-ipsum "Why choose us" block.
const ProcessSteps = ({ area = "restoration" }) => (
    <div className="space-top">
        <div className="container">
            <div className="row gy-50 gx-60 align-items-center">
                <div className="col-lg-5">
                    <Reveal>
                        <span className="sub-title">{PROCESS_STEPS.subtitle}</span>
                        <h2 className="sec-title">{PROCESS_STEPS.title}</h2>
                    </Reveal>
                    <Reveal delay={120}>
                        <img
                            className="pm-process-img"
                            src={PROCESS_STEPS.images[area]}
                            alt="Platinum team at work"
                        />
                    </Reveal>
                </div>
                <div className="col-lg-7">
                    {PROCESS_STEPS.steps.map((step, index) => (
                        <Reveal key={step.title} delay={index * 110}>
                            <div className="pm-process-step">
                                <span className="pm-process-num">{String(index + 1).padStart(2, "0")}</span>
                                <div>
                                    <h4>{step.title}</h4>
                                    <p>{step.text}</p>
                                </div>
                            </div>
                        </Reveal>
                    ))}
                </div>
            </div>
        </div>
    </div>
);

export default ProcessSteps;
