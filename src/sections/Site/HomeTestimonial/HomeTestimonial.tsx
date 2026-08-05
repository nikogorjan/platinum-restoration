"use client";

import Image from "next/image";
import { useState } from "react";
import { SITE, TESTIMONIALS } from "../siteData";

// Two real reviews from the old site. Deliberately a plain responsive grid
// rather than a carousel: with only two items a slider adds JS and hides
// half the proof, and slick's width measuring fought the layout on mobile.
const HomeTestimonial = () => {
  const [expanded, setExpanded] = useState<number | null>(null);

  return (
    <div className="testimonial-area-3 overflow-hidden space-top">
      <div className="container">
        <div className="row">
          <div className="col-lg-7">
            <div className="title-area blog-area-content-text-extra-style">
              <span className="sub-title text-theme">Testimonials</span>
              <h2 className="sec-title">What our clients say about us</h2>
            </div>
          </div>
        </div>

        <div className="pm-testi-grid">
          {TESTIMONIALS.map((testimonial, index) => (
            <div className="testi-card style3 testi-static" key={testimonial.name}>
              <div className="testi-card-thumb">
                <Image
                  src={SITE.favicon}
                  alt=""
                  width={70}
                  height={70}
                  style={{ maxWidth: "70px", height: "auto", background: "#fff", padding: "10px" }}
                />
                <div className="media-body">
                  <h4 className="testi-card_title">{testimonial.title}</h4>
                  <div className="testi-card_review">
                    <i className="ri-star-fill"></i>
                    <i className="ri-star-fill"></i>
                    <i className="ri-star-fill"></i>
                    <i className="ri-star-fill"></i>
                    <i className="ri-star-fill"></i>
                  </div>
                </div>
              </div>
              <div className="testi-card_content">
                <p className="testi-card_text">
                  {expanded === index ? testimonial.fullText : testimonial.text}
                </p>
                {testimonial.fullText && (
                  <button
                    type="button"
                    className="pm-testi-toggle"
                    onClick={() => setExpanded(expanded === index ? null : index)}
                  >
                    {expanded === index ? "Show less" : "Read full review"}{" "}
                    <i className={expanded === index ? "ri-arrow-up-s-line" : "ri-arrow-down-s-line"}></i>
                  </button>
                )}
                <div className="testi-card-profile">
                  <h4 className="testi-profile-title">{testimonial.name}</h4>
                  <span className="testi-profile-desig">/ {testimonial.location}</span>
                </div>
              </div>
              <div className="quote-icon">
                <Image src="/main-assets/img/icon/quote3.svg" alt="" width={60} height={48} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HomeTestimonial;
