"use client";

import { useState } from "react";
import { TESTIMONIALS } from "../siteData";

// Two real reviews from the old site as editorial quotes on a hairline
// grid — stars, title, quote, expandable full text, attribution pinned
// to the bottom rule. Styles: modern.css (.pmx-testi-*).
const HomeTestimonial = () => {
  const [expanded, setExpanded] = useState<number | null>(null);

  return (
    <div className="pmx-section">
      <div className="pmx-wrap">
        <div className="pmx-sechead">
          <div>
            <span className="pmx-eyebrow">Testimonials</span>
            <h2 className="pmx-title">What our clients say</h2>
          </div>
          <div className="pmx-sechead-side">
            <p className="pmx-lead">
              Real reviews from Triangle homeowners we&apos;ve worked with.
            </p>
            <span className="pmx-index">( Reviews )</span>
          </div>
        </div>

        <div className="pmx-testi-grid">
          {TESTIMONIALS.map((testimonial, index) => (
            <div className="pmx-testi" key={testimonial.name}>
              <div className="pmx-testi-head">
                <span className="pmx-testi-stars" aria-label="5 out of 5 stars">
                  <i className="ri-star-fill"></i>
                  <i className="ri-star-fill"></i>
                  <i className="ri-star-fill"></i>
                  <i className="ri-star-fill"></i>
                  <i className="ri-star-fill"></i>
                </span>
                <span className="pmx-testi-quote" aria-hidden="true">
                  <i className="ri-double-quotes-r"></i>
                </span>
              </div>
              <h4>{testimonial.title}</h4>
              <blockquote>
                {expanded === index ? testimonial.fullText : testimonial.text}
              </blockquote>
              {testimonial.fullText && (
                <button
                  type="button"
                  className="pmx-testi-toggle"
                  onClick={() => setExpanded(expanded === index ? null : index)}
                >
                  {expanded === index ? "Show less" : "Read full review"}{" "}
                  <i className={expanded === index ? "ri-arrow-up-s-line" : "ri-arrow-down-s-line"}></i>
                </button>
              )}
              <div className="pmx-testi-who">
                <span className="name">{testimonial.name}</span>
                <span className="where">— {testimonial.location}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HomeTestimonial;
