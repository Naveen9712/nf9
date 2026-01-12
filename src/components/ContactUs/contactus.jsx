import "./contactus.css";

export default function ContactUs() {
  return (
    <section className="contact-main">
      {/* ROW 1 */}
      <div className="contact-title-row">
        <h1>Get in touch.</h1>
      </div>

      {/* ROW 2 */}
      <div className="contact-content-row">
        {/* LEFT */}
        <div className="contact-left">
          <p>
            <strong>         Have a project in mind?</strong> Reach out to us, and we’ll
            discuss the best way to move forward.
          </p>
        </div>

        {/* RIGHT */}
        <div className="contact-right">
          <form className="contact-form">
            <div className="field">
              <input type="text" placeholder="Your name *" required />
              <span className="line"></span>
            </div>

            <div className="field">
              <input type="email" placeholder="Email *" required />
              <span className="line"></span>
            </div>

            <div className="field">
              <textarea placeholder="Your message"></textarea>
              <span className="line"></span>
            </div>

            {/* BUTTON */}
            <button className="submit-btn" type="submit">
              <span className="btn-text top">Submit</span>
              <span className="btn-text bottom">Submit</span>
              <span className="btn-dot"></span>
            </button>

            <p className="terms">
              By submitting, you agree to our{" "}
              <a href="#">Terms</a> and <a href="#">Privacy Policy</a>.
            </p>
          </form>
        </div>
      </div>
    </section>
  );
}
