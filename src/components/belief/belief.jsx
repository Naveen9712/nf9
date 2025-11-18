import React, { useEffect, useRef, useState } from 'react';
import './belief.css';

const Belief = () => {
  const [lineProgress, setLineProgress] = useState({});
  const [detectedLines, setDetectedLines] = useState([]);
  const [detectedHeadingLines, setDetectedHeadingLines] = useState([]);
  const lineRefs = useRef([]);
  const measureRef = useRef(null);
  const containerRef = useRef(null);
  const headingMeasureRef = useRef(null);
  const headingContainerRef = useRef(null);

  // Full heading text
  const headingText = 'WE BELIEVE GREAT WORK BEGINS WITH CURIOSITY';
  
  // Full paragraph text
  const paragraphText = 'Big transformations start with simple questions. Our clients ask, we listen, and together we uncover the path forward. Whether rethinking a platform, strengthening a brand, or reaching new audiences, each project begins by exploring the why. Strategy, design, and technology then shape solutions that are practical and ambitious. Here are a few examples of how questions sparked change.';

  // Detect paragraph lines on mount and resize
  useEffect(() => {
    // Function to detect actual rendered lines for paragraph
    const detectLines = () => {
      if (!measureRef.current || !containerRef.current) return;

      const measureEl = measureRef.current;
      const containerEl = containerRef.current;
      
      // Ensure measurement element has same width as container
      const containerWidth = containerEl.getBoundingClientRect().width;
      measureEl.style.width = `${containerWidth}px`;
      
      const words = paragraphText.split(' ');
      const lines = [];
      let currentLine = [];
      let currentLineTop = null;

      // Clear and rebuild measurement
      measureEl.innerHTML = '';
      
      // Create word spans for measurement
      words.forEach((word, index) => {
        const span = document.createElement('span');
        span.textContent = word + (index < words.length - 1 ? ' ' : '');
        span.style.display = 'inline';
        measureEl.appendChild(span);
      });

      // Force a reflow to ensure measurements are accurate
      measureEl.offsetHeight;

      // Now measure each word's position
      const wordSpans = measureEl.querySelectorAll('span');
      const measureRect = measureEl.getBoundingClientRect();
      
      wordSpans.forEach((span, index) => {
        const rect = span.getBoundingClientRect();
        const top = rect.top - measureRect.top;

        if (currentLineTop === null) {
          currentLineTop = top;
          currentLine = [words[index]];
        } else if (Math.abs(top - currentLineTop) < 3) {
          // Same line (with small tolerance for sub-pixel differences)
          currentLine.push(words[index]);
        } else {
          // New line detected
          lines.push(currentLine.join(' '));
          currentLine = [words[index]];
          currentLineTop = top;
        }
      });

      // Add the last line
      if (currentLine.length > 0) {
        lines.push(currentLine.join(' '));
      }

      setDetectedLines(lines);
    };

    const handleResize = () => {
      // Small delay to ensure DOM is updated
      setTimeout(() => {
        detectLines();
      }, 150);
    };

    // Initial detection after a short delay to ensure DOM is ready
    const timer = setTimeout(() => {
      detectLines();
    }, 200);
    
    window.addEventListener('resize', handleResize);
    return () => {
      clearTimeout(timer);
      window.removeEventListener('resize', handleResize);
    };
  }, [paragraphText]);

  // Detect heading lines on mount and resize
  useEffect(() => {
    // Function to detect actual rendered lines for heading
    const detectHeadingLines = () => {
      if (!headingMeasureRef.current || !headingContainerRef.current) return;

      const measureEl = headingMeasureRef.current;
      const containerEl = headingContainerRef.current;
      
      // Ensure measurement element has same width as container
      const containerWidth = containerEl.getBoundingClientRect().width;
      measureEl.style.width = `${containerWidth}px`;
      
      const words = headingText.split(' ');
      const lines = [];
      let currentLine = [];
      let currentLineTop = null;

      // Clear and rebuild measurement
      measureEl.innerHTML = '';
      
      // Create word spans for measurement
      words.forEach((word, index) => {
        const span = document.createElement('span');
        span.textContent = word + (index < words.length - 1 ? ' ' : '');
        span.style.display = 'inline';
        measureEl.appendChild(span);
      });

      // Force a reflow to ensure measurements are accurate
      measureEl.offsetHeight;

      // Now measure each word's position
      const wordSpans = measureEl.querySelectorAll('span');
      const measureRect = measureEl.getBoundingClientRect();
      
      wordSpans.forEach((span, index) => {
        const rect = span.getBoundingClientRect();
        const top = rect.top - measureRect.top;

        if (currentLineTop === null) {
          currentLineTop = top;
          currentLine = [words[index]];
        } else if (Math.abs(top - currentLineTop) < 3) {
          // Same line (with small tolerance for sub-pixel differences)
          currentLine.push(words[index]);
        } else {
          // New line detected
          lines.push(currentLine.join(' '));
          currentLine = [words[index]];
          currentLineTop = top;
        }
      });

      // Add the last line
      if (currentLine.length > 0) {
        lines.push(currentLine.join(' '));
      }

      setDetectedHeadingLines(lines);
    };

    const handleResize = () => {
      // Small delay to ensure DOM is updated
      setTimeout(() => {
        detectHeadingLines();
      }, 150);
    };

    // Initial detection after a short delay to ensure DOM is ready
    const timer = setTimeout(() => {
      detectHeadingLines();
    }, 200);
    
    window.addEventListener('resize', handleResize);
    return () => {
      clearTimeout(timer);
      window.removeEventListener('resize', handleResize);
    };
  }, [headingText]);

  // Throttle using requestAnimationFrame
  useEffect(() => {
    let ticking = false;

    const updateProgress = () => {
      const windowHeight = window.innerHeight;
      const newProgress = {};

      lineRefs.current.forEach((line, index) => {
        if (!line) return;

        const rect = line.getBoundingClientRect();
        const elementTop = rect.top;

        // You can tweak start/end points here
        const startPoint = windowHeight; // when bottom of viewport touches top of element
        const endPoint = windowHeight * 0.4; // when element reaches 40% from top

        let progress = 0;

        if (elementTop <= startPoint && elementTop >= endPoint) {
          const scrollRange = startPoint - endPoint;
          const currentScroll = startPoint - elementTop;
          progress = currentScroll / scrollRange;
        } else if (elementTop < endPoint) {
          progress = 1;
        } else {
          progress = 0;
        }

        newProgress[index] = Math.max(0, Math.min(1, progress));
      });

      setLineProgress(newProgress);
      ticking = false;
    };

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(updateProgress);
        ticking = true;
      }
    };

    // initial calc
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
    };
  }, [detectedLines, detectedHeadingLines]);

  const addToRefs = (el, index) => {
    if (!el) return;
    lineRefs.current[index] = el;
  };

  // Renders an entire line that will be wiped in as a whole
  const renderWipeLine = (text, lineIndex, extraClass = '') => {
    const progress = lineProgress[lineIndex] ?? 0;
    // clipPath inset: top right bottom left (percent)
    const clipPercent = 100 - progress * 100;

    return (
      <div
        ref={(el) => addToRefs(el, lineIndex)}
        className={`wipe-line overflow-hidden block w-full ${extraClass}`}
        aria-hidden="false"
      >
        {/* Visible base text (muted) */}
        <span className="line-base block">
          {text}
        </span>

        {/* Overlay which masks & reveals the real (dark) text */}
        <span
          className="line-overlay block"
          style={{
            WebkitClipPath: `inset(0 ${clipPercent}% 0 0)`,
            clipPath: `inset(0 ${clipPercent}% 0 0)`,
            // Slight transition for smoothness (the transition is controlled via CSS too)
            transition: 'clip-path 300ms cubic-bezier(.22,.9,.45,1), -webkit-clip-path 300ms cubic-bezier(.22,.9,.45,1)'
          }}
        >
          {text}
        </span>
      </div>
    );
  };

  return (
    <section
      className="w-full min-h-screen flex items-center justify-center py-32 px-5 md:px-10 lg:px-20 bg-white"
      id="belief"
    >
      <div className="max-w-7xl w-full mx-auto">
        <div className="flex flex-col md:flex-row gap-12 md:gap-16 lg:gap-20 items-center belief-content">
          {/* Left Column - Heading */}
          <div className="w-full md:w-2/5 lg:w-2/5 relative">
            {/* Hidden measurement element to detect actual heading lines */}
            <div
              ref={headingMeasureRef}
              className="font-semibold text-3xl md:text-3xl lg:text-3xl xl:text-3xl leading-tight text-left uppercase absolute top-0 left-0 w-full opacity-0 pointer-events-none"
              style={{ visibility: 'hidden', zIndex: -1 }}
              aria-hidden="true"
            />
            
            {/* Actual visible heading with dynamic lines */}
            <h2
              ref={headingContainerRef}
              className="font-semibold text-3xl md:text-3xl lg:text-3xl xl:text-3xl leading-tight text-left uppercase"
            >
              {detectedHeadingLines.length > 0 ? (
                detectedHeadingLines.map((line, index) => 
                  renderWipeLine(line, index, index < detectedHeadingLines.length - 1 ? 'mb-2' : '')
                )
              ) : (
                <div className="line-base">{headingText}</div>
              )}
            </h2>
          </div>

          {/* Right Column - Paragraph */}
          <div className="w-full md:w-3/5 lg:w-3/5 relative">
            {/* Hidden measurement element to detect actual lines */}
            <div
              ref={measureRef}
              className="font-normal text-base md:text-lg lg:text-xl leading-relaxed text-left absolute top-0 left-0 w-full opacity-0 pointer-events-none"
              style={{ visibility: 'hidden', zIndex: -1 }}
              aria-hidden="true"
            />
            
            {/* Actual visible paragraph with dynamic lines */}
            <div
              ref={containerRef}
              className="font-normal text-base md:text-lg lg:text-xl leading-relaxed text-left"
            >
              {detectedLines.length > 0 ? (
                detectedLines.map((line, index) => {
                  const lineIndex = detectedHeadingLines.length + index;
                  return renderWipeLine(line, lineIndex, index < detectedLines.length - 1 ? '' : '');
                })
              ) : (
                <div className="line-base">{paragraphText}</div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Belief;
