'use client'

import { useState } from 'react';
import Slider from 'react-slick';
import Lightbox from 'yet-another-react-lightbox';
import Zoom from 'yet-another-react-lightbox/plugins/zoom';
import 'yet-another-react-lightbox/styles.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Link from 'next/link';
import { WORK_GALLERY } from '../siteData';

// Prev/next buttons for the slider — react-slick injects className/onClick;
// "work-arrow" gets template-matching styling from site-theme.css.
const WorkArrow = ({ className, style, onClick, icon, side }) => (
  <button
    type="button"
    className={`${className || ""} work-arrow`}
    style={{
      ...style,
      left: side === "left" ? "20px" : "auto",
      right: side === "right" ? "20px" : "auto",
      top: "50%",
      marginTop: 0,
      transform: "translateY(-50%)",
    }}
    onClick={onClick}
    aria-label={side === "left" ? "Previous slide" : "Next slide"}
  >
    <i className={icon}></i>
  </button>
);

// Home-3 portfolio slider using the photos pulled from the old Platinum site.
const HomeWork = () => {
  const [photoIndex, setPhotoIndex] = useState(-1);

  const settings = {
    dots: true,
    focusOnSelect: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    prevArrow: <WorkArrow icon="ri-arrow-left-line" side="left" />,
    nextArrow: <WorkArrow icon="ri-arrow-right-line" side="right" />,
    centerMode: true,
    centerPadding: "20%",
    autoplay: true,
    speed: 1500,
    autoplaySpeed: 5000,
    responsive: [
      {
        breakpoint: 768,
        settings: { centerMode: false, centerPadding: "0%", dots: true }
      },
      {
        breakpoint: 767,
        settings: { centerMode: false, centerPadding: "0%", dots: false }
      }
    ]
  };

  return (
    <div className="portfolio-area-1 space">
      <div className="container">
        <div className="title-area text-center">
          <span className="sub-title text-theme">
            Our Work <i className="ri-arrow-right-down-line"></i>
          </span>
          <h2 className="sec-title">See the difference we make</h2>
          <p className="sec-text">From emergency restoration to finished remodels — photos from real Platinum projects</p>
        </div>
        <div className="portfolio-slider1 overflow-hidden">
          <Slider {...settings}>
            {WORK_GALLERY.map((work, index) => (
              <div key={index}>
                <div className="portfolio-card" style={{ margin: "0px 1rem" }}>
                  <div className="portfolio-card-thumb">
                    <img src={work.image} alt={work.title} style={{ width: "100%", aspectRatio: "16/9", objectFit: "cover" }} />
                    <button className="icon-btn popup-image" onClick={() => setPhotoIndex(index)}>
                      <i className="ri-eye-line"></i>
                    </button>
                  </div>
                  <div className="portfolio-card-details">
                    <div className="media-left">
                      <h4 className="portfolio-card-title">
                        <Link href={work.href}>{work.title}</Link>
                      </h4>
                    </div>
                  </div>
                  <Link href={work.href} className="btn">
                    Explore Service <i className="ri-arrow-right-up-line"></i>
                  </Link>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
      <Lightbox
        open={photoIndex >= 0}
        index={Math.max(photoIndex, 0)}
        close={() => setPhotoIndex(-1)}
        slides={WORK_GALLERY.map((work) => ({ src: work.image }))}
        plugins={[Zoom]}
      />
    </div>
  );
};

export default HomeWork;
