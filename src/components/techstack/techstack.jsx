import "./techstack.css";

const ICONS = [
  "https://via.placeholder.com/48",
  "https://via.placeholder.com/48",
  "https://via.placeholder.com/48",
  "https://via.placeholder.com/48",
  "https://via.placeholder.com/48",
  "https://via.placeholder.com/48",
  "https://via.placeholder.com/48",
  "https://via.placeholder.com/48",
];

const duplicatedIcons = [...ICONS, ...ICONS, ...ICONS, ...ICONS, ...ICONS];

export default function OurTech() {
  return (
    <section className="ourtech">
      {/* Badge */}
      <div className="ourtech-badge">
        <span>OUR TECH STACK</span>
      </div>

      {/* Title */}
      <h2 className="ourtech-title">
        Built on Modern, <br/> Trusted Technologies
      </h2>

      {/* Visual Area */}
      <div className="ourtech-visual">
        {/* Globe */}
        <div className="ourtech-globe">
          <div
            className="framer-bg-wrapper"
            data-framer-background-image-wrapper="true"
          >
            <img
              src="https://framerusercontent.com/images/jLPVBIsLpIQ3tZJZiCCEC1Jz7Ow.png"
              alt="Gradient Globe"
            />
          </div>
        </div>

        {/* TOP MARQUEE */}
        <div className="marquee marquee-left">
          <div className="marquee-mask">
            <div className="marquee-track">
              {duplicatedIcons.map((icon, i) => (
                <div className="icon-glass" key={`top-${i}`}>
                  <img src={icon} alt="" />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* BOTTOM MARQUEE */}
        <div className="marquee marquee-right">
          <div className="marquee-mask">
            <div className="marquee-track">
              {duplicatedIcons.map((icon, i) => (
                <div className="icon-glass" key={`bottom-${i}`}>
                  <img src={icon} alt="" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
