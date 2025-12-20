import "./footer.css";

/* Arrow SVG */
function Arrow() {
  return (
    <svg className="nf9-arrow" viewBox="0 0 10 11" aria-hidden="true">
      <path
        d="M1.498 0.795V1.445C1.498 1.523 1.53 1.598 1.585 1.654
        C1.64 1.709 1.715 1.74 1.794 1.74H7.883
        L0.086 9.537C0.031 9.592 0 9.667 0 9.745
        C0 9.824 0.031 9.899 0.087 9.954
        L0.546 10.414C0.661 10.529 0.848 10.529 0.964 10.414
        L8.76 2.617V8.707Z"
        fill="currentColor"
        opacity="0.3"
      />
    </svg>
  );
}

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
                Twitter <Arrow />
              </a>
              <a href="#" className="nf9-social-link">
                Instagram <Arrow />
              </a>
              <a href="#" className="nf9-social-link">
                LinkedIn <Arrow />
              </a>
            </div>
          </div>

        </div>

        {/* ================= LOGO ================= */}
        <div className="nf9-logo">
          <h1>NF9</h1>
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
