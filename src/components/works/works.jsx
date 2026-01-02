import React, { useState } from "react";
import "./works.css";

const projects = [
  { name: "Highflyers", year: "2025" },
  { name: "Verkos", year: "2025" },
  { name: "ZScore", year: "2025" },
  { name: "Diamante", year: "2025" },
  { name: "Jet Games", year: "2025" },
  { name: "iMeshh", year: "2025" },
];

const PREVIEW_IMAGE =
  "https://framerusercontent.com/images/36wvwfIbrnOBnFSzVzIZ4BEv9ms.jpeg";

const Works = () => {
  const [active, setActive] = useState(false);
  const [pos, setPos] = useState({ x: 0, y: 0 });

  const handleMove = (e) => {
    setPos({
      x: e.clientX,
      y: e.clientY,
    });
  };

  return (
    <section className="nf9-works-section" id="works">

      {/* ===== CENTER TITLE ===== */}
      <h1 className="nf9-works-title">Our Works</h1>

      {/* ===== PROJECT LIST ===== */}
      <div className="nf9-works-list">
        {projects.map((project, index) => (
          <div
            key={index}
            className="nf9-work-row"
            onMouseEnter={() => setActive(true)}
            onMouseLeave={() => setActive(false)}
            onMouseMove={handleMove}
          >
            <span className="nf9-work-name">{project.name}</span>
            <span className="nf9-work-meta">Design, Framer, 3D</span>
            <span className="nf9-work-year">{project.year}</span>
          </div>
        ))}
      </div>

      {/* ===== FLOATING PREVIEW ===== */}
      <div
        className={`nf9-work-preview ${active ? "visible" : ""}`}
        style={{
          transform: `translate3d(${pos.x}px, ${pos.y}px, 0)`,
        }}
      >
        <img src={PREVIEW_IMAGE} alt="Project Preview" />
      </div>
    </section>
  );
};

export default Works;
