import { useState, useEffect } from 'react';
import Header from './components/header/header';
import Banner from './components/banner/banner';
import Services from './components/services/services';

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [isAnimated, setIsAnimated] = useState(false);

  // Page loader effect
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500);
    return () => clearTimeout(timer);
  }, []);

  // Hero animation sequence
  useEffect(() => {
    if (!isLoading) {
      const timer = setTimeout(() => {
        setIsAnimated(true);
      }, 100);
      return () => clearTimeout(timer);
    }
  }, [isLoading]);

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
      <div className={`page-loader ${!isLoading ? 'hidden' : ''}`}>
        <div className="loader-content">
          <div className="loader-logo">NF9</div>
        </div>
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
