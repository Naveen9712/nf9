import React, { useState, useEffect } from 'react';
import './industry-footprint.css';

const IndustryFootprint = () => {
  const [angle, setAngle] = useState(0);
  const corousalContainer=document.getElementById("coro")
  useEffect(() => {

    const interval = setInterval(() => {
      setAngle((prev) => prev + 20);
    }, 2000); // Rotate every 2 seconds by 20 degrees, with 1 second transition and 1 second wait
    console.log(angle);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="industry-footprint-section">
      <div className="overflow-x-hidden tha">
        <div className="relative md:h-[900px] h-[800px] w-full overflow-hidden py-20 md:py-20">
          <div className="font-heading text-[28px] md:text-[64px] md:leading-14 text-center text-black">
            Our Industry Footprint
          </div>
          <div className="flex h-full items-center justify-center [perspective:1200px] [transform-style:preserve-3d]">
            <div id='coro' className="carousel-container flex min-h-[200px] cursor-grab active:cursor-grabbing items-center justify-center [transform-style:preserve-3d]" draggable="false" style={{ width: "2800px", userSelect: "none", transform: `rotateY(${angle}deg)` }}>
              <div className="group absolute flex h-fit items-center justify-center [backface-visibility:hidden]" style={{ width: '155.556px', transform: 'rotateY(0deg) translateZ(524.275px)' }}>
                <div className="relative h-[270px] w-[280px] sm:h-[280px] sm:w-[300px] md:w-[320px] lg:w-[350px] xl:w-[380px] rounded-[15px] overflow-hidden transition-transform duration-300 ease-out group-hover:scale-105">
                  <img alt="Automotive Industry" className="pointer-events-none object-cover w-full h-full select-none" draggable="false" src="https://ik.imagekit.io/99y1fc9mh/BCF/Group%206.png?updatedAt=1756137101694" />
                  <div className="absolute bottom-0 left-0 right-0 pl-4 pt-3.5 pb-3 text-white z-50 select-none">
                    <h3 className="xl:text-[18px] text-md font-light md:leading-[100%]">Business</h3>
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-black/80 via-black/40 to-transparent z-40"></div>
                </div>
              </div>
              <div className="group absolute flex h-fit items-center justify-center [backface-visibility:hidden]" style={{ width: '155.556px', transform: 'rotateY(20deg) translateZ(524.275px)' }}>
                <div className="relative h-[270px] w-[280px] sm:h-[280px] sm:w-[300px] md:w-[320px] lg:w-[350px] xl:w-[380px] rounded-[15px] overflow-hidden transition-transform duration-300 ease-out group-hover:scale-105">
                  <img alt="Agriculture Field " className="pointer-events-none object-cover w-full h-full select-none" draggable="false" src="https://ik.imagekit.io/99y1fc9mh/BCF/Group%203.png?updatedAt=1756137101396" />
                  <div className="absolute bottom-0 left-0 right-0 pl-4 pt-3.5 pb-3 text-white z-50 select-none">
                    <h3 className="xl:text-[18px] text-md font-light md:leading-[100%]">Education </h3>
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-black/80 via-black/40 to-transparent z-40"></div>
                </div>
              </div>
              <div className="group absolute flex h-fit items-center justify-center [backface-visibility:hidden]" style={{ width: '155.556px', transform: 'rotateY(40deg) translateZ(524.275px)' }}>
                <div className="relative h-[270px] w-[280px] sm:h-[280px] sm:w-[300px] md:w-[320px] lg:w-[350px] xl:w-[380px] rounded-[15px] overflow-hidden transition-transform duration-300 ease-out group-hover:scale-105">
                  <img alt="Infrastructure Equipment" className="pointer-events-none object-cover w-full h-full select-none" draggable="false" src="https://ik.imagekit.io/99y1fc9mh/BCF/Group%205.png?updatedAt=1756137101594" />
                  <div className="absolute bottom-0 left-0 right-0 pl-4 pt-3.5 pb-3 text-white z-50 select-none">
                    <h3 className="xl:text-[18px] text-md font-light md:leading-[100%]">Hospital</h3>
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-black/80 via-black/40 to-transparent z-40"></div>
                </div>
              </div>
              <div className="group absolute flex h-fit items-center justify-center [backface-visibility:hidden]" style={{ width: '155.556px', transform: 'rotateY(60deg) translateZ(524.275px)' }}>
                <div className="relative h-[270px] w-[280px] sm:h-[280px] sm:w-[300px] md:w-[320px] lg:w-[350px] xl:w-[380px] rounded-[15px] overflow-hidden transition-transform duration-300 ease-out group-hover:scale-105">
                  <img alt="Equipment Manufacturing" className="pointer-events-none object-cover w-full h-full select-none" draggable="false" src="https://ik.imagekit.io/99y1fc9mh/BCF/Group%204.png?updatedAt=1756137101274" />
                  <div className="absolute bottom-0 left-0 right-0 pl-4 pt-3.5 pb-3 text-white z-50 select-none">
                    <h3 className="xl:text-[18px] text-md font-light md:leading-[100%]">Restaurant</h3>
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-black/80 via-black/40 to-transparent z-40"></div>
                </div>
              </div>
              <div className="group absolute flex h-fit items-center justify-center [backface-visibility:hidden]" style={{ width: '155.556px', transform: 'rotateY(80deg) translateZ(524.275px)' }}>
                <div className="relative h-[270px] w-[280px] sm:h-[280px] sm:w-[300px] md:w-[320px] lg:w-[350px] xl:w-[380px] rounded-[15px] overflow-hidden transition-transform duration-300 ease-out group-hover:scale-105">
                  <img alt="Aerospace" className="pointer-events-none object-cover w-full h-full select-none" draggable="false" src="https://ik.imagekit.io/99y1fc9mh/BCF/Group%207%20(1).png?updatedAt=1757143977979" />
                  <div className="absolute bottom-0 left-0 right-0 pl-4 pt-3.5 pb-3 text-white z-50 select-none">
                    <h3 className="xl:text-[18px] text-md font-light md:leading-[100%]">Government</h3>
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-black/80 via-black/40 to-transparent z-40"></div>
                </div>
              </div>
              <div className="group absolute flex h-fit items-center justify-center [backface-visibility:hidden]" style={{ width: '155.556px', transform: 'rotateY(100deg) translateZ(524.275px)' }}>
                <div className="relative h-[270px] w-[280px] sm:h-[280px] sm:w-[300px] md:w-[320px] lg:w-[350px] xl:w-[380px] rounded-[15px] overflow-hidden transition-transform duration-300 ease-out group-hover:scale-105">
                  <img alt="Renewable Energy" className="pointer-events-none object-cover w-full h-full select-none" draggable="false" src="https://ik.imagekit.io/99y1fc9mh/BCF/Rectangle%207.png?updatedAt=1756891891322" />
                  <div className="absolute bottom-0 left-0 right-0 pl-4 pt-3.5 pb-3 text-white z-50 select-none">
                    <h3 className="xl:text-[18px] text-md font-light md:leading-[100%]">Real Estate</h3>
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-black/80 via-black/40 to-transparent z-40"></div>
                </div>
              </div>
              <div className="group absolute flex h-fit items-center justify-center [backface-visibility:hidden]" style={{ width: '155.556px', transform: 'rotateY(120deg) translateZ(524.275px)' }}>
                <div className="relative h-[270px] w-[280px] sm:h-[280px] sm:w-[300px] md:w-[320px] lg:w-[350px] xl:w-[380px] rounded-[15px] overflow-hidden transition-transform duration-300 ease-out group-hover:scale-105">
                  <img alt="Automotive Industry" className="pointer-events-none object-cover w-full h-full select-none" draggable="false" src="https://ik.imagekit.io/99y1fc9mh/BCF/Group%206.png?updatedAt=1756137101694" />
                  <div className="absolute bottom-0 left-0 right-0 pl-4 pt-3.5 pb-3 text-white z-50 select-none">
                    <h3 className="xl:text-[18px] text-md font-light md:leading-[100%]">Technology</h3>
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-black/80 via-black/40 to-transparent z-40"></div>
                </div>
              </div>
              <div className="group absolute flex h-fit items-center justify-center [backface-visibility:hidden]" style={{ width: '155.556px', transform: 'rotateY(140deg) translateZ(524.275px)' }}>
                <div className="relative h-[270px] w-[280px] sm:h-[280px] sm:w-[300px] md:w-[320px] lg:w-[350px] xl:w-[380px] rounded-[15px] overflow-hidden transition-transform duration-300 ease-out group-hover:scale-105">
                  <img alt="Agriculture Field " className="pointer-events-none object-cover w-full h-full select-none" draggable="false" src="https://ik.imagekit.io/99y1fc9mh/BCF/Group%203.png?updatedAt=1756137101396" />
                  <div className="absolute bottom-0 left-0 right-0 pl-4 pt-3.5 pb-3 text-white z-50 select-none">
                    <h3 className="xl:text-[18px] text-md font-light md:leading-[100%]">E-Commerce </h3>
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-black/80 via-black/40 to-transparent z-40"></div>
                </div>
              </div>
              <div className="group absolute flex h-fit items-center justify-center [backface-visibility:hidden]" style={{ width: '155.556px', transform: 'rotateY(160deg) translateZ(524.275px)' }}>
                <div className="relative h-[270px] w-[280px] sm:h-[280px] sm:w-[300px] md:w-[320px] lg:w-[350px] xl:w-[380px] rounded-[15px] overflow-hidden transition-transform duration-300 ease-out group-hover:scale-105">
                  <img alt="Infrastructure Equipment" className="pointer-events-none object-cover w-full h-full select-none" draggable="false" src="https://ik.imagekit.io/99y1fc9mh/BCF/Group%205.png?updatedAt=1756137101594" />
                  <div className="absolute bottom-0 left-0 right-0 pl-4 pt-3.5 pb-3 text-white z-50 select-none">
                    <h3 className="xl:text-[18px] text-md font-light md:leading-[100%]">Energy</h3>
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-black/80 via-black/40 to-transparent z-40"></div>
                </div>
              </div>
              <div className="group absolute flex h-fit items-center justify-center [backface-visibility:hidden]" style={{ width: '155.556px', transform: 'rotateY(180deg) translateZ(524.275px)' }}>
                <div className="relative h-[270px] w-[280px] sm:h-[280px] sm:w-[300px] md:w-[320px] lg:w-[350px] xl:w-[380px] rounded-[15px] overflow-hidden transition-transform duration-300 ease-out group-hover:scale-105">
                  <img alt="Equipment Manufacturing" className="pointer-events-none object-cover w-full h-full select-none" draggable="false" src="https://ik.imagekit.io/99y1fc9mh/BCF/Group%204.png?updatedAt=1756137101274" />
                  <div className="absolute bottom-0 left-0 right-0 pl-4 pt-3.5 pb-3 text-white z-50 select-none">
                    <h3 className="xl:text-[18px] text-md font-light md:leading-[100%]">Art & Design</h3>
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-black/80 via-black/40 to-transparent z-40"></div>
                </div>
              </div>
              <div className="group absolute flex h-fit items-center justify-center [backface-visibility:hidden]" style={{ width: '155.556px', transform: 'rotateY(200deg) translateZ(524.275px)' }}>
                <div className="relative h-[270px] w-[280px] sm:h-[280px] sm:w-[300px] md:w-[320px] lg:w-[350px] xl:w-[380px] rounded-[15px] overflow-hidden transition-transform duration-300 ease-out group-hover:scale-105">
                  <img alt="Aerospace" className="pointer-events-none object-cover w-full h-full select-none" draggable="false" src="https://ik.imagekit.io/99y1fc9mh/BCF/Group%207%20(1).png?updatedAt=1757143977979" />
                  <div className="absolute bottom-0 left-0 right-0 pl-4 pt-3.5 pb-3 text-white z-50 select-none">
                    <h3 className="xl:text-[18px] text-md font-light md:leading-[100%]">Telecom</h3>
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-black/80 via-black/40 to-transparent z-40"></div>
                </div>
              </div>
              <div className="group absolute flex h-fit items-center justify-center [backface-visibility:hidden]" style={{ width: '155.556px', transform: 'rotateY(220deg) translateZ(524.275px)' }}>
                <div className="relative h-[270px] w-[280px] sm:h-[280px] sm:w-[300px] md:w-[320px] lg:w-[350px] xl:w-[380px] rounded-[15px] overflow-hidden transition-transform duration-300 ease-out group-hover:scale-105">
                  <img alt="Renewable Energy" className="pointer-events-none object-cover w-full h-full select-none" draggable="false" src="https://ik.imagekit.io/99y1fc9mh/BCF/Rectangle%207.png?updatedAt=1756891891322" />
                  <div className="absolute bottom-0 left-0 right-0 pl-4 pt-3.5 pb-3 text-white z-50 select-none">
                    <h3 className="xl:text-[18px] text-md font-light md:leading-[100%]">Tourism</h3>
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-black/80 via-black/40 to-transparent z-40"></div>
                </div>
              </div>
              <div className="group absolute flex h-fit items-center justify-center [backface-visibility:hidden]" style={{ width: '155.556px', transform: 'rotateY(240deg) translateZ(524.275px)' }}>
                <div className="relative h-[270px] w-[280px] sm:h-[280px] sm:w-[300px] md:w-[320px] lg:w-[350px] xl:w-[380px] rounded-[15px] overflow-hidden transition-transform duration-300 ease-out group-hover:scale-105">
                  <img alt="Automotive Industry" className="pointer-events-none object-cover w-full h-full select-none" draggable="false" src="https://ik.imagekit.io/99y1fc9mh/BCF/Group%206.png?updatedAt=1756137101694" />
                  <div className="absolute bottom-0 left-0 right-0 pl-4 pt-3.5 pb-3 text-white z-50 select-none">
                    <h3 className="xl:text-[18px] text-md font-light md:leading-[100%]">Automotive Industry</h3>
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-black/80 via-black/40 to-transparent z-40"></div>
                </div>
              </div>
              <div className="group absolute flex h-fit items-center justify-center [backface-visibility:hidden]" style={{ width: '155.556px', transform: 'rotateY(260deg) translateZ(524.275px)' }}>
                <div className="relative h-[270px] w-[280px] sm:h-[280px] sm:w-[300px] md:w-[320px] lg:w-[350px] xl:w-[380px] rounded-[15px] overflow-hidden transition-transform duration-300 ease-out group-hover:scale-105">
                  <img alt="Agriculture Field " className="pointer-events-none object-cover w-full h-full select-none" draggable="false" src="https://ik.imagekit.io/99y1fc9mh/BCF/Group%203.png?updatedAt=1756137101396" />
                  <div className="absolute bottom-0 left-0 right-0 pl-4 pt-3.5 pb-3 text-white z-50 select-none">
                    <h3 className="xl:text-[18px] text-md font-light md:leading-[100%]">Agriculture Field </h3>
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-black/80 via-black/40 to-transparent z-40"></div>
                </div>
              </div>
              <div className="group absolute flex h-fit items-center justify-center [backface-visibility:hidden]" style={{ width: '155.556px', transform: 'rotateY(280deg) translateZ(524.275px)' }}>
                <div className="relative h-[270px] w-[280px] sm:h-[280px] sm:w-[300px] md:w-[320px] lg:w-[350px] xl:w-[380px] rounded-[15px] overflow-hidden transition-transform duration-300 ease-out group-hover:scale-105">
                  <img alt="Infrastructure Equipment" className="pointer-events-none object-cover w-full h-full select-none" draggable="false" src="https://ik.imagekit.io/99y1fc9mh/BCF/Group%205.png?updatedAt=1756137101594" />
                  <div className="absolute bottom-0 left-0 right-0 pl-4 pt-3.5 pb-3 text-white z-50 select-none">
                    <h3 className="xl:text-[18px] text-md font-light md:leading-[100%]">Infrastructure Equipment</h3>
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-black/80 via-black/40 to-transparent z-40"></div>
                </div>
              </div>
              <div className="group absolute flex h-fit items-center justify-center [backface-visibility:hidden]" style={{ width: '155.556px', transform: 'rotateY(300deg) translateZ(524.275px)' }}>
                <div className="relative h-[270px] w-[280px] sm:h-[280px] sm:w-[300px] md:w-[320px] lg:w-[350px] xl:w-[380px] rounded-[15px] overflow-hidden transition-transform duration-300 ease-out group-hover:scale-105">
                  <img alt="Equipment Manufacturing" className="pointer-events-none object-cover w-full h-full select-none" draggable="false" src="https://ik.imagekit.io/99y1fc9mh/BCF/Group%204.png?updatedAt=1756137101274" />
                  <div className="absolute bottom-0 left-0 right-0 pl-4 pt-3.5 pb-3 text-white z-50 select-none">
                    <h3 className="xl:text-[18px] text-md font-light md:leading-[100%]">Equipment Manufacturing</h3>
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-black/80 via-black/40 to-transparent z-40"></div>
                </div>
              </div>
              <div className="group absolute flex h-fit items-center justify-center [backface-visibility:hidden]" style={{ width: '155.556px', transform: 'rotateY(320deg) translateZ(524.275px)' }}>
                <div className="relative h-[270px] w-[280px] sm:h-[280px] sm:w-[300px] md:w-[320px] lg:w-[350px] xl:w-[380px] rounded-[15px] overflow-hidden transition-transform duration-300 ease-out group-hover:scale-105">
                  <img alt="Aerospace" className="pointer-events-none object-cover w-full h-full select-none" draggable="false" src="https://ik.imagekit.io/99y1fc9mh/BCF/Group%207%20(1).png?updatedAt=1757143977979" />
                  <div className="absolute bottom-0 left-0 right-0 pl-4 pt-3.5 pb-3 text-white z-50 select-none">
                    <h3 className="xl:text-[18px] text-md font-light md:leading-[100%]">Aerospace</h3>
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-black/80 via-black/40 to-transparent z-40"></div>
                </div>
              </div>
              <div className="group absolute flex h-fit items-center justify-center [backface-visibility:hidden]" style={{ width: '155.556px', transform: 'rotateY(340deg) translateZ(524.275px)' }}>
                <div className="relative h-[270px] w-[280px] sm:h-[280px] sm:w-[300px] md:w-[320px] lg:w-[350px] xl:w-[380px] rounded-[15px] overflow-hidden transition-transform duration-300 ease-out group-hover:scale-105">
                  <img alt="Renewable Energy" className="pointer-events-none object-cover w-full h-full select-none" draggable="false" src="https://ik.imagekit.io/99y1fc9mh/BCF/Rectangle%207.png?updatedAt=1756891891322" />
                  <div className="absolute bottom-0 left-0 right-0 pl-4 pt-3.5 pb-3 text-white z-50 select-none">
                    <h3 className="xl:text-[18px] text-md font-light md:leading-[100%]">Renewable Energy</h3>
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-black/80 via-black/40 to-transparent z-40"></div>
                </div>
              </div>
            </div>
          </div>
          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 z-50">
            <div className="relative w-[500px] h-24 flex items-center justify-center">
              <div className="relative w-full h-full cursor-grab active:cursor-grabbing select-none" style={{ perspective: '1000px', transformStyle: 'preserve-3d' }}>
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none" style={{ transform: 'rotateX(35deg)', transformStyle: 'preserve-3d' }}>
                  <div className="w-80 h-1 rounded-full" style={{ transform: 'translateZ(-40px)' }}></div>
                </div>
                <div className="absolute inset-0 flex items-center justify-center" style={{ transform: 'rotateX(35deg)', transformStyle: 'preserve-3d' }}>
                  <button className="absolute transition-all duration-700 ease-out border-none outline-none bg-gray-400 hover:bg-gray-700 rounded-xl" aria-label="Go to slide 10" style={{ transform: 'translate3d(-288px, -2.88px, -20.736px) scale(0.3)', opacity: 0.15, width: '3px', height: '45px', cursor: 'pointer', transformStyle: 'preserve-3d', zIndex: -188 }}></button>
                  <button className="absolute transition-all duration-700 ease-out border-none outline-none bg-gray-400 hover:bg-gray-700 rounded-xl" aria-label="Go to slide 11" style={{ transform: 'translate3d(-270px, -2.7px, -18.225px) scale(0.3)', opacity: 0.15, width: '3px', height: '45px', cursor: 'pointer', transformStyle: 'preserve-3d', zIndex: -170 }}></button>
                  <button className="absolute transition-all duration-700 ease-out border-none outline-none bg-gray-400 hover:bg-gray-700 rounded-xl" aria-label="Go to slide 12" style={{ transform: 'translate3d(-252px, -2.52px, -15.876px) scale(0.3)', opacity: 0.15, width: '3px', height: '45px', cursor: 'pointer', transformStyle: 'preserve-3d', zIndex: -152 }}></button>
                  <button className="absolute transition-all duration-700 ease-out border-none outline-none bg-gray-400 hover:bg-gray-700 rounded-xl" aria-label="Go to slide 13" style={{ transform: 'translate3d(-234px, -2.34px, -13.689px) scale(0.3)', opacity: 0.15, width: '3px', height: '45px', cursor: 'pointer', transformStyle: 'preserve-3d', zIndex: -134 }}></button>
                  <button className="absolute transition-all duration-700 ease-out border-none outline-none bg-gray-400 hover:bg-gray-700 rounded-xl" aria-label="Go to slide 14" style={{ transform: 'translate3d(-216px, -2.16px, -11.664px) scale(0.3)', opacity: 0.15, width: '3px', height: '45px', cursor: 'pointer', transformStyle: 'preserve-3d', zIndex: -116 }}></button>
                  <button className="absolute transition-all duration-700 ease-out border-none outline-none bg-gray-400 hover:bg-gray-700 rounded-xl" aria-label="Go to slide 15" style={{ transform: 'translate3d(-198px, -1.98px, -9.801px) scale(0.3)', opacity: 0.15, width: '3px', height: '45px', cursor: 'pointer', transformStyle: 'preserve-3d', zIndex: -98 }}></button>
                  <button className="absolute transition-all duration-700 ease-out border-none outline-none bg-gray-400 hover:bg-gray-700 rounded-xl" aria-label="Go to slide 16" style={{ transform: 'translate3d(-180px, -1.8px, -8.1px) scale(0.3)', opacity: 0.15, width: '3px', height: '45px', cursor: 'pointer', transformStyle: 'preserve-3d', zIndex: -80 }}></button>
                  <button className="absolute transition-all duration-700 ease-out border-none outline-none bg-gray-400 hover:bg-gray-700 rounded-xl" aria-label="Go to slide 17" style={{ transform: 'translate3d(-162px, -1.62px, -6.561px) scale(0.3)', opacity: 0.15, width: '3px', height: '45px', cursor: 'pointer', transformStyle: 'preserve-3d', zIndex: -62 }}></button>
                  <button className="absolute transition-all duration-700 ease-out border-none outline-none bg-gray-400 hover:bg-gray-700 rounded-xl" aria-label="Go to slide 18" style={{ transform: 'translate3d(-144px, -1.44px, -5.184px) scale(0.3)', opacity: 0.15, width: '3px', height: '45px', cursor: 'pointer', transformStyle: 'preserve-3d', zIndex: -44 }}></button>
                  <button className="absolute transition-all duration-700 ease-out border-none outline-none bg-gray-400 hover:bg-gray-700 rounded-xl" aria-label="Go to slide 1" style={{ transform: 'translate3d(-126px, -1.26px, -3.969px) scale(0.3)', opacity: 0.2125, width: '3px', height: '45px', cursor: 'pointer', transformStyle: 'preserve-3d', zIndex: -26 }}></button>
                  <button className="absolute transition-all duration-700 ease-out border-none outline-none bg-gray-400 hover:bg-gray-700 rounded-xl" aria-label="Go to slide 2" style={{ transform: 'translate3d(-108px, -1.08px, -2.916px) scale(0.4)', opacity: 0.325, width: '3px', height: '45px', cursor: 'pointer', transformStyle: 'preserve-3d', zIndex: -8 }}></button>
                  <button className="absolute transition-all duration-700 ease-out border-none outline-none bg-gray-400 hover:bg-gray-700 rounded-xl" aria-label="Go to slide 3" style={{ transform: 'translate3d(-90px, -0.9px, -2.025px) scale(0.5)', opacity: 0.4375, width: '3px', height: '45px', cursor: 'pointer', transformStyle: 'preserve-3d', zIndex: 10 }}></button>
                  <button className="absolute transition-all duration-700 ease-out border-none outline-none bg-gray-400 hover:bg-gray-700 rounded-xl" aria-label="Go to slide 4" style={{ transform: 'translate3d(-72px, -0.72px, -1.296px) scale(0.6)', opacity: 0.55, width: '3px', height: '45px', cursor: 'pointer', transformStyle: 'preserve-3d', zIndex: 28 }}></button>
                  <button className="absolute transition-all duration-700 ease-out border-none outline-none bg-gray-400 hover:bg-gray-700 rounded-xl" aria-label="Go to slide 5" style={{ transform: 'translate3d(-54px, -0.54px, -0.729px) scale(0.7)', opacity: 0.6625, width: '3px', height: '45px', cursor: 'pointer', transformStyle: 'preserve-3d', zIndex: 46 }}></button>
                  <button className="absolute transition-all duration-700 ease-out border-none outline-none bg-gray-400 hover:bg-gray-700 rounded-xl" aria-label="Go to slide 6" style={{ transform: 'translate3d(-36px, -0.36px, -0.324px) scale(0.8)', opacity: 0.775, width: '3px', height: '45px', cursor: 'pointer', transformStyle: 'preserve-3d', zIndex: 64 }}></button>
                  <button className="absolute transition-all duration-700 ease-out border-none outline-none bg-gray-400 hover:bg-gray-700 rounded-xl" aria-label="Go to slide 7" style={{ transform: 'translate3d(-18px, -0.18px, -0.081px) scale(0.9)', opacity: 0.8875, width: '3px', height: '45px', cursor: 'pointer', transformStyle: 'preserve-3d', zIndex: 82 }}></button>
                  <button className="absolute transition-all duration-700 ease-out border-none outline-none bg-black rounded-xl" aria-label="Go to slide 8" style={{ transform: 'translate3d(0px, 0px, 0px) scale(1)', opacity: 1, width: '4px', height: '58px', cursor: 'pointer', transformStyle: 'preserve-3d', zIndex: 100 }}></button>
                  <button className="absolute transition-all duration-700 ease-out border-none outline-none bg-gray-400 hover:bg-gray-700 rounded-xl" aria-label="Go to slide 9" style={{ transform: 'translate3d(18px, -0.18px, -0.081px) scale(0.9)', opacity: 0.8875, width: '3px', height: '45px', cursor: 'pointer', transformStyle: 'preserve-3d', zIndex: 82 }}></button>
                  <button className="absolute transition-all duration-700 ease-out border-none outline-none bg-gray-400 hover:bg-gray-700 rounded-xl" aria-label="Go to slide 10" style={{ transform: 'translate3d(36px, -0.36px, -0.324px) scale(0.8)', opacity: 0.775, width: '3px', height: '45px', cursor: 'pointer', transformStyle: 'preserve-3d', zIndex: 64 }}></button>
                  <button className="absolute transition-all duration-700 ease-out border-none outline-none bg-gray-400 hover:bg-gray-700 rounded-xl" aria-label="Go to slide 11" style={{ transform: 'translate3d(54px, -0.54px, -0.729px) scale(0.7)', opacity: 0.6625, width: '3px', height: '45px', cursor: 'pointer', transformStyle: 'preserve-3d', zIndex: 46 }}></button>
                  <button className="absolute transition-all duration-700 ease-out border-none outline-none bg-gray-400 hover:bg-gray-700 rounded-xl" aria-label="Go to slide 12" style={{ transform: 'translate3d(72px, -0.72px, -1.296px) scale(0.6)', opacity: 0.55, width: '3px', height: '45px', cursor: 'pointer', transformStyle: 'preserve-3d', zIndex: 28 }}></button>
                  <button className="absolute transition-all duration-700 ease-out border-none outline-none bg-gray-400 hover:bg-gray-700 rounded-xl" aria-label="Go to slide 13" style={{ transform: 'translate3d(90px, -0.9px, -2.025px) scale(0.5)', opacity: 0.4375, width: '3px', height: '45px', cursor: 'pointer', transformStyle: 'preserve-3d', zIndex: 10 }}></button>
                  <button className="absolute transition-all duration-700 ease-out border-none outline-none bg-gray-400 hover:bg-gray-700 rounded-xl" aria-label="Go to slide 14" style={{ transform: 'translate3d(108px, -1.08px, -2.916px) scale(0.4)', opacity: 0.325, width: '3px', height: '45px', cursor: 'pointer', transformStyle: 'preserve-3d', zIndex: -8 }}></button>
                  <button className="absolute transition-all duration-700 ease-out border-none outline-none bg-gray-400 hover:bg-gray-700 rounded-xl" aria-label="Go to slide 15" style={{ transform: 'translate3d(126px, -1.26px, -3.969px) scale(0.3)', opacity: 0.2125, width: '3px', height: '45px', cursor: 'pointer', transformStyle: 'preserve-3d', zIndex: -26 }}></button>
                  <button className="absolute transition-all duration-700 ease-out border-none outline-none bg-gray-400 hover:bg-gray-700 rounded-xl" aria-label="Go to slide 16" style={{ transform: 'translate3d(144px, -1.44px, -5.184px) scale(0.3)', opacity: 0.15, width: '3px', height: '45px', cursor: 'pointer', transformStyle: 'preserve-3d', zIndex: -44 }}></button>
                  <button className="absolute transition-all duration-700 ease-out border-none outline-none bg-gray-400 hover:bg-gray-700 rounded-xl" aria-label="Go to slide 17" style={{ transform: 'translate3d(162px, -1.62px, -6.561px) scale(0.3)', opacity: 0.15, width: '3px', height: '45px', cursor: 'pointer', transformStyle: 'preserve-3d', zIndex: -62 }}></button>
                  <button className="absolute transition-all duration-700 ease-out border-none outline-none bg-gray-400 hover:bg-gray-700 rounded-xl" aria-label="Go to slide 18" style={{ transform: 'translate3d(180px, -1.8px, -8.1px) scale(0.3)', opacity: 0.15, width: '3px', height: '45px', cursor: 'pointer', transformStyle: 'preserve-3d', zIndex: -80 }}></button>
                  <button className="absolute transition-all duration-700 ease-out border-none outline-none bg-gray-400 hover:bg-gray-700 rounded-xl" aria-label="Go to slide 1" style={{ transform: 'translate3d(198px, -1.98px, -9.801px) scale(0.3)', opacity: 0.15, width: '3px', height: '45px', cursor: 'pointer', transformStyle: 'preserve-3d', zIndex: -98 }}></button>
                  <button className="absolute transition-all duration-700 ease-out border-none outline-none bg-gray-400 hover:bg-gray-700 rounded-xl" aria-label="Go to slide 2" style={{ transform: 'translate3d(216px, -2.16px, -11.664px) scale(0.3)', opacity: 0.15, width: '3px', height: '45px', cursor: 'pointer', transformStyle: 'preserve-3d', zIndex: -116 }}></button>
                  <button className="absolute transition-all duration-700 ease-out border-none outline-none bg-gray-400 hover:bg-gray-700 rounded-xl" aria-label="Go to slide 3" style={{ transform: 'translate3d(234px, -2.34px, -13.689px) scale(0.3)', opacity: 0.15, width: '3px', height: '45px', cursor: 'pointer', transformStyle: 'preserve-3d', zIndex: -134 }}></button>
                  <button className="absolute transition-all duration-700 ease-out border-none outline-none bg-gray-400 hover:bg-gray-700 rounded-xl" aria-label="Go to slide 4" style={{ transform: 'translate3d(252px, -2.52px, -15.876px) scale(0.3)', opacity: 0.15, width: '3px', height: '45px', cursor: 'pointer', transformStyle: 'preserve-3d', zIndex: -152 }}></button>
                  <button className="absolute transition-all duration-700 ease-out border-none outline-none bg-gray-400 hover:bg-gray-700 rounded-xl" aria-label="Go to slide 5" style={{ transform: 'translate3d(270px, -2.7px, -18.225px) scale(0.3)', opacity: 0.15, width: '3px', height: '45px', cursor: 'pointer', transformStyle: 'preserve-3d', zIndex: -170 }}></button>
                  <button className="absolute transition-all duration-700 ease-out border-none outline-none bg-gray-400 hover:bg-gray-700 rounded-xl" aria-label="Go to slide 6" style={{ transform: 'translate3d(288px, -2.88px, -20.736px) scale(0.3)', opacity: 0.15, width: '3px', height: '45px', cursor: 'pointer', transformStyle: 'preserve-3d', zIndex: -188 }}></button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IndustryFootprint;