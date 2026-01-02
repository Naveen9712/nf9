import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./about.css";

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const sectionRef = useRef(null);
  const labelRef = useRef(null);
  const titleRef = useRef(null);
  const descRef = useRef(null);
  const imagesRef = useRef([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      /* ================= INITIAL STATE ================= */
      gsap.set(
        [
          labelRef.current,
          titleRef.current.querySelectorAll("span"),
          descRef.current.querySelectorAll("span"),
        ],
        { opacity: 0, y: 40 }
      );

      /* ================= TEXT REVEAL ================= */
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 70%",
          toggleActions: "play none none none",
        },
      });

      tl.to(labelRef.current, {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power2.out",
      })
        .to(
          titleRef.current.querySelectorAll("span"),
          {
            opacity: 1,
            y: 0,
            duration: 1.4,
            stagger: 0.05,
            ease: "power3.out",
          },
          "-=0.4"
        )
        .to(
          descRef.current.querySelectorAll("span"),
          {
            opacity: 1,
            y: 0,
            duration: 1.2,
            stagger: 0.012,
            ease: "power2.out",
          },
          "-=0.6"
        );

      /* ================= IMAGE PARALLAX ================= */
      imagesRef.current.forEach((img, i) => {
        gsap.fromTo(
          img,
          { y: i % 2 === 0 ? 120 : -120 },
          {
            y: 0,
            ease: "none",
            scrollTrigger: {
              trigger: sectionRef.current,
              start: "top 90%",
              end: "bottom 10%",
              scrub: 1,
            },
          }
        );
      });

      /* ================= PAGE BACKGROUND TRANSITION ================= */
      gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          end: "bottom 20%",
          scrub: 1.2,
        },
      })
        .fromTo(
          "#page-bg",
          { backgroundColor: "#ffffff" },
          { backgroundColor: "#000000", ease: "none" }
        )
        .to("#page-bg", {
          backgroundColor: "#ffffff",
          ease: "none",
        });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const splitWords = (text) =>
    text.split(" ").map((word, i) => (
      <span key={i}>&nbsp;{word}</span>
    ));

  return (
    <section ref={sectionRef} id="about" className="about-section">
      {/* FLOATING IMAGES */}
      <div className="about-images">
        {[
          "https://framerusercontent.com/images/c2XLEwqGOghXJ5c7lBcb090p6A.png",
          "https://framerusercontent.com/images/e0LAGcGE4nkhyHBpdtiWjTlfc8.png",
          "https://framerusercontent.com/images/k9PQmRbDHccgBBeupUCYnhcGw0.png",
          "https://framerusercontent.com/images/YM4vbK7504gqynWVsNUdp6nG84.png",
          "https://framerusercontent.com/images/8RvSjvFQKjEyXTQffVuKZrfnk.png",
          "https://framerusercontent.com/images/Czwk5ntg08zcZtYUvlcOe79oshk.png",
        ].map((src, i) => (
          <div
            key={i}
            className={`about-image img-${i + 1}`}
            ref={(el) => (imagesRef.current[i] = el)}
          >
            <img src={src} alt="" />
          </div>
        ))}
      </div>

      {/* CONTENT */}
      <div className="about-content">
        <div ref={labelRef} className="about-label">
          About NF9 <span>↴</span>
        </div>

        <h2 ref={titleRef} className="about-title">
          {splitWords("A bunch of misfits with an eye for beauty")}
        </h2>

        <p ref={descRef} className="about-description">
          {splitWords(
            "We design and develop websites, apps, and digital experiences that help clients grow, innovate, and transform. We listen, learn, and understand before we build. Together, we define goals and use our expertise to find the sweet spot of realistic and impactful. We’re NF9."
          )}
        </p>
      </div>
    </section>
  );
};

export default About;
