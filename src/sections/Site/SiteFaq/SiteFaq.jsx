"use client";
import { Accordion } from "react-bootstrap";
import { FAQS } from "../siteData";

// Template FAQ accordion fed with the real Q&A content from the old site.
const SiteFaq = () => {
  return (
    <div className="faq-area-1 space overflow-hidden">
      <div className="container">
        <div className="title-area text-center">
          <h2 className="sec-title2">Frequently asked questions</h2>
        </div>
        <div className="row gy-50 gx-50 justify-content-center">
          <div className="col-xl-8">
            <Accordion defaultActiveKey="0" className="accordion-area">
              {FAQS.map((faq, index) => (
                <Accordion.Item eventKey={String(index)} className="accordion-card" key={faq.question}>
                  <Accordion.Header className="accordion-decoration">
                    {faq.question}
                  </Accordion.Header>
                  <Accordion.Body>
                    <p className="faq-text">{faq.answer}</p>
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
