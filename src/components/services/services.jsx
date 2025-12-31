import "./services.css";
import { useRef } from "react";

const services = [
  {
    title: "UI/UX Design",
    image: "https://res.cloudinary.com/dzwm5v9gy/image/upload/v1765214774/1duOVcilpl3cJsg3KzVgMJtYicM_vc81tz.avif",
    gif: "https://media.giphy.com/media/3o7aD2saalBwwftBIY/giphy.gif",
  },
  {
    title: "Website Design & Development",
    image: "https://res.cloudinary.com/dzwm5v9gy/image/upload/v1761918540/main-sample.png",
    gif: "https://media.giphy.com/media/l0HlNaQ6gWfllcjDO/giphy.gif",
  },
  {
    title: "eCommerce & SaaS Development",
    image: "https://res.cloudinary.com/dzwm5v9gy/image/upload/v1761918539/cld-sample-4.jpg",
    gif: "https://media.giphy.com/media/26ufdipQqU2lhNA4g/giphy.gif",
  },
  {
    title: "Application Development",
    image: "https://res.cloudinary.com/dzwm5v9gy/image/upload/v1761918540/main-sample.png",
    gif: "https://media.giphy.com/media/xT9IgzoKnwFNmISR8I/giphy.gif",
  },
  {
    title: "Cloud, DevOps & Server Management",
    image: "https://res.cloudinary.com/dzwm5v9gy/image/upload/v1765214774/1duOVcilpl3cJsg3KzVgMJtYicM_vc81tz.avif",
    gif: "https://media.giphy.com/media/3oriO0OEd9QIDdllqo/giphy.gif",
  },
  {
    title: "Branding, SEO & Digital Marketing",
    image: "https://res.cloudinary.com/dzwm5v9gy/image/upload/v1761918539/cld-sample-4.jpg",
    gif: "https://media.giphy.com/media/l41lFw057lAJQMwg0/giphy.gif",
  },
];

export default function Services() {
  const gifRefs = useRef([]);

  const handleMouseMove = (e, index) => {
    const card = e.currentTarget.getBoundingClientRect();
    const gif = gifRefs.current[index];
    if (!gif) return;

    const x = e.clientX - card.left;
    const y = e.clientY - card.top;

    const rotateX = ((y - card.height / 2) / card.height) * -12;
    const rotateY = ((x - card.width / 2) / card.width) * 12;

    gif.style.transform = `
      translate(${x - card.width / 2}px, ${y - card.height / 2}px)
      rotateX(${rotateX}deg)
      rotateY(${rotateY}deg)
      scale(1)
    `;
  };

  return (
    <section className="services">
      <div className="services-header">
        <h2>Our Services</h2>
      </div>

      <div className="services-grid">
        {services.map((item, index) => (
          <div
            className="service-card"
            key={index}
            onMouseMove={(e) => handleMouseMove(e, index)}
          >
            <div className="service-image">
              <img src={item.image} alt={item.title} className="static-img" />
            </div>

            <img
              ref={(el) => (gifRefs.current[index] = el)}
              src={item.gif}
              alt=""
              className="hover-gif"
            />

            <span className="view-badge">VIEW</span>

            <div className="service-info">
              <h3>{item.title}</h3>
            </div>
          </div>
        ))}
      </div>

      <div className="services-button">
        <button className="services-btn">See what we do</button>
      </div>
    </section>
  );
}

