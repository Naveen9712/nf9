import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./services.css";

gsap.registerPlugin(ScrollTrigger);

const SERVICES = [
  { title: "UI/UX Design", image: "https://framerusercontent.com/images/xvbmP2RETgW6oOPW5kTmPh6busg.jpg" },
  { title: "Development", image: "https://framerusercontent.com/images/BwCmxlMIwWfqxkz8nvxIQfKBgk.jpg" },
  { title: "Strategy", image: "https://framerusercontent.com/images/4WNOPai8HNpbkzXGrHQZwYWmibA.jpg" },
  { title: "Rebranding", image: "https://framerusercontent.com/images/xYeTN1Bn52IZWANLkSiNFVPy0jY.jpg" },
  { title: "Design", image: "https://framerusercontent.com/images/1QkHnDWCstFb6jXN6WFLV6yDZB0.jpg" },
  { title: "Branding", image: "https://framerusercontent.com/images/36wvwfIbrnOBnFSzVzIZ4BEv9ms.jpeg" },
];

export default function Services() {
  const sectionRef = useRef(null);
  const imageInnerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const items = gsap.utils.toArray(".nf9-svc-item");
      const images = gsap.utils.toArray(".nf9-svc-image");
      const mover = imageInnerRef.current;

      gsap.set(images, { opacity: 0, scale: 0.96 });
      gsap.set(images[0], { opacity: 1, scale: 1 });

      items.forEach((item, index) => {
        ScrollTrigger.create({
          trigger: item,
          start: "top center",
          end: "bottom center",
          onEnter: () => activate(index, item),
          onEnterBack: () => activate(index, item),
        });
      });

      function activate(index, itemEl) {
        images.forEach((img, i) => {
          gsap.to(img, {
            opacity: i === index ? 1 : 0,
            scale: i === index ? 1 : 0.96,
            duration: 0.5,
            ease: "power3.out",
          });
        });

        items.forEach((el, i) => {
          gsap.to(el, {
            opacity: i === index ? 1 : 0.2,
            duration: 0.3,
          });
        });

        const itemRect = itemEl.getBoundingClientRect();
        const viewportCenter = window.innerHeight / 2;
        let offset = itemRect.top + itemRect.height / 2 - viewportCenter;

        offset = gsap.utils.clamp(-100, 100, offset);

        gsap.to(mover, {
          y: offset,
          duration: 0.8,
          ease: "power3.out",
        });
      }

      ScrollTrigger.refresh();
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section className="nf9-services" ref={sectionRef}>
      <div className="nf9-svc-label">What we do ↴</div>

      <div className="nf9-svc-row">
        <div className="nf9-svc-image-col">
          <div className="nf9-svc-image-sticky">
            <div className="nf9-svc-image-inner" ref={imageInnerRef}>
              {SERVICES.map((s, i) => (
                <img key={i} src={s.image} alt={s.title} className="nf9-svc-image" />
              ))}
            </div>
          </div>
        </div>

        <div className="nf9-svc-list-col">
          {SERVICES.map((s, i) => (
            <h1 key={i} className="nf9-svc-item">{s.title}</h1>
          ))}
          <div className="nf9-svc-spacer" />
        </div>
      </div>
    </section>
  );
}
