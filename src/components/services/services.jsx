import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./services.css";

gsap.registerPlugin(ScrollTrigger);

/* =====================================================
   SERVICES DATA
===================================================== */
const SERVICES = [
  { title: "UI/UX Design", image: "https://framerusercontent.com/images/xvbmP2RETgW6oOPW5kTmPh6busg.jpg" },
  { title: "Website", image: "https://framerusercontent.com/images/BwCmxlMIwWfqxkz8nvxIQfKBgk.jpg" },
  { title: "eCommerce", image: "https://framerusercontent.com/images/4WNOPai8HNpbkzXGrHQZwYWmibA.jpg" },
  { title: "Applications", image: "https://framerusercontent.com/images/xYeTN1Bn52IZWANLkSiNFVPy0jY.jpg" },
  { title: "Infrastructure", image: "https://framerusercontent.com/images/1QkHnDWCstFb6jXN6WFLV6yDZB0.jpg" },
  { title: "Branding", image: "https://framerusercontent.com/images/36wvwfIbrnOBnFSzVzIZ4BEv9ms.jpeg" },
];

export default function Services() {
  const sectionRef = useRef(null);
  const imageWrapRef = useRef(null);

  /* =====================================================
     STEP SIZE PER BREAKPOINT
     (controls movement distance per item)
  ===================================================== */
  const getStep = () => {
    const w = window.innerWidth;
    if (w <= 468) return 28;
    if (w <= 768) return 10;
    if (w <= 1024) return 70;
    if (w <= 1440) return 120;
    return 150;
  };

  useEffect(() => {
    const ctx = gsap.context(() => {
      const items = gsap.utils.toArray(".nf9-services-item");
      const images = gsap.utils.toArray(".nf9-services-image");
      const imageWrap = imageWrapRef.current;

      /* ---------------- INITIAL STATE ---------------- */
      gsap.set(imageWrap, { autoAlpha: 0 });
      gsap.set(images, { opacity: 0, scale: 0.95 });

      /* ---------------- SECTION VISIBILITY ---------------- */
      ScrollTrigger.create({
        trigger: sectionRef.current,
        start: "top center",
        end: "bottom center",
        onEnter: () => gsap.to(imageWrap, { autoAlpha: 1, duration: 0.3 }),
        onEnterBack: () => gsap.to(imageWrap, { autoAlpha: 1, duration: 0.3 }),
        onLeave: () => gsap.to(imageWrap, { autoAlpha: 0, duration: 0.3 }),
        onLeaveBack: () => gsap.to(imageWrap, { autoAlpha: 0, duration: 0.3 }),
      });

      /* ---------------- ITEM TRIGGERS ---------------- */
      items.forEach((item, index) => {
        ScrollTrigger.create({
          trigger: item,
          start: "top center",
          end: "bottom center",
          onEnter: () => activate(index),
          onEnterBack: () => activate(index),
        });
      });

      /* ---------------- ACTIVATE ---------------- */
      function activate(index) {
        const w = window.innerWidth;
        const step = getStep();

        /* IMAGE SWITCH */
        images.forEach((img, i) => {
          gsap.to(img, {
            opacity: i === index ? 1 : 0,
            scale: i === index ? 1 : 0.95,
            duration: 0.5,
            ease: "power3.out",
          });
        });

        /* TEXT FADE */
        items.forEach((el, i) => {
          gsap.to(el, {
            opacity: i === index ? 1 : 0.35,
            duration: 0.3,
          });
        });

        /* =================================================
           POSITION LOGIC
        ================================================= */

        let targetY;

        if (w >= 1024) {
          /* DESKTOP: linear controlled movement */
          targetY = index * step;
        } else {
          /* MOBILE & TABLET: DOM-based alignment */
          const itemRect = items[index].getBoundingClientRect();
          const sectionRect = sectionRef.current.getBoundingClientRect();

          // BASE ALIGNMENT (center image on active text)
          targetY =
            itemRect.top -
            sectionRect.top +
            itemRect.height / 2 -
            imageWrap.offsetHeight / 2;

          /* ---------------------------------------------
             START OFFSET (controls where image starts)
          --------------------------------------------- */
          if (w >= 2160) targetY -= 48;
          else if (w >= 1440) targetY -= 80;
          else if (w >= 1024) targetY -= 80;
          else if (w >= 768)  targetY -= 60;
          else                targetY -= 40;

          /* ---------------------------------------------
             PROGRESSIVE DRIFT (speed while scrolling)
          --------------------------------------------- */
          if (w <= 768) {
            targetY -= step * Math.pow(index + 1, 0.8);
          }
        }

        // END OFFSET (controls where image stops at last item)
          if (w >= 2160) targetY -= 24;
          else if (w >= 1440) targetY -= 18;
          else if (w >= 1024) targetY -= 12;
          else if (w >= 768)  targetY -= 8;
          else                targetY -= 4;


        /* APPLY TRANSFORM */
        gsap.to(imageWrap, {
          y: targetY,
          x:
            w >= 1440 ? 60 :
            w >= 1024 ? 40 :
            w >= 768  ? 24 :
                        16,
          rotateX: -4,
          rotateY: 3,
          rotateZ: 0,
          duration: 0.9,
          ease: "power3.out",
        });
      }

      ScrollTrigger.refresh();
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section className="nf9-services-section" ref={sectionRef}>
      <div className="nf9-services-label">Our Services ↴</div>

      <div className="nf9-services-grid">
        {/* IMAGE COLUMN */}
        <div className="nf9-services-image-col">
          <div className="nf9-services-image-stage">
            <div className="nf9-services-image-wrap" ref={imageWrapRef}>
              {SERVICES.map((s, i) => (
                <img
                  key={i}
                  src={s.image}
                  alt={s.title}
                  className="nf9-services-image"
                />
              ))}
            </div>
          </div>
        </div>

        {/* TEXT COLUMN */}
        <div className="nf9-services-list">
          {SERVICES.map((s, i) => (
            <h1 key={i} className="nf9-services-item">
              {s.title}
            </h1>
          ))}
          <div className="nf9-services-spacer" />
        </div>
      </div>
    </section>
  );
}
