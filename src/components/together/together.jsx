import React, { useEffect, useRef } from "react";
import "./together.css";

export default function Together() {
  const sectionRef = useRef(null);
  const leftRef = useRef(null);
  const rightRef = useRef(null);
  const centerRef = useRef(null);

  // anim state
  const anim = useRef({ current: 0, target: 0, raf: null, visible: false });

  // final transforms (t = 1)
  const CONFIG = {
    // how far horizontally the side images go
    OUT_X: 420,
    // vertical offsets to create diagonal feel (left goes up, right goes down)
    LEFT_OUT_Y: -70,
    RIGHT_OUT_Y: 40,
    // rotation degrees at full out
    LEFT_ROT: -18,
    RIGHT_ROT: 18,
    // side image scale difference
    SIDE_SCALE: 1,
    // center scale slightly up like Framer
    CENTER_SCALE: 1.08,
    // widths
    CENTER_W: 680,
    SIDE_W: 360,
  };

  const lerp = (a, b, t) => a + (b - a) * t;

  useEffect(() => {
    const state = anim.current;

    // IntersectionObserver to mark when section is visible
    const io = new IntersectionObserver(
      ([entry]) => {
        state.visible = entry.isIntersecting;
      },
      { threshold: 0.3 }
    );
    if (sectionRef.current) io.observe(sectionRef.current);

    // wheel handler: down -> reveal, up -> hide
    const onWheel = (e) => {
      if (!state.visible) return;
      if (e.deltaY > 0) state.target = 1;
      else if (e.deltaY < 0) state.target = 0;
    };

    // touch support (swipe up / down)
    let lastY = null;
    const onTouchStart = (ev) => (lastY = ev.touches[0].clientY);
    const onTouchMove = (ev) => {
      if (lastY == null || !state.visible) return;
      const y = ev.touches[0].clientY;
      const diff = lastY - y;
      if (Math.abs(diff) > 12) {
        state.target = diff > 0 ? 1 : 0;
        lastY = y;
      }
    };
    const onTouchEnd = () => (lastY = null);

    window.addEventListener("wheel", onWheel, { passive: true });
    window.addEventListener("touchstart", onTouchStart, { passive: true });
    window.addEventListener("touchmove", onTouchMove, { passive: true });
    window.addEventListener("touchend", onTouchEnd, { passive: true });

    // animation loop
    const tick = () => {
      state.current = lerp(state.current, state.target, 0.14); // smoothing
      const t = state.current; // 0..1

      // compute transforms
      // inside your animation loop (tick)
const leftX = lerp(0, -CONFIG.OUT_X, t);
const leftY = lerp(0, CONFIG.LEFT_OUT_Y, t);
const leftRot = lerp(0, CONFIG.LEFT_ROT, t);

const rightX = lerp(0, CONFIG.OUT_X, t);
const rightY = lerp(0, CONFIG.RIGHT_OUT_Y, t);
const rightRot = lerp(0, CONFIG.RIGHT_ROT, t);

const centerScale = lerp(1, CONFIG.CENTER_SCALE, t);

// NOTE: changed base translate Y from -50% to -40% so images start a bit lower
if (leftRef.current) {
  leftRef.current.style.transform = `translate(-50%,-10%) translate(${leftX}px, ${leftY}px) rotate(${leftRot}deg) scale(${CONFIG.SIDE_SCALE})`;
  leftRef.current.style.opacity = `${t}`;
}
if (rightRef.current) {
  rightRef.current.style.transform = `translate(-50%,-10%) translate(${rightX}px, ${rightY}px) rotate(${rightRot}deg) scale(${CONFIG.SIDE_SCALE})`;
  rightRef.current.style.opacity = `${t}`;
}
if (centerRef.current) {
  centerRef.current.style.transform = `translate(-50%,-50%) scale(${centerScale})`;
}

      state.raf = requestAnimationFrame(tick);
    };

    state.raf = requestAnimationFrame(tick);

    return () => {
      window.removeEventListener("wheel", onWheel);
      window.removeEventListener("touchstart", onTouchStart);
      window.removeEventListener("touchmove", onTouchMove);
      window.removeEventListener("touchend", onTouchEnd);
      if (state.raf) cancelAnimationFrame(state.raf);
      io.disconnect();
    };
  }, []);

  return (
    <section className="together-section" ref={sectionRef}>
      <div className="together-wrapper">
        {/* Side images start exactly centered (behind) with opacity 0 */}
        <img
          ref={leftRef}
          className="side-img left"
          src="https://res.cloudinary.com/dzwm5v9gy/image/upload/v1765214808/lpcjuyknXEzXalpC07Z4IhsSwXU_uu3xzl.avif"
          alt=""
        />
        <img
          ref={rightRef}
          className="side-img right"
          src="https://res.cloudinary.com/dzwm5v9gy/image/upload/v1765214808/3GZ80fDYAmP4JFvmOKKzh2e7fVo_gcgous.avif"
          alt=""
        />

        {/* Center image visible on top */}
        <img
          ref={centerRef}
          className="center-img"
          src="https://res.cloudinary.com/dzwm5v9gy/image/upload/v1765214808/7sAfDH9xTZEcsX8HVwaznXFOPHw_tzmaxh.avif"
          alt=""
        />
      </div>

      <div className="together-title">
        <h1>LET'S WORK</h1>
        <h1>TOGETHER<span className="dot">.</span></h1>
        <a href="/contact" className="cta-framer">
  <span className="cta-text">
    <span className="word-get">GET</span>
    <span className="word-rest"> STARTED TODAY</span>

    <span className="underline-full"></span>
  </span>

  <span className="cta-arrow">
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
      <path d="M5 12h14M12 5l7 7-7 7" 
            stroke="currentColor" 
            strokeWidth="2" 
            strokeLinecap="round" 
            strokeLinejoin="round"/>
    </svg>
  </span>
</a>

      </div>
    </section>
  );
}
