import React from 'react';
import './belief.css';

const Belief = () => {
  return (
    <section 
      className="w-full min-h-screen flex items-center justify-center py-32 px-5 md:px-10 lg:px-20 bg-white" 
      id="belief"
    >
      <div className="max-w-7xl w-full mx-auto">
        <div className="flex flex-col md:flex-row gap-12 md:gap-16 lg:gap-20 items-center belief-content">
          {/* Left Column - Heading */}
          <div className="w-full md:w-2/5 lg:w-2/5">
            <h2 className="font-semibold text-3xl md:text-3xl lg:text-3xl xl:text-3xl text-black leading-tight text-left uppercase">
              WE BELIEVE GREAT WORK<br />
              <span className="block mt-2">BEGINS WITH CURIOSITY</span>
            </h2>
          </div>
          
          {/* Right Column - Paragraph */}
          <div className="w-full md:w-3/5 lg:w-3/5">
            <p className="font-normal text-base md:text-lg lg:text-xl text-black leading-relaxed text-left">
              Big transformations start with simple questions. Our clients ask, we listen, and together we uncover the path forward. Whether rethinking a platform, strengthening a brand, or reaching new audiences, each project begins by exploring the why. Strategy, design, and technology then shape solutions that are practical and ambitious. Here are a few examples of how questions sparked change.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Belief;

