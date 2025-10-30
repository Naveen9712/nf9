import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';

const Preloader = ({ onComplete }) => {
  const [isVisible, setIsVisible] = useState(true);
  
  const preloaderRef = useRef(null);
  const topCurtainRef = useRef(null);
  const bottomCurtainRef = useRef(null);
  const lettersRef = useRef([]);
  const accentRef = useRef(null);

  useEffect(() => {
    // Prevent scrolling during preloader
    document.body.style.overflow = 'hidden';
    document.body.style.touchAction = 'none';

    // Create master timeline
    const tl = gsap.timeline({
      defaults: {
        ease: "power3.inOut"
      },
      onComplete: () => {
        // Cleanup and callback
        document.body.style.overflow = '';
        document.body.style.touchAction = '';
        setIsVisible(false);
        if (onComplete) onComplete();
      }
    });

  // Set initial states for letters and accent so enter/exit use the same units (percent)
  gsap.set(lettersRef.current, { yPercent: 100, opacity: 0 });
  gsap.set(accentRef.current, { scaleX: 0, opacity: 0, transformOrigin: 'left center' });

  /* STEP 1 – Curtains open vertically (top up, bottom down) */
    tl.to(topCurtainRef.current, {
      duration: 1.7,
      yPercent: -100,
      ease: "power3.inOut"
    }, 0);

    tl.to(bottomCurtainRef.current, {
      duration: 1.7,
      yPercent: 100,
      ease: "power3.inOut"
    }, 0);

    /* STEP 2 – Animate letters rising when curtain is 80% open (0.8s into animation) */
    tl.to(lettersRef.current, {
      duration: 0.7,
      yPercent: 0,
      opacity: 1,
      stagger: 0.15,
      ease: "power2.out"
    }, 0.8);

    /* STEP 3 – Animate accent line */
    tl.to(accentRef.current, {
      duration: 0.5,
      scaleX: 1,
      opacity: 0.12,
      ease: "power2.out"
    }, "-=0.3");

    /* STEP 4 – Brief Hold */
    tl.to({}, {
      duration: 0.1
    });

    /* STEP 5 – Move letters up and fade out quickly */
    tl.to(lettersRef.current, {
      duration: 1,
      yPercent: -140,
      opacity: 0,
      stagger: 0.1,
      ease: "power2.in"
    });

    // animate accent shortly after letters start moving up so it stays close visually
    tl.to(accentRef.current, {
      duration: 1.2,
      scaleX: 0,
      opacity: 0,
      ease: "power2.in"
    }, "-=0.5");

    /* STEP 6 – Fade out preloader */
    tl.to(preloaderRef.current, {
      duration: 0.4,
      opacity: 0,
      ease: "power2.inOut"
    }, "-=0.2");

    // Start animation after a brief delay
    const timer = setTimeout(() => {
      tl.play();
    }, 100);

    // Cleanup
    return () => {
      clearTimeout(timer);
      tl.kill();
      document.body.style.overflow = '';
      document.body.style.touchAction = '';
    };
  }, [onComplete]);

  if (!isVisible) return null;

  return (
    <div
      ref={preloaderRef}
      className="fixed inset-0 bg-white z-[9999] flex items-center justify-center overflow-hidden"
    >
      {/* Top Curtain */}
      <div
        ref={topCurtainRef}
        className="absolute w-full h-1/2 bg-black left-0 top-0 z-30"
        style={{ transformOrigin: 'top' }}
      />

      {/* Bottom Curtain */}
      <div
        ref={bottomCurtainRef}
        className="absolute w-full h-1/2 bg-black left-0 bottom-0 z-30"
        style={{ transformOrigin: 'bottom' }}
      />

      {/* Center Content */}
      <div className="relative flex flex-col items-center justify-center z-20">
  {/* Box containing letters; overflow hidden so letters rise inside the box */}
  <div className="preloader-box border-0 rounded-sm h-[40vh] w-full flex items-center justify-center overflow-hidden px-4">
          <div className="flex gap-0.5 sm:gap-1 md:gap-1.5">
            {['N', 'F', '9'].map((letter, index) => (
              <span
                key={index}
                ref={(el) => (lettersRef.current[index] = el)}
                className="preloader-text opacity-0 text-black inline-block"
              >
                {letter}
              </span>
            ))}
          </div>
        </div>

        {/* Accent Line (slightly closer) */}
        <div
          ref={accentRef}
          className="h-1 w-20 sm:w-24 md:w-28 lg:w-32 mt-1 bg-gray-900 opacity-0"
        />
      </div>
    </div>
  );
};

export default Preloader;