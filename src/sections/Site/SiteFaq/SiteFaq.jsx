"use client";
import { Accordion } from "react-bootstrap";
import { SITE, FAQS } from "../siteData";

// FAQ — intro/contact column on the left, accordion on the right, filling
// the full container width like the other sections.
const SiteFaq = () => {
  return (
    <div className="faq-area-1 space overflow-hidden">
      <div className="container">
        <div className="row gy-50 gx-60">
          <div className="col-lg-5">
            <div className="title-area mb-0">
              <span className="sub-title text-theme">
                FAQ <i className="ri-arrow-right-down-line"></i>
              </span>
              <h2 className="sec-title">Frequently asked questions</h2>
              <p>
                Answers to the questions we hear most from homeowners and
                property owners. Don&apos;t see yours? We&apos;re one call away.
              </p>
            </div>
            <a href={SITE.phoneHref} className="pm-faq-contact">
              <i className="ri-phone-fill"></i>
              <span>
                <span className="label">Call us any time</span>
                <span className="phone">{SITE.phone}</span>
              </span>
            </a>
          </div>
          <div className="col-lg-7">
            <Accordion defaultActiveKey="0" className="accordion-area">
              {FAQS.map((faq, index) => (
                <Accordion.Item eventKey={String(index)} className="accordion-card" key={faq.question}>
                  <Accordion.Header className="accordion-decoration">
                    {faq.question}
                  </Accordion.Header>
                  <Accordion.Body>
                    <p className="faq-text">{faq.answer}</p>
                    {faq.points && (
                      <ul className="pm-faq-points">
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
