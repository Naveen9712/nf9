import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./services.css";

gsap.registerPlugin(ScrollTrigger);

const SERVICES = [
  { title: "Art Direction", image: "https://framerusercontent.com/images/xvbmP2RETgW6oOPW5kTmPh6busg.jpg" },
  { title: "Production", image: "https://framerusercontent.com/images/BwCmxlMIwWfqxkz8nvxIQfKBgk.jpg" },
  { title: "Strategy", image: "https://framerusercontent.com/images/4WNOPai8HNpbkzXGrHQZwYWmibA.jpg" },
  { title: "Rebranding", image: "https://framerusercontent.com/images/xYeTN1Bn52IZWANLkSiNFVPy0jY.jpg" },
  { title: "Design", image: "https://framerusercontent.com/images/1QkHnDWCstFb6jXN6WFLV6yDZB0.jpg" },
  { title: "Branding", image: "https://framerusercontent.com/images/36wvwfIbrnOBnFSzVzIZ4BEv9ms.jpeg" },
];

export default function Services() {
  const sectionRef = useRef(null);
  const imageWrapRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const items = gsap.utils.toArray(".nf9-svc-item");
      const images = gsap.utils.toArray(".nf9-svc-image");
      const imageWrap = imageWrapRef.current;

      gsap.set(images, { opacity: 0, scale: 0.96 });
      gsap.set(images[0], { opacity: 1, scale: 1 });

      items.forEach((item, index) => {
        ScrollTrigger.create({
          trigger: item,
          start: "top center",
          end: "bottom center",
          onEnter: () => activate(index),
          onEnterBack: () => activate(index),
        });
      });

      function activate(index) {
        // IMAGE VISIBILITY
        images.forEach((img, i) => {
          gsap.to(img, {
            opacity: i === index ? 1 : 0,
            scale: i === index ? 1 : 0.96,
            duration: 0.6,
            ease: "power3.out",
          });
        });

        // TEXT OPACITY
        items.forEach((el, i) => {
          gsap.to(el, {
            opacity: i === index ? 1 : 0.25,
            duration: 0.3,
          });
        });

        // FLOATING IMAGE POSITION (KEY FIX)
        const baseY = index * 120;

        gsap.to(imageWrap, {
          y: baseY,
          x: index % 2 === 0 ? 40 : -40,
          rotateX: index % 2 === 0 ? -4 : 4,
          rotateZ: index % 2 === 0 ? 1 : -1,
          duration: 0.9,
          ease: "power3.out",
        });
      }

      ScrollTrigger.refresh();
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section className="nf9-services" ref={sectionRef}>
      <div className="nf9-svc-label">
        What we do <span>↴</span>
      </div>

      <div className="nf9-svc-row">
        {/* IMAGE COLUMN */}
        <div className="nf9-svc-image-col">
          <div className="nf9-svc-image-stage">
            <div className="nf9-svc-image-wrap" ref={imageWrapRef}>
              {SERVICES.map((s, i) => (
                <img
                  key={i}
                  src={s.image}
                  alt={s.title}
                  className="nf9-svc-image"
                />
              ))}
            </div>
          </div>
        </div>

        {/* TEXT COLUMN */}
        <div className="nf9-svc-list-col">
          {SERVICES.map((s, i) => (
            <h1 key={i} className="nf9-svc-item">
              {s.title}
            </h1>
          ))}
          <div className="nf9-svc-spacer" />
        </div>
      </div>
    </section>
  );
}
