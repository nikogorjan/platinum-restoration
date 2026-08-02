"use client";

import Slider from "react-slick";
import { SITE, TESTIMONIALS } from "../siteData";

// Home-3 testimonial slider with the two real reviews from the old site
// (shortened for card display — full text lives in siteData.js).
const HomeTestimonial = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    arrows: false,
    responsive: [
      { breakpoint: 992, settings: { slidesToShow: 1, dots: true } },
    ],
  };

  return (
    <div className="testimonial-area-3 overflow-hidden space-top">
      <div className="container">
        <div className="row justify-content-between">
          <div className="col-lg-7">
            <div className="title-area blog-area-content-text-extra-style">
              <span className="sub-title text-theme">
                Testimonials <i className="ri-arrow-right-down-line"></i>
              </span>
              <h2 className="sec-title">What our clients say about us</h2>
            </div>
          </div>
          <div className="col-lg-auto">
            <div className="sec-btn btn-wrap">
              <div className="testi-counter-wrap">
                <h3 className="testi-counter-number">
                  <span className="counter-number">30</span>+
                </h3>
                <p className="testi-counter-text">Years of Experience</p>
              </div>
            </div>
          </div>
        </div>

        <Slider {...settings} className="row global-carousel testi-slider3 slider-shadow">
          {TESTIMONIALS.map((testimonial) => (
            <div className="col-lg-6" key={testimonial.name}>
              <div className="testi-card style3">
                <div className="testi-card-thumb">
                  <img src={SITE.favicon} alt="Platinum" style={{ maxWidth: "60px" }} />
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
                  <p className="testi-card_text">{testimonial.text}</p>
                  <div className="testi-card-profile">
                    <h4 className="testi-profile-title">{testimonial.name}</h4>
                    <span className="testi-profile-desig">/ {testimonial.location}</span>
                  </div>
                </div>
                <div className="quote-icon">
                  <img src="/main-assets/img/icon/quote3.svg" alt="img" />
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default HomeTestimonial;
