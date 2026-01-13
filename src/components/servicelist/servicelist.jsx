import { useEffect, useRef } from "react";
import "./servicelist.css";

const SERVICES = [
  {
    title: "UI / UX Design",
    list: [
      "UX Research & Wireframing",
      "UI Design (Web & Mobile)",
      "Prototyping",
      "Design Systems",
      "Interaction & Visual Design",
      "Product Design",
      "Branding-Aligned UI Kits",
    ],
    image: "https://images.unsplash.com/photo-1586717791821-3f44a563fa4c",
  },
  {
    title: "Web Development",
    list: [
      "React & Next.js",
      "Tailwind & CSS Architecture",
      "CMS Integration",
      "Performance Optimization",
      "SEO Friendly Builds",
    ],
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c",
  },
  {
    title: "Brand Identity",
    list: [
      "Logo Design",
      "Typography Systems",
      "Color Strategy",
      "Brand Guidelines",
      "Rebranding",
    ],
    image: "https://images.unsplash.com/photo-1529336953121-ad2b70c0f9b1",
  },
  {
    title: "Product Design",
    list: [
      "Product Strategy",
      "User Flows",
      "MVP Design",
      "Usability Testing",
    ],
    image: "https://images.unsplash.com/photo-1559028012-481c04fa702d",
  },
  {
    title: "Motion & Interaction",
    list: [
      "Micro-interactions",
      "Scroll Animations",
      "UI Motion Systems",
    ],
    image: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee",
  },
  {
    title: "Digital Experience",
    list: [
      "Experience Strategy",
      "Cross-platform UX",
      "Creative Direction",
    ],
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
  },
];

export default function ServiceList() {
  const containerRef = useRef(null);
  const cardsRef = useRef([]);
  const current = useRef([]);

  useEffect(() => {
    const lerp = (a, b, n) => a + (b - a) * n;

    const animate = () => {
      const scrollY = window.scrollY;
      const containerTop = containerRef.current.offsetTop;
      const cardHeight = window.innerHeight * 0.75;

      cardsRef.current.forEach((card, i) => {
        if (!current.current[i]) {
          current.current[i] = { y: 120, scale: 0.92, opacity: 0.6 };
        }

        const start = containerTop + i * cardHeight;
        const progress = Math.min(
          Math.max((scrollY - start) / cardHeight, 0),
          1
        );

        const targetY = lerp(120, 0, progress);
        const targetScale = lerp(0.92, 1, progress);
        const targetOpacity = lerp(0.6, 1, progress);

        // stack compression for previous cards
        const offset = Math.max(0, i - Math.floor(progress * i));
        const depthScale = 1 - offset * 0.04;

        current.current[i].y = lerp(current.current[i].y, targetY, 0.08);
        current.current[i].scale = lerp(
          current.current[i].scale,
          targetScale * depthScale,
          0.08
        );
        current.current[i].opacity = lerp(
          current.current[i].opacity,
          targetOpacity,
          0.08
        );

        card.style.transform = `
          translateY(${current.current[i].y}px)
          scale(${current.current[i].scale})
        `;
        card.style.opacity = current.current[i].opacity;
      });

      requestAnimationFrame(animate);
    };

    requestAnimationFrame(animate);
  }, []);

  return (
    <section className="service-section" ref={containerRef}>
      <div className="service-bg">Our Services</div>

      <div className="service-stack">
        {SERVICES.map((s, i) => (
          <div
            className="service-card"
            key={i}
            ref={(el) => (cardsRef.current[i] = el)}
          >
            <div className="service-card-inner">
              <div className="service-left">
                <h3>{s.title}</h3>
                <ul>
                  {s.list.map((item, idx) => (
                    <li key={idx}>• {item}</li>
                  ))}
                </ul>
              </div>

              <div className="service-right">
                <img src={s.image} alt={s.title} />
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
