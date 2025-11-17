import React, { useEffect, useRef, useState } from 'react';
import './belief.css';

const Belief = () => {
  const sectionRef = useRef(null);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;

      const rect = sectionRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      const elementTop = rect.top;

      let progress = 0;

      const startPoint = windowHeight;
      const endPoint = windowHeight * 0.3;

      if (elementTop <= startPoint && elementTop >= endPoint) {
        const scrollRange = startPoint - endPoint;
        const currentScroll = startPoint - elementTop;
        progress = currentScroll / scrollRange;
      } else if (elementTop < endPoint) {
        progress = 1;
      }

      setScrollProgress(Math.max(0, Math.min(1, progress)));
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
    };
  }, []);

  const renderTextWithEffect = (text) => {
    const words = text.split(' ');
    return words.map((word, index) => (
      <span key={index} className="inline-block relative mr-[0.3em]">
        <span className="text-gray-300">{word}</span>
        <span 
          className="absolute top-0 left-0 text-black whitespace-nowrap transition-all duration-300 ease-out"
          style={{
            clipPath: `inset(0 ${100 - scrollProgress * 100}% 0 0)`
          }}
        >
          {word}
        </span>
      </span>
    ));
  };

  return (
    <section 
      ref={sectionRef}
      className="w-full min-h-screen flex items-center justify-center py-32 px-5 md:px-10 lg:px-20 bg-white" 
      id="belief"
    >
      <div className="max-w-7xl w-full mx-auto">
        <div className="flex flex-col md:flex-row gap-12 md:gap-16 lg:gap-20 items-center belief-content">
          {/* Left Column - Heading */}
          <div className="w-full md:w-2/5 lg:w-2/5">
            <h2 className="font-semibold text-3xl md:text-3xl lg:text-3xl xl:text-3xl leading-tight text-left uppercase">
              {renderTextWithEffect('WE BELIEVE GREAT WORK')}
              <br />
              <span className="block mt-2">
                {renderTextWithEffect('BEGINS WITH CURIOSITY')}
              </span>
            </h2>
          </div>
          
          {/* Right Column - Paragraph */}
          <div className="w-full md:w-3/5 lg:w-3/5">
            <p className="font-normal text-base md:text-lg lg:text-xl leading-relaxed text-left">
              {renderTextWithEffect('Big transformations start with simple questions. Our clients ask, we listen, and together we uncover the path forward. Whether rethinking a platform, strengthening a brand, or reaching new audiences, each project begins by exploring the why. Strategy, design, and technology then shape solutions that are practical and ambitious. Here are a few examples of how questions sparked change.')}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Belief;