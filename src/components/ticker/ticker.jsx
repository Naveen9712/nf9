import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './ticker.css';

gsap.registerPlugin(ScrollTrigger);

const Ticker = () => {
  const tickerRef = useRef(null);
  const contentRef = useRef(null);

  useEffect(() => {
    const ticker = tickerRef.current;
    const content = contentRef.current;

    if (!ticker || !content) return;

    // Duplicate the content multiple times for seamless infinite loop
    const contentWidth = content.offsetWidth;
    for (let i = 0; i < 3; i++) {
      const duplicateContent = content.cloneNode(true);
      ticker.appendChild(duplicateContent);
    }

    // Get all content elements
    const allContents = gsap.utils.toArray('.ticker__content', ticker);

    // Set initial positions
    gsap.set(allContents, { x: (i) => i * contentWidth });

    // Set up GSAP animation for continuous horizontal movement
    gsap.to(allContents, {
      x: '-=' + contentWidth,
      ease: 'none',
      scrollTrigger: {
        trigger: ticker,
        start: 'top bottom',
        end: 'bottom top',
        scrub: 3, // Very soft scrubbing for ultra-smooth movement
        pin: true, // Pin the section until scroll completes
        onUpdate: (self) => {
          // Reverse direction based on scroll direction
          const direction = self.direction === 1 ? -1 : 1;
          gsap.set(allContents, { x: (i) => (i * contentWidth) + (direction * self.progress * contentWidth) });
        },
      },
    });

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <section className="ticker-block pt-[3.5rem] pb-[2.1875rem] overflow-hidden text-[#EBEBEB] align wp-block-lode-lode-ticker-block">
      <div className="ticker" ref={tickerRef}>
        <div
          className="ticker__content uppercase font-bold whitespace-nowrap text-[8vw]"
          ref={contentRef}
          style={{ translate: 'none', rotate: 'none', scale: 'none', transform: 'translate(-50%, 0%)' }}
        >
          Creative 🧠 Design 🎨 Development 💻 Production ⚙️ Innovation 🚀 Strategy 🧭 Optimization 📈
        </div>
      </div>
    </section>
  );
};

export default Ticker;
