import { useState, useEffect } from 'react';
import Header from './components/header/header';
import Banner from './components/banner/banner';
import Services from './components/services/services';

function App() {
  const [loadingProgress, setLoadingProgress] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const [isAnimated, setIsAnimated] = useState(false);
  const [showCurtain, setShowCurtain] = useState(true);

  // Loading progress counter effect
  useEffect(() => {
    const duration = 1000; // 1 second - Fast loading
    const steps = 100;
    const stepDuration = duration / steps;
    let currentStep = 0;

    const interval = setInterval(() => {
      currentStep += 1;
      
      // Ease out effect for more natural progression
      const progress = Math.min(
        100,
        Math.floor(currentStep + (100 - currentStep) * 0.1)
      );
      
      setLoadingProgress(progress);

      if (currentStep >= 100) {
        clearInterval(interval);
        // Start exit animation after reaching 100%
        setTimeout(() => {
          setIsLoading(false);
        }, 300);
      }
    }, stepDuration);

    return () => clearInterval(interval);
  }, []);

  // Curtain reveal effect
  useEffect(() => {
    if (!isLoading) {
      setTimeout(() => {
        setShowCurtain(false);
      }, 100);
    }
  }, [isLoading]);

  // Hero animation sequence
  useEffect(() => {
    if (!showCurtain) {
      const timer = setTimeout(() => {
        setIsAnimated(true);
      }, 400);
      return () => clearTimeout(timer);
    }
  }, [showCurtain]);

  // Smooth scroll
  const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <>
      {/* Page Loader */}
      <div className={`page-loader ${!isLoading ? 'fade-out' : ''}`}>
        <div className="loader-content">
          <div className="loader-logo">NF9</div>
          <div className="loader-counter">
            {loadingProgress}%
          </div>
          <div className="loader-bar">
            <div 
              className="loader-bar-fill" 
              style={{ width: `${loadingProgress}%` }}
            />
          </div>
        </div>
      </div>

      {/* Curtain Reveal Effect */}
      <div className={`curtain-overlay ${!showCurtain ? 'reveal' : ''}`}>
        <div className="curtain-left"></div>
        <div className="curtain-right"></div>
      </div>

      <div className="page-content">
        <Header onSmoothScroll={handleSmoothScroll} />
        <Banner isAnimated={isAnimated} onSmoothScroll={handleSmoothScroll} />
        <Services />
      </div>
    </>
  );
}

export default App;