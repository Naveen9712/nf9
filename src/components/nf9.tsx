import { useState, useEffect, useRef } from 'react';
import './nf9.css';

export default function NF9() {
  const [isLoading, setIsLoading] = useState(true);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isAnimated, setIsAnimated] = useState(false);
  const starsContainerRef = useRef<HTMLDivElement>(null);
  const bannerContentRef = useRef<HTMLDivElement>(null);
  const glowOrbRef = useRef<HTMLDivElement>(null);

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

  // Create stars
  useEffect(() => {
    if (!starsContainerRef.current) return;

    const createStar = () => {
      const star = document.createElement('div');
      star.className = 'star';

      const size = Math.random() * 3 + 1;
      const startX = Math.random() * (window.innerWidth * 2);
      const startY = Math.random() * -200;
      const duration = Math.random() * 4 + 8;
      const delay = Math.random() * 8;

      star.style.width = size + 'px';
      star.style.height = size + 'px';
      star.style.left = startX + 'px';
      star.style.top = startY + 'px';
      star.style.animationDuration = duration + 's';
      star.style.animationDelay = delay + 's';

      return star;
    };

    const numberOfStars = 500;
    for (let i = 0; i < numberOfStars; i++) {
      starsContainerRef.current.appendChild(createStar());
    }
  }, []);

  // Parallax effect
  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.pageYOffset;
      
      if (bannerContentRef.current) {
        bannerContentRef.current.style.transform = `translateY(${scrolled * 0.5}px)`;
        bannerContentRef.current.style.opacity = (1 - scrolled / 700).toString();
      }

      if (glowOrbRef.current) {
        glowOrbRef.current.style.transform = `translate(-50%, -50%) scale(${1 + scrolled * 0.001})`;
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Mouse move effect
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!glowOrbRef.current) return;
      
      const x = e.clientX / window.innerWidth;
      const y = e.clientY / window.innerHeight;

      glowOrbRef.current.style.left = `${45 + x * 10}%`;
      glowOrbRef.current.style.top = `${45 + y * 10}%`;
    };

    document.addEventListener('mousemove', handleMouseMove);
    return () => document.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Smooth scroll
  const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
    setIsMenuOpen(false);
  };

  // Toggle menu
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    document.body.style.overflow = !isMenuOpen ? 'hidden' : 'auto';
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
        {/* Header */}
        <header>
          <div className="logo">
            <img 
              src="https://res.cloudinary.com/dsb1k3ugo/image/upload/v1760451582/nf9-icon_jcmneo.png" 
              width="35" 
              height="35" 
              alt="NF9 Logo" 
              style={{ objectFit: 'cover' }} 
            />
            <span>NF9</span>
          </div>
          <nav>
            <a href="#services" onClick={(e) => handleSmoothScroll(e, '#services')}>Services</a>
            <a href="#portfolio" onClick={(e) => handleSmoothScroll(e, '#portfolio')}>Portfolio</a>
            <a href="#process" onClick={(e) => handleSmoothScroll(e, '#process')}>How it Works</a>
            <a href="#about" onClick={(e) => handleSmoothScroll(e, '#about')}>About</a>
            <a href="#pricing" onClick={(e) => handleSmoothScroll(e, '#pricing')}>Pricing</a>
          </nav>
          <a href="#contact" className="cta-button" onClick={(e) => handleSmoothScroll(e, '#contact')}>
            Let's Talk
          </a>

          {/* Hamburger Menu */}
          <div className={`hamburger ${isMenuOpen ? 'active' : ''}`} onClick={toggleMenu}>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </header>

        {/* Mobile Menu */}
        <div className={`mobile-menu ${isMenuOpen ? 'active' : ''}`}>
          <a href="#services" onClick={(e) => handleSmoothScroll(e, '#services')}>Services</a>
          <a href="#portfolio" onClick={(e) => handleSmoothScroll(e, '#portfolio')}>Portfolio</a>
          <a href="#process" onClick={(e) => handleSmoothScroll(e, '#process')}>How it Works</a>
          <a href="#about" onClick={(e) => handleSmoothScroll(e, '#about')}>About</a>
          <a href="#pricing" onClick={(e) => handleSmoothScroll(e, '#pricing')}>Pricing</a>
          <a 
            href="#contact" 
            className="cta-button" 
            onClick={(e) => handleSmoothScroll(e, '#contact')}
            style={{ display: 'inline-block', marginTop: '20px' }}
          >
            Get Started
          </a>
        </div>

        {/* Banner Section */}
        <section className="banner">
          <div className="grid-pattern"></div>
          <div className="stars-container" ref={starsContainerRef}></div>
          <div className="glow-orb" ref={glowOrbRef}></div>

          <div 
            className={`banner-content ${!isAnimated ? 'initial' : 'animate-in'}`}
            ref={bannerContentRef}
          >
            <div className="banner-content-text">
              <h1 className={isAnimated ? 'animate-in animate-delay-1' : ''}>
                Ideas. Engineered.
              </h1>
              <p className={isAnimated ? 'animate-in animate-delay-2' : ''}>
                Since 2023, we've turned ideas into impact — designing, building, and launching digital products that perform with precision, inspire users, and scale with strength.
              </p>
            </div>

            <div className={`banner-buttons ${isAnimated ? 'animate-in animate-delay-3' : ''}`}>
              <a href="#contact" className="btn btn-primary" onClick={(e) => handleSmoothScroll(e, '#contact')}>
                <span>Start Your Project</span>
              </a>
              <a href="#services" className="btn btn-secondary" onClick={(e) => handleSmoothScroll(e, '#services')}>
                <span>Explore Services</span>
              </a>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}