import React from "react";
import "./footer.css";

const Footer = () => {
  return (
    <footer className="nf9-footer">
      <div className="nf9-footer-inner">
        {/* COL 1 – Logo */}
        <div className="nf9-footer-col nf9-footer-col--logo">
          <div className="nf9-footer-logo-block">
            <div className="nf9-footer-logo-mark" />
            <span className="nf9-footer-logo-text">NF9</span>
          </div>
        </div>

        {/* COL 2 – Main links */}
        <div className="nf9-footer-col nf9-footer-col--links">
          <h4 className="nf9-footer-col-title">NF9</h4>
          <ul className="nf9-footer-list">
            <li><a href="#">Home</a></li>
            <li><a href="#">About us</a></li>
            <li><a href="#">How it Works</a></li>
            <li><a href="#">Work</a></li>
            <li><a href="#">Services</a></li>
            <li><a href="#">Careers</a></li>
            <li><a href="#">FAQ</a></li>
          </ul>
        </div>

        {/* COL 3 – Social */}
        <div className="nf9-footer-col nf9-footer-col--social">
          <h4 className="nf9-footer-col-title">Social</h4>
          <ul className="nf9-footer-list">
            <li><a href="#">LinkedIn</a></li>
            <li><a href="#">Instagram</a></li>
            <li><a href="#">Twitter</a></li>
          </ul>
        </div>

        {/* COL 4 – Meta / copy */}
        <div className="nf9-footer-col nf9-footer-col--meta nf9-footer-meta">
          <p>NF9</p>
          <p>Ideas. Engineered.</p>
          <p className="nf9-footer-meta-muted">© 2026 All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
