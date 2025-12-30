import React from "react";
import "./hero.css";

const Hero = () => {
  return (
    <section className="homeWrap">
      <div className="hero">
        {/* Video Background */}
        <video
          className="heroVideo"
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
        >
          <source
            src="https://res.cloudinary.com/dzwm5v9gy/video/upload/v1767013689/NF9_Hero_z7mh1v.mov"
            type="video/mp4"
          />
        </video>

        {/* Overlay Text */}
        <div className="heroContent">
          <p className="heroSubtitle">IDEAS. ENGINEERED.</p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
