import { useState } from 'react';
import './header.css';

interface HeaderProps {
  onSmoothScroll: (e: React.MouseEvent<HTMLAnchorElement>, href: string) => void;
}

export default function Header({ onSmoothScroll }: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Toggle menu
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    document.body.style.overflow = !isMenuOpen ? 'hidden' : 'auto';
  };

  // Close menu and scroll
  const handleMenuClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setIsMenuOpen(false);
    document.body.style.overflow = 'auto';
    
    // Add small delay to allow menu to close smoothly before scrolling
    setTimeout(() => {
      onSmoothScroll(e, href);
    }, 150);
  };

  return (
    <>
      {/* Mobile Menu Overlay */}
      <div className={`mobile-overlay ${isMenuOpen ? 'active' : ''}`} onClick={toggleMenu}></div>

      {/* Header */}
      <header className={isMenuOpen ? 'menu-open' : ''}>
        <div className="header-top">
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
            <a href="#services" onClick={(e) => onSmoothScroll(e, '#services')}>Services</a>
            <a href="#portfolio" onClick={(e) => onSmoothScroll(e, '#portfolio')}>Portfolio</a>
            <a href="#process" onClick={(e) => onSmoothScroll(e, '#process')}>How it Works</a>
            <a href="#about" onClick={(e) => onSmoothScroll(e, '#about')}>About</a>
            <a href="#pricing" onClick={(e) => onSmoothScroll(e, '#pricing')}>Pricing</a>
          </nav>
          <a href="#contact" className="cta-button" onClick={(e) => onSmoothScroll(e, '#contact')}>
            Let's Talk
          </a>

          {/* Hamburger Menu */}
          <div className={`hamburger ${isMenuOpen ? 'active' : ''}`} onClick={toggleMenu}>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>

        {/* Mobile Menu */}
        <div className={`mobile-menu ${isMenuOpen ? 'active' : ''}`}>
          <a href="#services" onClick={(e) => handleMenuClick(e, '#services')}>Services</a>
          <a href="#portfolio" onClick={(e) => handleMenuClick(e, '#portfolio')}>Portfolio</a>
          <a href="#process" onClick={(e) => handleMenuClick(e, '#process')}>How it Works</a>
          <a href="#about" onClick={(e) => handleMenuClick(e, '#about')}>About</a>
          <a href="#pricing" onClick={(e) => handleMenuClick(e, '#pricing')}>Pricing</a>
          <a 
            href="#contact" 
            className="cta-button" 
            onClick={(e) => handleMenuClick(e, '#contact')}
          >
            Let's Talk
          </a>
        </div>
      </header>
    </>
  );
}