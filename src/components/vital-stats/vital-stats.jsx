import React, { useState, useEffect, useRef } from 'react';
import './vital-stats.css';

const VitalStats = () => {
  const [visibleStats, setVisibleStats] = useState({
    topLeft: false,
    topRight: false,
    bottomLeft: false,
    bottomRight: false
  });
  
  const sectionRef = useRef(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          // Trigger animation when section is 30% visible and hasn't animated yet
          if (entry.isIntersecting && entry.intersectionRatio >= 0.3 && !hasAnimated.current) {
            hasAnimated.current = true;
            
            // Sequential animation with delays
            setTimeout(() => {
              setVisibleStats(prev => ({ ...prev, topLeft: true }));
            }, 200);
            
            setTimeout(() => {
              setVisibleStats(prev => ({ ...prev, topRight: true }));
            }, 600);
            
            setTimeout(() => {
              setVisibleStats(prev => ({ ...prev, bottomLeft: true }));
            }, 1000);
            
            setTimeout(() => {
              setVisibleStats(prev => ({ ...prev, bottomRight: true }));
            }, 1400);
          }
        });
      },
      {
        threshold: [0.3], // Trigger when 30% of section is visible
        rootMargin: '0px'
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section className="vital-stats-section" ref={sectionRef}>
      <div className="vital-stats-container">
        <h2 className="vital-stats-title">Vital Stats</h2>
        
        <div className="vital-stats-content">
          {/* Top Left Stat */}
          <div className={`stat-item stat-top-left ${visibleStats.topLeft ? 'visible' : ''}`}>
            <div className="stat-value">[100+]</div>
            <div className="stat-label">Transformative Digital Products Launched Globally</div>
          </div>

          {/* Top Right Stat */}
          <div className={`stat-item stat-top-right ${visibleStats.topRight ? 'visible' : ''}`}>
            <div className="stat-value">[110+]</div>
            <div className="stat-label">Successful Projects Executed Across Industries</div>
          </div>

          {/* Central Globe Image */}
          <div className="globe-container">
            <img 
              src="/images/globe-img.png" 
              alt="Globe" 
              className="globe-image"
            />
          </div>

          {/* Bottom Left Stat */}
          <div className={`stat-item stat-bottom-left ${visibleStats.bottomLeft ? 'visible' : ''}`}>
            <div className="stat-value">[30M+ AED]</div>
            <div className="stat-label">In Client Growth</div>
          </div>

          {/* Bottom Right Stat */}
          <div className={`stat-item stat-bottom-right ${visibleStats.bottomRight ? 'visible' : ''}`}>
            <div className="stat-value">[6+]</div>
            <div className="stat-label">Years Delivering Innovative Solutions</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VitalStats;
