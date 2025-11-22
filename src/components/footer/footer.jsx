import React from 'react';
import './footer.css';

const Footer = () => {
  return (
    <footer className="footer-section">
      <div className="footer-container">
        <div className="footer-content">
          {/* CONTACT Column */}
          <div className="footer-column">
            <h3 className="footer-column-title">CONTACT</h3>
            <div className="footer-column-content">
              <a href="mailto:contact@likelode.com" className="footer-link">
                contact@likelode.com
              </a>
              <a href="tel:+493061658431" className="footer-link">
                +493061658431
              </a>
            </div>
          </div>

          {/* OFFICE Column */}
          <div className="footer-column">
            <h3 className="footer-column-title">OFFICE</h3>
            <div className="footer-column-content">
              <div className="office-location">
                <div className="office-city">BERLIN</div>
                <div className="office-address">Brunnenstr.39</div>
                <div className="office-address">10115 Berlin</div>
              </div>
              <div className="office-location">
                <div className="office-city">MUNICH</div>
                <div className="office-address">Müllerstr. 44</div>
                <div className="office-address">80469 Munich</div>
              </div>
              <div className="office-location">
                <div className="office-city">SYDNEY</div>
                <div className="office-address">39 Merton Street</div>
                <div className="office-address">Rozelle 2039</div>
              </div>
            </div>
          </div>

          {/* PARTNERS Column */}
          <div className="footer-column">
            <h3 className="footer-column-title">PARTNERS</h3>
            <div className="footer-column-content">
              <div className="partner-item">
                <p className="partner-text">Official Canva partner for Germany</p>
                <div className="partner-logo canva-logo">
                  <span className="canva-text">Canva</span>
                </div>
              </div>
              <div className="partner-item">
                <p className="partner-text featured">FEATURED ON</p>
                <div className="partner-logo dan-logo">
                  <div className="dan-icon">
                    <span className="dan-icon-text">DAN</span>
                  </div>
                  <span className="dan-text">DIGITAL AGENCY NETWORK</span>
                </div>
                <div className="partner-dot"></div>
              </div>
            </div>
          </div>

          {/* LEGAL Column */}
          <div className="footer-column">
            <h3 className="footer-column-title">LEGAL</h3>
            <div className="footer-column-content">
              <p className="footer-text">2025 ©</p>
              <a href="#" className="footer-link">PRIVACY POLICY</a>
              <a href="#" className="footer-link">IMPRINT</a>
              <p className="footer-text">LODE GmbH | Jules Webster, Malte Pott</p>
              <p className="footer-text">Amtsgericht Berlin Charlottenburg</p>
              <p className="footer-text">HRB Nr. 149793</p>
              <p className="footer-text">EU-Vat: DE289357915</p>
              <p className="footer-text">---</p>
            </div>
          </div>
        </div>
      </div>
      
      {/* Large NF9 Text at Bottom */}
      <div className="footer-brand">
        <h1 className="footer-brand-text">NF9</h1>
      </div>
    </footer>
  );
};

export default Footer;