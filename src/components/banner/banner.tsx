import { useEffect, useRef } from 'react';
import './banner.css';

interface BannerProps {
  isAnimated: boolean;
  onSmoothScroll: (e: React.MouseEvent<HTMLAnchorElement>, href: string) => void;
}

export default function Banner({ isAnimated, onSmoothScroll }: BannerProps) {
  const starsContainerRef = useRef<HTMLDivElement>(null);
  const bannerContentRef = useRef<HTMLDivElement>(null);
  const glowOrbRef = useRef<HTMLDivElement>(null);

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

    const numberOfStars = 100;
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

  return (
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
            Since 2023, we've turned ideas into impact designing, building, and launching digital products that perform with precision, inspire users, and scale with strength.
          </p>
        </div>

        <div className={`banner-buttons ${isAnimated ? 'animate-in animate-delay-3' : ''}`}>
          <a href="#contact" className="button button-primary" onClick={(e) => onSmoothScroll(e, '#contact')}>
            Start Your Project
            <span className="button__icon-wrapper">
              <svg
                viewBox="0 0 14 15"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="button__icon-svg"
                width="10"
              >
                <path
                  d="M13.376 11.552l-.264-10.44-10.44-.24.024 2.28 6.96-.048L.2 12.56l1.488 1.488 9.432-9.432-.048 6.912 2.304.024z"
                  fill="currentColor"
                ></path>
              </svg>

              <svg
                viewBox="0 0 14 15"
                fill="none"
                width="10"
                xmlns="http://www.w3.org/2000/svg"
                className="button__icon-svg button__icon-svg--copy"
              >
                <path
                  d="M13.376 11.552l-.264-10.44-10.44-.24.024 2.28 6.96-.048L.2 12.56l1.488 1.488 9.432-9.432-.048 6.912 2.304.024z"
                  fill="currentColor"
                ></path>
              </svg>
            </span>
          </a>
          <a href="#services" className="button button-secondary" onClick={(e) => onSmoothScroll(e, '#services')}>
            Explore Services
            <span className="button__icon-wrapper">
              <svg
                viewBox="0 0 14 15"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="button__icon-svg"
                width="10"
              >
                <path
                  d="M13.376 11.552l-.264-10.44-10.44-.24.024 2.28 6.96-.048L.2 12.56l1.488 1.488 9.432-9.432-.048 6.912 2.304.024z"
                  fill="currentColor"
                ></path>
              </svg>

              <svg
                viewBox="0 0 14 15"
                fill="none"
                width="10"
                xmlns="http://www.w3.org/2000/svg"
                className="button__icon-svg button__icon-svg--copy"
              >
                <path
                  d="M13.376 11.552l-.264-10.44-10.44-.24.024 2.28 6.96-.048L.2 12.56l1.488 1.488 9.432-9.432-.048 6.912 2.304.024z"
                  fill="currentColor"
                ></path>
              </svg>
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}
