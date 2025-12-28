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
              src="https://res.cloudinary.com/dzwm5v9gy/video/upload/v1766935871/NF9_Banner_Video_mabxxy.mp4"
              type="video/mp4"
            />
          </video>
        </div>

        {/* Overlay Content */}
        <div className="inner">
          <div className="heroText">
            <p className="heroSubtitle">IDEAS. ENGINEERED.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
