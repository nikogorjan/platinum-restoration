"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { WORK_GALLERY } from "../siteData";

// "Our Work" — native scroll-snap gallery strip that bleeds to the right
// viewport edge, with round prev/next buttons in the section head.
// Replaces the old react-slick carousel (whose width measuring repeatedly
// fought the layout). Styles: modern.css (.pmx-work-*).
const HomeWork = () => {
  const stripRef = useRef<HTMLDivElement | null>(null);
  const [atStart, setAtStart] = useState(true);
  const [atEnd, setAtEnd] = useState(false);

  const updateEnds = () => {
    const el = stripRef.current;
    if (!el) return;
    setAtStart(el.scrollLeft <= 4);
    setAtEnd(el.scrollLeft + el.clientWidth >= el.scrollWidth - 4);
  };

  useEffect(() => {
    updateEnds();
    const el = stripRef.current;
    if (!el) return;
    el.addEventListener("scroll", updateEnds, { passive: true });
    window.addEventListener("resize", updateEnds);
    return () => {
      el.removeEventListener("scroll", updateEnds);
      window.removeEventListener("resize", updateEnds);
    };
  }, []);

  const scrollByCard = (direction: 1 | -1) => {
    const el = stripRef.current;
    if (!el) return;
    const card = el.querySelector<HTMLElement>(".pmx-work-card");
    const step = card ? card.offsetWidth + 24 : el.clientWidth * 0.6;
    el.scrollBy({ left: direction * step, behavior: "smooth" });
  };

  return (
    <div className="pmx-section pmx-work">
      <div className="pmx-wrap">
        <div className="pmx-sechead">
          <div>
            <span className="pmx-eyebrow">Our Work</span>
            <h2 className="pmx-title">See the difference we make</h2>
          </div>
          <div className="pmx-sechead-side">
            <p className="pmx-lead">
              From emergency restoration to finished remodels — photos from
              real Platinum projects.
            </p>
            <div className="pmx-work-nav">
              <button
                type="button"
                onClick={() => scrollByCard(-1)}
                disabled={atStart}
                aria-label="Previous projects"
              >
                <i className="ri-arrow-left-line"></i>
              </button>
              <button
                type="button"
                onClick={() => scrollByCard(1)}
                disabled={atEnd}
                aria-label="Next projects"
              >
                <i className="ri-arrow-right-line"></i>
              </button>
            </div>
          </div>
        </div>

        <div className="pmx-work-strip" ref={stripRef}>
          {WORK_GALLERY.map((work, index) => (
            <Link href={work.href} className="pmx-work-card" key={`${work.image}-${index}`}>
              <Image
                src={work.image}
                alt={work.title}
                fill
                sizes="(max-width: 768px) 80vw, (max-width: 1200px) 45vw, 520px"
                style={{ objectFit: "cover" }}
              />
              <span className="pmx-work-card-info">
                <span>
                  <span className="tag">{String(index + 1).padStart(2, "0")} — Project</span>
                  <h4>{work.title}</h4>
                </span>
                <span className="go">
                  <i className="ri-arrow-right-up-line"></i>
                </span>
              </span>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HomeWork;
