import React from "react";
import "./footer.css";

export default function Footer() {
  return (
    <footer className="nf9-footer" role="contentinfo">
      <div className="nf9-container">
        {/* Column 1 */}
        <div className="nf9-col nf9-col-1" data-border>
          <div className="nf9-logo-wrap">
            <h2 className="nf9-logo">NF9</h2>
            <p className="nf9-small-label">Ideas. Engineered.</p>
          </div>

          <div className="nf9-newsletter-wrap" data-border>
            <p className="nf9-small-label">STAY CONNECTED</p>

            <div className="nf9-news-copy">
              Subscribe to our Newsletter for the latest news from Deformo.
            </div>

            <form className="nf9-news-form" onSubmit={(e) => e.preventDefault()}>
              <label className="nf9-input-label">
                <div className="nf9-input-wrapper">
                  <input
                    type="email"
                    name="email"
                    required
                    placeholder="Enter your email address*"
                    className="nf9-input"
                  />
                </div>
              </label>

              <div className="nf9-submit-wrap">
                <button
                  type="submit"
                  className="nf9-btn nf9-btn-primary"
                  aria-label="Subscribe"
                >
                  <span className="nf9-btn-text">Subscribe</span>
                </button>
              </div>

              <input type="text" name="website" style={{ position: "absolute", transform: "scale(0)" }} />
              <input type="text" name="company" style={{ position: "absolute", transform: "scale(0)" }} />
            </form>
          </div>

          <div className="nf9-legal-wrap">
            <div className="nf9-legal-title">Legal</div>
            <div className="nf9-legal-links">
              <a href="#" className="nf9-legal-link">Terms of Service</a>
              <a href="#" className="nf9-legal-link">Privacy Policy</a>
            </div>
            <div className="nf9-legal-copy">@2026 NF9® - All rights reserved.</div>
          </div>
        </div>
        

        {/* Column 2 */}
        <div className="nf9-col nf9-col-2" data-border>
          <div className="nf9-menu-wrap">
            <div className="nf9-section-label">Menu</div>

            <nav className="nf9-menu-links" aria-label="Footer menu">
              <a className="nf9-menu-item" href="#">Home</a>
              <a className="nf9-menu-item" href="#">Services</a>
              <a className="nf9-menu-item" href="#">Work</a>
              <a className="nf9-menu-item" href="#">About us</a>
              <a className="nf9-menu-item" href="#">Why us</a>
              <a className="nf9-menu-item" href="#">Careers</a>
              <a className="nf9-menu-item" href="#">Contact us</a>
            </nav>
          </div>

          <div className="nf9-decor-wrapper" aria-hidden="true">
            <div className="nf9-decor nf9-decor-1" />
            <div className="nf9-decor nf9-decor-2" />
            <div className="nf9-decor nf9-decor-3" />
            <div className="nf9-decor nf9-decor-4" />
          </div>
        </div>

        {/* Column 3 */}
        <div className="nf9-col nf9-col-3" data-border>
          <div className="nf9-section-label">Connect</div>
          <div className="nf9-connect-links">
            <a className="nf9-menu-item" href="https://www.x.com" target="_blank" rel="noopener">Twitter</a>
            <a className="nf9-menu-item" href="https://www.instagram.com" target="_blank" rel="noopener">Instagram</a>
            <a className="nf9-menu-item" href="https://www.dribbble.com" target="_blank" rel="noopener">Email</a>
            <a className="nf9-menu-item" href="https://www.pinterest.com" target="_blank" rel="noopener">Twitter</a>
          </div>
          
        </div>

        {/* Column 4 */}
        <div className="nf9-col nf9-col-4" data-border>
          <div className="nf9-email-cta-wrap">
            <a className="nf9-email-cta" href="mailto:hi@deformo.com">support@nf9.com</a>
          </div>

          <div className="nf9-big-decor" aria-hidden="true">
            <div className="nf9-big-layer nf9-big-1" />
            <div className="nf9-big-layer nf9-big-2" />
            <div className="nf9-big-layer nf9-big-3" />
            <div className="nf9-big-layer nf9-big-4" />
            <div className="nf9-big-layer nf9-big-5" />
          </div>
        </div>
      </div>      
    </footer>
  );
}
