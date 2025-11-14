import React, { useState, useEffect, useRef } from 'react';
import './header.css';

const Header = () => {
  const [isMenuActive, setIsMenuActive] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const hamburgerRef = useRef(null);
  const centerTextRef = useRef(null);

  // Toggle menu with smooth animation
  const toggleMenu = () => {
    setIsMenuActive(!isMenuActive);
    
    // Prevent body scroll when menu is open
    if (!isMenuActive) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  };

  // Magnetic effect for hamburger menu
  useEffect(() => {
    const handleMouseMove = (e) => {
      if (!hamburgerRef.current) return;

      const rect = hamburgerRef.current.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;
      const distanceX = e.clientX - centerX;
      const distanceY = e.clientY - centerY;
      const distance = Math.sqrt(distanceX ** 2 + distanceY ** 2);

      // Check if mouse is directly over the hamburger (within button bounds)
      const isOverButton = e.clientX >= rect.left && 
                           e.clientX <= rect.right && 
                           e.clientY >= rect.top && 
                           e.clientY <= rect.bottom;

      // Apply magnetic effect within 100px radius, but disable when directly over button
      if (distance < 100 && !isOverButton) {
        const strength = (100 - distance) / 100;
        const moveX = (distanceX / distance) * strength * 8; // Reduced from 15 to 8
        const moveY = (distanceY / distance) * strength * 8; // Reduced from 15 to 8
        hamburgerRef.current.style.transform = `translate(${moveX}px, ${moveY}px)`;
      } else {
        hamburgerRef.current.style.transform = '';
      }

      // Update mouse position for potential other effects
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  // Add keyboard accessibility
  useEffect(() => {
    const handleKeyPress = (e) => {
      if (e.key === 'Escape' && isMenuActive) {
        toggleMenu();
      }
    };

    window.addEventListener('keydown', handleKeyPress);

    return () => {
      window.removeEventListener('keydown', handleKeyPress);
    };
  }, [isMenuActive]);

  // Reset body scroll on unmount
  useEffect(() => {
    return () => {
      document.body.style.overflow = '';
    };
  }, []);

  // Ripple effect on menu links
  const createRipple = (e) => {
    const button = e.currentTarget;
    const ripple = document.createElement('span');
    const rect = button.getBoundingClientRect();
    const size = Math.max(rect.width, rect.height);
    const x = e.clientX - rect.left - size / 2;
    const y = e.clientY - rect.top - size / 2;

    ripple.style.width = ripple.style.height = `${size}px`;
    ripple.style.left = `${x}px`;
    ripple.style.top = `${y}px`;
    ripple.classList.add('ripple-effect');

    const existingRipple = button.querySelector('.ripple-effect');
    if (existingRipple) {
      existingRipple.remove();
    }

    button.appendChild(ripple);

    setTimeout(() => {
      ripple.remove();
    }, 600);
  };

  const menuItems = [
    { id: 1, text: 'Work', href: '#home' },
    { id: 2, text: 'Services', href: '#about' },
    { id: 3, text: 'About Us', href: '#services' },
    { id: 4, text: 'Why Us', href: '#portfolio' },
    { id: 5, text: 'News & Insights', href: '#news' },
    { id: 6, text: 'Careers', href: '#careers' },
    { id: 7, text: 'Contact Us', href: '#contact' }
  ];

  return (
    <>
      {/* Header */}
      <header 
        className={`fixed main-header left-0 right-0 flex justify-between items-center px-10 backdrop-blur-[10px] z-[1000] ${
          isMenuActive ? 'header-active' : ''
        }`}
        role="banner"
      >
        <div className="logo">
          <img 
            src="https://res.cloudinary.com/dsb1k3ugo/image/upload/v1760451582/nf9-icon_jcmneo.png" 
            width="60" 
            alt="NF9 Logo"
          />
        </div>
        
        <div 
          className="center-text" 
          ref={centerTextRef}
          data-text="NF9"
        >
          NF9
        </div>
        
        <button
          className={`hamburger ${isMenuActive ? 'active' : ''}`}
          onClick={toggleMenu}
          ref={hamburgerRef}
          aria-label={isMenuActive ? 'Close menu' : 'Open menu'}
          aria-expanded={isMenuActive}
          aria-controls="main-navigation"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </header>

      {/* Overlay */}
      <div 
        className={`overlay ${isMenuActive ? 'active' : ''}`}
        onClick={toggleMenu}
        aria-hidden="true"
      ></div>

      {/* Menu */}
      <nav 
        className={`menu ${isMenuActive ? 'active' : ''}`}
        id="main-navigation"
        role="navigation"
        aria-label="Main navigation"
      >
        <ul>
          {menuItems.map((item, index) => (
            <li 
              key={item.id}
              style={{ 
                transitionDelay: isMenuActive ? `${0.1 + index * 0.05}s` : '0s' 
              }}
            >
              <a 
                href={item.href}
                onClick={(e) => {
                  createRipple(e);
                  setTimeout(() => toggleMenu(), 300);
                }}
                style={{ position: 'relative', overflow: 'hidden' }}
              >
                {item.text}
              </a>
              <span className="background-text" aria-hidden="true">
                {item.text}
              </span>
            </li>
          ))}
        </ul>
        
        <span className="default-background-text" aria-hidden="true">NF9</span>
        
        <div className="menu-divider" aria-hidden="true"></div>
        
        <div className="social-links-container">
          <div className="reach-out-text">Reach Out Us</div>
          <div className="social-links">
            <a 
              href="https://instagram.com" 
              target="_blank" 
              rel="noopener noreferrer"
              aria-label="Visit our Instagram page"
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'rotateY(360deg) scale(1.2)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = '';
              }}
            >
              <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
            </a>
            <a 
              href="https://linkedin.com" 
              target="_blank" 
              rel="noopener noreferrer"
              aria-label="Visit our LinkedIn page"
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'rotateY(360deg) scale(1.2)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = '';
              }}
            >
              <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
            </a>
            <a 
              href="https://youtube.com" 
              target="_blank" 
              rel="noopener noreferrer"
              aria-label="Visit our YouTube channel"
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'rotateY(360deg) scale(1.2)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = '';
              }}
            >
              <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
              </svg>
            </a>
          </div>
        </div>
      </nav>

      {/* Inline styles for ripple effect */}
      <style jsx>{`
        .ripple-effect {
          position: absolute;
          border-radius: 50%;
          background: radial-gradient(circle, rgba(0, 255, 255, 0.4), rgba(255, 0, 255, 0.4), transparent);
          transform: scale(0);
          animation: ripple-animation 0.6s ease-out;
          pointer-events: none;
        }

        @keyframes ripple-animation {
          to {
            transform: scale(2);
            opacity: 0;
          }
        }
      `}</style>
    </>
  );
};

export default Header;