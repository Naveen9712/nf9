import "./services.css";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const services = [
  {
    title: "UI/UX Design",
    image:
      "https://framerusercontent.com/images/XZ6mh9GNTG6AuAVejsGZeSIxzUQ.jpeg",
    gif: "https://media.giphy.com/media/3o7aD2saalBwwftBIY/giphy.gif",
  },
  {
    title: "Website Design & Development",
    image:
      "https://framerusercontent.com/images/TlvPA50zhT5k8DxWWkYnT1FShQ.png?width=1065&height=501",
    gif: "https://media.giphy.com/media/l0HlNaQ6gWfllcjDO/giphy.gif",
  },
  {
    title: "eCommerce & SaaS Development",
    image:
      "https://framerusercontent.com/images/36wvwfIbrnOBnFSzVzIZ4BEv9ms.jpeg",
    gif: "https://media.giphy.com/media/26ufdipQqU2lhNA4g/giphy.gif",
  },
  {
    title: "Application Development",
    image:
      "https://framerusercontent.com/images/0QA97ljjOh94L1MVp3DrlG8Ymf4.jpg?scale-down-to=2048",
    gif: "https://media.giphy.com/media/xT9IgzoKnwFNmISR8I/giphy.gif",
  },
  {
    title: "Cloud, DevOps & Server Management",
    image:
      "https://framerusercontent.com/images/sVc2HPffpGxiK2VXYhRbRHcsQ.png?scale-down-to=1024&width=1356&height=1002",
    gif: "https://media.giphy.com/media/l41lFw057lAJQMwg0/giphy.gif",
  },
  {
    title: "Branding, SEO & Digital Marketing",
    image:
      "https://framerusercontent.com/images/TyFSPIg890Pg77AH4aAHbfet6k0.jpeg",
    gif: "https://media.giphy.com/media/26ufdipQqU2lhNA4g/giphy.gif",
  },
];

export default function Services() {
  const sectionRef = useRef(null);

  useEffect(() => {
    if (window.innerWidth <= 768) {
      gsap.registerPlugin(ScrollTrigger);

      const ctx = gsap.context(() => {
        const cards = gsap.utils.toArray(".service-card");

        cards.forEach((card, index) => {
          const direction = index % 2 === 0 ? 300 : -300; // Even: right, Odd: left
          const rotation = index % 2 === 0 ? -10 : 10; // Even: rotate left, Odd: rotate right

          gsap.fromTo(
            card,
            {
              x: direction,
              scale: 0.8,
              rotation: rotation,
              opacity: 0,
              force3D: true
            },
            {
              x: 0,
              scale: 1,
              rotation: 0,
              opacity: 1,
              duration: 2, // longer duration for smooth effect
              ease: "power2.out",
              scrollTrigger: {
                trigger: card,
                start: "top 85%",
                end: "bottom 15%",
                scrub: 0.4, // smoother scrub
                toggleActions: "play none none reverse",
              },
            }
          );
        });
      }, sectionRef);

      return () => ctx.revert();
    }
  }, []);

  return (
    <section className="services" ref={sectionRef}>
      {/* Header */}
      <div className="services-header">
        <h2>Services</h2>
      </div>

      {/* Grid */}
      <div className="services-grid">
        {services.map((item, index) => (
          <div className="service-card" key={index}>
            <div className="service-media">
              <img src={item.image} alt={item.title} className="media static" />
              <img src={item.gif} alt="" className="media gif" />
            </div>

            <div className="service-info">
              <h3>{item.title}</h3>
            </div>
          </div>
        ))}
      </div>

      {/* GLOBAL CTA */}
      <div className="services-cta-wrap">
        <a href="/contact" className="framer-cta">
          <span className="cta-label">GET STARTED TODAY</span>
          <span className="cta-line"></span>
          <span className="cta-arrow">
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <path d="M4 12l1.41 1.41L11 7.83V20h2V7.83l5.58 5.59L20 12l-8-8-8 8z" />
            </svg>
          </span>
        </a>
      </div>
    </section>
  );
}