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
          {/* Mobile */}
          <source
            src="https://res.cloudinary.com/dzwm5v9gy/video/upload/f_auto,q_auto,w_720,br_1500k,vc_h264/NF9_Banner_Video_mabxxy.mp4"
            media="(max-width: 768px)"
            type="video/mp4"
          />

          {/* Desktop */}
          <source
            src="https://res.cloudinary.com/dzwm5v9gy/video/upload/v1766935871/NF9_Banner_Video_mabxxy.mp4"
            type="video/mp4"
          />
        </video>

        {/* Text */}
        <div className="heroContent">
          <p className="heroSubtitle">IDEAS. ENGINEERED.</p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
