import { useEffect, useRef } from "react";
import "./vital-stats.css";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Purple3DLoader from "./Purple3DLoader";

gsap.registerPlugin(ScrollTrigger);

export default function VitalStats() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const stats = gsap.utils.toArray(".stat-item");

      // Initial hidden state
      gsap.set(stats, { opacity: 0, y: 40 });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "+=250%",
          scrub: 1,
          pin: true,
          anticipatePin: 1,
        },
      });

      // Phase 1 – loader alone
      tl.to({}, { duration: 1 });

      // Phase 2 – stats overlay reveal
      tl.to(
        stats,
        {
          opacity: 1,
          y: 0,
          stagger: 0.25,
          ease: "power3.out",
          duration: 1.2,
        },
        ">-0.2"
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section className="vital-stats-section" ref={sectionRef}>
      {/* FULL BG LOADER */}
      <div className="loader-bg">
        <Purple3DLoader />
      </div>

      {/* STATS OVERLAY */}
      <div className="stats-layer">
        <div className="stat-item stat-top-left">
          <div className="stat-value">100+</div>
          <div className="stat-label">
            Transformative Digital Products Launched
          </div>
        </div>

        <div className="stat-item stat-top-right">
          <div className="stat-value">30M+ AED</div>
          <div className="stat-label">Client Growth Generated</div>
        </div>

        <div className="stat-item stat-bottom-left">
          <div className="stat-value">110+</div>
          <div className="stat-label">Successful Projects Delivered</div>
        </div>

        <div className="stat-item stat-bottom-right">
          <div className="stat-value">6+</div>
          <div className="stat-label">Years of Innovation</div>
        </div>
      </div>
    </section>
  );
}
