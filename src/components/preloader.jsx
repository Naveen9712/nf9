import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';

const Preloader = ({ onComplete }) => {
  const [isVisible, setIsVisible] = useState(true);
  const [showContent, setShowContent] = useState(false);
  
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

    /* STEP 1 – Curtains open vertically (top up, bottom down) */
    tl.to(topCurtainRef.current, {
      duration: 1.2,
      yPercent: -100,
      ease: "power3.inOut"
    }, 0);

    tl.to(bottomCurtainRef.current, {
      duration: 1.2,
      yPercent: 100,
      ease: "power3.inOut"
    }, 0);

    /* STEP 2 – Animate letters rising */
    tl.to(lettersRef.current, {
      duration: 0.8,
      y: 0,
      opacity: 1,
      stagger: 0.1,
      ease: "power3.out"
    }, "+=0.2");

    /* STEP 3 – Animate accent line */
    tl.to(accentRef.current, {
      duration: 0.6,
      scaleX: 1,
      opacity: 0.08,
      ease: "power2.out"
    }, "-=0.4");

    /* STEP 4 – Hold */
    tl.to({}, {
      duration: 0.8
    });

    /* STEP 5 – Fade out center content */
    tl.to([...lettersRef.current, accentRef.current], {
      duration: 0.5,
      opacity: 0,
      y: -30,
      stagger: 0.06,
      ease: "power2.in"
    });

    /* STEP 6 – Fade out preloader */
    tl.to(preloaderRef.current, {
      duration: 0.4,
      opacity: 0,
      ease: "power2.inOut",
      onStart: () => {
        setShowContent(true);
      }
    }, "-=0.3");

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
        {/* Brand Letters */}
        <div className="flex gap-1.5 sm:gap-2 md:gap-3">
          {['N', 'F', '9'].map((letter, index) => (
            <span
              key={index}
              ref={(el) => (lettersRef.current[index] = el)}
              className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-black opacity-0"
              style={{
                fontFamily: '"Arial Black", Arial, sans-serif',
                transform: 'translateY(60px)'
              }}
            >
              {letter}
            </span>
          ))}
        </div>

        {/* Accent Line */}
        <div
          ref={accentRef}
          className="h-1 w-20 sm:w-24 md:w-28 lg:w-32 mt-5 bg-gray-900 opacity-0"
          style={{ transform: 'scaleX(0)' }}
        />
      </div>
    </div>
  );
};

export default Preloader;