import { useEffect, useRef } from "react";
import "./vital-stats.css";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function VitalStats() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const section = sectionRef.current;
      if (!section) return;

      const items = gsap.utils.toArray(".stat-item");

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: "top top",
          end: "+=200%", // scroll distance while pinned
          scrub: 1, // smoother scrub
          pin: true,
          anticipatePin: 1,
        },
      });

      // Globe appears + slowly rotates during scroll
      tl.from(".globe-container", {
        scale: 0.85,
        opacity: 0,
        duration: 1,
        ease: "power2.out",
      });

      tl.to(
        ".globe-image",
        {
          rotate: 180,
          ease: "none",
          duration: 3,
        },
        0 // start rotation from the beginning of timeline
      );

      // Reveal each stat one by one as you scroll
      tl.to(items, {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power2.out",
        stagger: {
          each: 0.6,
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      className="vital-stats-section"
      id="vital-stats"
      ref={sectionRef}
    >
      <div className="vital-stats-container">
        <h2 className="vital-stats-title">Vital Stats</h2>

        <div className="vital-stats-content">
          {/* Center globe */}
          <div className="globe-container">
            <img src="/globe.png" alt="Global Reach" className="globe-image" />
          </div>

          {/* Stat Items */}
          <div className="stat-item stat-top-left">
            <div className="stat-value">100+</div>
            <div className="stat-label">
              Transformative Digital Products Launched Globally
            </div>
          </div>

          <div className="stat-item stat-top-right">
            <div className="stat-value">30M+ AED</div>
            <div className="stat-label">In Client Growth</div>
          </div>

          <div className="stat-item stat-bottom-left">
            <div className="stat-value">110+</div>
            <div className="stat-label">
              Successful Projects Executed Across Industries
            </div>
          </div>

          <div className="stat-item stat-bottom-right">
            <div className="stat-value">6+</div>
            <div className="stat-label">
              Years Delivering Innovative Solutions
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
