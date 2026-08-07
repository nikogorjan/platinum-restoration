"use client";
import { Accordion } from "react-bootstrap";
import { SITE, FAQS } from "../siteData";

// FAQ — sticky intro column left, numbered minimal accordion right
// (react-bootstrap for behavior, fully reskinned by .pmx-faq rules:
// hairline rows, decimal counters, rotating plus toggle).
const SiteFaq = () => {
  return (
    <div className="pmx-section">
      <div className="pmx-wrap">
        <div className="pmx-faq-grid">
          <div className="pmx-faq-side">
            <span className="pmx-eyebrow">FAQ</span>
            <h2 className="pmx-title">Frequently asked questions</h2>
            <p>
              Answers to the questions we hear most from homeowners and
              property owners. Don&apos;t see yours? We&apos;re one call away.
            </p>
            <a href={SITE.phoneHref} className="pmx-faq-call">
              <i className="ri-phone-fill"></i>
              <span>
                <span className="label">Call us any time</span>
                <span className="num">{SITE.phone}</span>
              </span>
            </a>
          </div>
          <div>
            <Accordion defaultActiveKey="0" className="pmx-faq">
              {FAQS.map((faq, index) => (
                <Accordion.Item eventKey={String(index)} key={faq.question}>
                  <Accordion.Header>{faq.question}</Accordion.Header>
                  <Accordion.Body>
                    <p>{faq.answer}</p>
                    {faq.points && (
                      <ul className="pmx-faq-points">
                        {faq.points.map((point) => (
                          <li key={point}>
                            <i className="ri-check-line"></i>
                            {point}
                          </li>
                        ))}
                      </ul>
                    )}
                  </Accordion.Body>
                </Accordion.Item>
              ))}
            </Accordion>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SiteFaq;
