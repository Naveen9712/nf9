import React, { useEffect, useRef } from "react";
import "./servicelist.css";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const services = [
  {
    tag: "Service 01",
    title: "Brand Strategy",
    subtitle: "Clarity before creativity",
    color: "#D1CCC2",
    image: "/assets/service-1.jpg",
  },
  {
    tag: "Service 02",
    title: "Visual Identity",
    subtitle: "Designed to stand out",
    color: "#AAB8FF",
    image: "/assets/service-2.jpg",
  },
  {
    tag: "Service 03",
    title: "Digital Experience",
    subtitle: "Built for interaction",
    color: "#FFB7FA",
    image: "/assets/service-3.jpg",
  },
  {
    tag: "Service 04",
    title: "Content & Motion",
    subtitle: "Stories that move",
    color: "#FCE7D6",
    image: "/assets/service-4.jpg",
  },
];

export default function ServiceList() {
  const sectionRef = useRef(null);
  const cardsRef = useRef([]);

  useEffect(() => {
    if (window.innerWidth < 768) return;

    const cards = cardsRef.current;

    cards.forEach((card, index) => {
      gsap.to(card, {
        scale: 0.94,
        y: -60 * index,
        ease: "none",
        scrollTrigger: {
          trigger: card,
          start: "top center",
          end: "+=500",
          scrub: true,
        },
      });
    });

    ScrollTrigger.create({
      trigger: sectionRef.current,
      start: "top top",
      end: () => `+=${cards.length * 600}`,
      pin: true,
      pinSpacing: true,
    });

    return () => ScrollTrigger.getAll().forEach(t => t.kill());
  }, []);

  return (
    <section className="service-stack-section" ref={sectionRef}>
      <div className="service-stack">
        {services.map((service, i) => (
          <article
            className="service-card"
            key={i}
            ref={el => (cardsRef.current[i] = el)}
            style={{
              backgroundColor: service.color,
              zIndex: services.length - i,
            }}
          >
            <div className="service-left">
              <span className="service-tag">{service.tag}</span>
              <h2>{service.title}</h2>
              <p>{service.subtitle}</p>
            </div>

            <div className="service-right">
              <img src={service.image} alt={service.title} />
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
