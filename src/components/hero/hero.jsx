import React from 'react';
import './hero.css';

const Hero = () => {
  return (
    <section className="hero-section" id="home">
      <div className="hero-container">
        <div className="hero-content">
          <h1 className="hero-title">
            Welcome to NF9
          </h1>
          <p className="hero-subtitle">
            Transforming ideas into digital excellence
          </p>
          <div className="hero-buttons">
            <button className="hero-btn hero-btn-primary">
              Get Started
            </button>
            <button className="hero-btn hero-btn-secondary">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

