import React from "react";
import "./hero.css"; // optional if you keep styles separate

const Hero = () => {
  return (
    <section className="homeWrap">
      <div className="hero">
        {/* Video Background */}
        <div className="video">
          <video
            id="homevid"
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
          >
            <source
              src="https://kollective.agency/kollective-beach-walk-1.mp4"
              type="video/mp4"
            />
          </video>
        </div>

        {/* Overlay Content */}
        <div className="inner">
          <div className="message">
            <div className="heroText">
              <p>
                LET’S INSPIRE YOUR
                <br />
                GUESTS TOGETHER
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
