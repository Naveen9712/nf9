import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./ourprocess.css";

gsap.registerPlugin(ScrollTrigger);

export default function OurProcess() {
  const sectionRef = useRef(null);
  const trackRef = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;
    const track = trackRef.current;

    const panels = gsap.utils.toArray(".process-panel");

    gsap.to(track, {
      xPercent: -100 * (panels.length - 1),
      ease: "none",
      scrollTrigger: {
        trigger: section,
        pin: true,
        scrub: 1.8,
        start: "top top",
        end: () => `+=${section.offsetWidth}`,
      },
    });

    return () => {
      ScrollTrigger.getAll().forEach(t => t.kill());
    };
  }, []);

  return (
    <section className="ourprocess-section" ref={sectionRef}>
      <div className="ourprocess-track" ref={trackRef}>
        
        {/* INTRO PANEL */}
        <div className="process-panel intro">
          <h1>
            Our <br /> Process
          </h1>
        </div>

        {/* STEP 01 */}
        <div className="process-panel dark">
          <span className="step">01</span>
          <h2>Discovery</h2>
          <p>
            We understand your business, goals, audience and competitors.
          </p>
        </div>

        {/* STEP 02 */}
        <div className="process-panel light">
          <span className="step">02</span>
          <h2>Strategy</h2>
          <p>
            We define structure, UX flows and content direction.
          </p>
        </div>

        {/* STEP 03 */}
        <div className="process-panel dark">
          <span className="step">03</span>
          <h2>Design</h2>
          <p>
            High-fidelity UI with motion-first thinking.
          </p>
        </div>

        {/* STEP 04 */}
        <div className="process-panel light">
          <span className="step">04</span>
          <h2>Build & Launch</h2>
          <p>
            Fast development, testing and launch.
          </p>
        </div>

      </div>
    </section>
  );
}
