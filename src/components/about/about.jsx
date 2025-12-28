import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./about.css";

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const sectionRef = useRef(null);
  const textRef = useRef(null);

  const text =
    "We design and develop websites, apps, and digital experiences that help clients grow, innovate, and transform. We listen, learn, and understand before we build. Together, we define goals and use our expertise to find the sweet spot of realistic and impactful.";

  useEffect(() => {
    const ctx = gsap.context(() => {
      const chars = textRef.current.querySelectorAll(".tr-char");

      // Same look, but a bit lighter for performance
      gsap.set(chars, {
        opacity: 0,
        filter: "blur(6px)",
        force3D: true,
      });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "+=800%",          // keep your distance
          scrub: 0.6,             // <— smooths the scroll → animation link
          pin: true,
          anticipatePin: 1,
        },
      });

      // same stagger logic, just slightly shorter duration
      tl.to(chars, {
        opacity: 1,
        filter: "blur(0px)",
        duration: 0.16,          
        stagger: {
          each: 0.12,
          ease: "power1.out",
        },
        ease: "power1.out",
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const renderText = () => {
    const words = text.split(" ");

    return words.map((word, wordIndex) => (
      <span key={wordIndex} className="tr-word">
        {word.split("").map((char, charIndex) => (
          <span key={`${wordIndex}-${charIndex}`} className="tr-char">
            {char}
          </span>
        ))}
        {wordIndex !== words.length - 1 && (
          <span className="tr-space">&nbsp;</span>
        )}
      </span>
    ));
  };

  return (
    <section ref={sectionRef} id="about" className="tr-section">
      <div className="tr-overlay" />
      <div className="tr-inner">
        <h1 className="tr-label">WE ARE NF9</h1>
        <div ref={textRef} className="tr-heading">
          {renderText()}
        </div>
      </div>
    </section>
  );
};

export default About;
