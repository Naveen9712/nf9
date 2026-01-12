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
            src="https://nf9.in/wp-content/uploads/2026/01/NF9-Banner-.mov"
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
