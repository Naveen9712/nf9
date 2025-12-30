import React, { useEffect, useRef, useState } from 'react';
import './vital-stats.css';

const VitalStats = () => {
  const [isAllVisible, setIsAllVisible] = useState(false); // used for reduced-motion fallback
  const sectionRef = useRef(null);

  // refs for the four stat blocks so we can reveal them one-by-one
  const statRefs = useRef([null, null, null, null]);

  // index of next stat to reveal
  const indexRef = useRef(0);
  // lock to prevent rapid retriggering
  const lockedRef = useRef(false);
  // store timers for cleanup
  const timersRef = useRef([]);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const prefersReducedMotion =
      typeof window !== 'undefined' &&
      window.matchMedia &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (prefersReducedMotion) {
      // show all immediately
      statRefs.current.forEach((el) => {
        if (el) el.classList.add('stat-visible');
      });
      setIsAllVisible(true);
      return;
    }

    // helper: check if section is (partially) visible in viewport
    function isSectionInView() {
      const rect = section.getBoundingClientRect();
      return rect.top < window.innerHeight && rect.bottom > 0;
    }

    function revealOne() {
      if (lockedRef.current) return;
      const idx = indexRef.current;
      if (idx >= statRefs.current.length) return; // done

      lockedRef.current = true;

      const el = statRefs.current[idx];
      if (el) {
        // add visible class (your CSS should animate from hidden -> visible)
        el.classList.add('stat-visible');
      }

      indexRef.current = idx + 1;

      // unlock after animation length (900ms chosen to match your example)
      const unlockT = setTimeout(() => {
        lockedRef.current = false;
      }, 900);
      timersRef.current.push(unlockT);
    }

    // Wheel handler: only trigger on scroll-down and only when section in view
    function onWheel(e) {
      // allow page vertical scrolling if the section isn't in view
      if (!isSectionInView()) return;

      if (e.deltaY > 0) {
        // prevent default page scroll while stepping through reveals
        e.preventDefault();
        revealOne();
      } else {
        // optional: you could implement going backward here when deltaY < 0
      }
    }

    // Key handler: ArrowDown, Space, Enter
    function onKeyDown(e) {
      // if user is focused on an input or textarea, ignore
      const active = document.activeElement;
      if (active && (active.tagName === 'INPUT' || active.tagName === 'TEXTAREA' || active.isContentEditable)) {
        return;
      }

      if (!isSectionInView()) return;

      if (['ArrowDown', 'Space', 'Enter'].includes(e.code)) {
        e.preventDefault();
        revealOne();
      }
    }

    // Touch support: use touchstart -> touchend vertical difference to emulate wheel down
    let touchStartY = null;
    function onTouchStart(e) {
      if (!isSectionInView()) return;
      if (e.touches && e.touches.length) {
        touchStartY = e.touches[0].clientY;
      }
    }
    function onTouchEnd(e) {
      if (touchStartY == null) return;
      const endY = (e.changedTouches && e.changedTouches[0] && e.changedTouches[0].clientY) || 0;
      const diff = touchStartY - endY;
      // threshold to avoid tiny swipes
      if (diff > 30) {
        // swipe up => user wants to go down the page
        revealOne();
      }
      touchStartY = null;
    }

    // Add listeners. Wheel needs passive: false so we can preventDefault.
    window.addEventListener('wheel', onWheel, { passive: false });
    window.addEventListener('keydown', onKeyDown);
    window.addEventListener('touchstart', onTouchStart, { passive: true });
    window.addEventListener('touchend', onTouchEnd, { passive: true });

    return () => {
      // cleanup
      window.removeEventListener('wheel', onWheel, { passive: false });
      window.removeEventListener('keydown', onKeyDown);
      window.removeEventListener('touchstart', onTouchStart);
      window.removeEventListener('touchend', onTouchEnd);

      timersRef.current.forEach((t) => clearTimeout(t));
      timersRef.current = [];
    };
  }, []);

  return (
    <section className="vital-stats-section" ref={sectionRef}>
      <div className="vital-stats-container">
        <h2 className="vital-stats-title">Vital Stats</h2>

        <div className="vital-stats-content">
          {/* Top Left Stat - First to appear */}
          <div
            className="stat-item stat-top-left"
            ref={(el) => (statRefs.current[0] = el)}
            aria-hidden={false}
            tabIndex={0}
          >
            <div className="stat-value">[100+]</div>
            <div className="stat-label">Transformative Digital Products Launched Globally</div>
          </div>

          {/* Top Right Stat - Second to appear */}
          <div
            className="stat-item stat-top-right"
            ref={(el) => (statRefs.current[1] = el)}
            aria-hidden={false}
            tabIndex={0}
          >
            <div className="stat-value">[110+]</div>
            <div className="stat-label">Successful Projects Executed Across Industries</div>
          </div>

          {/* Central Globe Image - Always visible */}
          <div className="globe-container" aria-hidden="true">
            <img
              src="/images/globe-img.png"
              alt="Globe"
              className="globe-image"
            />
          </div>

          {/* Bottom Left Stat - Third to appear */}
          <div
            className="stat-item stat-bottom-left"
            ref={(el) => (statRefs.current[2] = el)}
            aria-hidden={false}
            tabIndex={0}
          >
            <div className="stat-value">[30M+ AED]</div>
            <div className="stat-label">In Client Growth</div>
          </div>

          {/* Bottom Right Stat - Fourth to appear */}
          <div
            className="stat-item stat-bottom-right"
            ref={(el) => (statRefs.current[3] = el)}
            aria-hidden={false}
            tabIndex={0}
          >
            <div className="stat-value">[6+]</div>
            <div className="stat-label">Years Delivering Innovative Solutions</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VitalStats;