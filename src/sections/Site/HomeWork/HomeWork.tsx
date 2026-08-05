'use client'

import { useEffect, useState, type CSSProperties, type MouseEventHandler } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Image from 'next/image';
import Link from 'next/link';
import { WORK_GALLERY } from '../siteData';

// Prev/next buttons — react-slick injects className/style/onClick.
interface WorkArrowProps {
  className?: string;
  style?: CSSProperties;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  icon: string;
  side: "left" | "right";
}

const WorkArrow = ({ className, style, onClick, icon, side }: WorkArrowProps) => (
  <button
    type="button"
    className={`${className || ""} work-arrow`}
    // Sits in the control row below the cards, not on top of the photos.
    style={{
      ...style,
      left: "auto",
      right: side === "left" ? "68px" : "0",
      top: "auto",
      bottom: "16px",
      marginTop: 0,
      transform: "none",
    }}
    onClick={onClick}
    aria-label={side === "left" ? "Previous slide" : "Next slide"}
  >
    <i className={icon}></i>
  </button>
);

// Portfolio slider of the client's own finished-project photos.
// Center mode (peeking neighbours) is desktop-only — on smaller screens the
// card takes the full width so it stays readable.
// How much of the neighbouring cards peeks in at each width. Driven from
// React rather than slick's `responsive` option, which does not reliably
// re-evaluate here — leaving the card stuck at the desktop peek on phones.
const peekFor = (width: number): string => {
  if (width < 576) return "6%";
  if (width < 768) return "8%";
  if (width < 992) return "10%";
  if (width < 1200) return "15%";
  return "20%";
};

const HomeWork = () => {
  const [centerPadding, setCenterPadding] = useState("20%");

  useEffect(() => {
    const update = () => setCenterPadding(peekFor(window.innerWidth));
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    prevArrow: <WorkArrow icon="ri-arrow-left-line" side="left" />,
    nextArrow: <WorkArrow icon="ri-arrow-right-line" side="right" />,
    centerMode: true,
    centerPadding,
    autoplay: true,
    speed: 1500,
    autoplaySpeed: 5000,
  };

  return (
    <div className="portfolio-area-1 space-top">
      <div className="container">
        <div className="title-area text-center">
          <span className="sub-title text-theme">Our Work</span>
          <h2 className="sec-title">See the difference we make</h2>
          <p className="sec-text">From emergency restoration to finished remodels — photos from real Platinum projects</p>
        </div>
        <div className="portfolio-slider1 overflow-hidden">
          <Slider {...settings}>
            {WORK_GALLERY.map((work, index) => (
              <div key={index}>
                <div className="portfolio-card pm-work-card">
                  <div className="portfolio-card-thumb pm-work-thumb">
                    <Image
                      src={work.image}
                      alt={work.title}
                      fill
                      sizes="(max-width: 768px) 90vw, (max-width: 1200px) 70vw, 800px"
                      style={{ objectFit: "cover" }}
                    />
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
    </div>
  );
};

export default HomeWork;
