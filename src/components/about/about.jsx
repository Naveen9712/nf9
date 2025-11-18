import React from 'react';
import './about.css';

const About = () => {
  return (
    <section 
      className="w-full min-h-screen flex items-center justify-center py-32 px-5 bg-white" 
      id="about"
    >
      <div className="max-w-4xl w-full mx-auto">
        <div className="text-center about-content">
          <h1 className="text-black mb-5 tracking-wider uppercase">
            WE ARE NF9
          </h1>
          <p className="text-black leading-relaxed max-w-2xl mx-auto">
            We design and develop websites, apps, and digital
            experiences that help clients grow, innovate, and transform.
            We listen, learn, and understand before we build. Together,
            we define goals and use our expertise to find the sweet
            spot of realistic and impactful. Our work has earned the
            trust of leading brands, nonprofits, and government
            agencies worldwide.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;

