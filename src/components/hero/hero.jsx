import React from "react";
import "./hero.css";

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
              src="https://res.cloudinary.com/dzwm5v9gy/video/upload/v1766932484/WhatsApp_Video_2025-12-15_at_19.22.36_s5yts1.mp4"
              type="video/mp4"
            />
          </video>
        </div>

        {/* Overlay Content */}
        <div className="inner">
          <div className="heroText">
            <h1 className="heroTitle">NF9</h1>
            <p className="heroSubtitle">IDEAS. ENGINEERED.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
