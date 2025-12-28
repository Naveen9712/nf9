import "./footer.css";

export default function Footer() {
  return (
    <footer className="nf9-footer">
      <div className="nf9-container">

        {/* ================= TOP ================= */}
        <div className="nf9-top">

          <div className="nf9-contact">
            <span className="nf9-plus">+</span>
            <p className="nf9-phone">+91 xxxx xxx xxx</p>
            <a href="mailto:support@nf9.com" className="nf9-email">
              <span className="nf9-plus-circle">+</span>
              <span className="nf9-email-text">support@nf9.com</span>
            </a>
          </div>

          <div className="nf9-nav">
            <span className="nf9-plus">+</span>
            <p className="nf9-label">Navigation</p>
            <div className="nf9-social-row">
            <a href="#">Home</a>
            <a href="#">Services</a>
            <a href="#">Our Work</a>
            <a href="#">About NF9</a>
            <a href="#">Careers</a>
            <a href="#">Contact us</a>
            </div>
          </div>

          <div className="nf9-social">
            <span className="nf9-plus">+</span>
            <p className="nf9-label">Social</p>
            <div className="nf9-social-row">
              <a href="#" className="nf9-social-link">
                Twitter
              </a>
              <a href="#" className="nf9-social-link">
                Instagram 
              </a>
              <a href="#" className="nf9-social-link">
                LinkedIn 
              </a>
            </div>
          </div>

        </div>

        {/* ================= LOGO ================= */}
        <div className="nf9-logo">
          <h1>NEXT FRONTIER 9</h1>
        </div>

        {/* ================= BOTTOM ================= */}
        <div className="nf9-bottom">
          <div className="nf9-bottom-left">
            © 2025 NF9 Studio. All rights reserved.
            </div>
          <div className="nf9-bottom-right">
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}