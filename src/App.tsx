import { useState, useEffect } from 'react';
import Header from './components/header/header';
import Banner from './components/banner/banner';
import Services from './components/services/services';

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [isAnimated, setIsAnimated] = useState(false);
  const [showCurtain, setShowCurtain] = useState(true);

  // Simple loading effect - no progress counter
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1300); // Show NF9 logo for 1.3 seconds

    return () => clearTimeout(timer);
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
      {/* Page Loader - NF9 Logo Only */}
      <div className={`page-loader ${!isLoading ? 'fade-out' : ''}`}>
        <div className="loader-content">
          <div className="loader-logo">NF9</div>
        </div>
      </div>

      {/* Curtain Reveal Effect */}
      <div className={`curtain-overlay ${!showCurtain ? 'reveal' : ''}`}>
        <div className="curtain-left"></div>
        <div className="curtain-right"></div>
      </div>

      {/* Header outside page-content to maintain fixed positioning */}
      <Header onSmoothScroll={handleSmoothScroll} />

      <div className="page-content">
        <Banner isAnimated={isAnimated} onSmoothScroll={handleSmoothScroll} />
        <Services />
      </div>
    </>
  );
}

export default App;