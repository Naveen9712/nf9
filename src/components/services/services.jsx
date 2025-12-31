import "./services.css";

const services = [
  {
    title: "UI/UX Design",
    image:
      "https://framerusercontent.com/images/XZ6mh9GNTG6AuAVejsGZeSIxzUQ.jpeg",
    gif: "https://media.giphy.com/media/3o7aD2saalBwwftBIY/giphy.gif",
  },
  {
    title: "Website Design & Development",
    image:
      "https://res.cloudinary.com/dzwm5v9gy/image/upload/v1761918540/main-sample.png",
    gif: "https://media.giphy.com/media/l0HlNaQ6gWfllcjDO/giphy.gif",
  },
  {
    title: "eCommerce & SaaS Development",
    image:
      "https://res.cloudinary.com/dzwm5v9gy/image/upload/v1761918539/cld-sample-4.jpg",
    gif: "https://media.giphy.com/media/26ufdipQqU2lhNA4g/giphy.gif",
  },
  {
    title: "Application Development",
    image:
      "https://res.cloudinary.com/dzwm5v9gy/image/upload/v1761918540/main-sample.png",
    gif: "https://media.giphy.com/media/xT9IgzoKnwFNmISR8I/giphy.gif",
  },
  {
    title: "Cloud, DevOps & Server Management",
    image:
      "https://res.cloudinary.com/dzwm5v9gy/image/upload/v1761918539/cld-sample-4.jpg",
    gif: "https://media.giphy.com/media/l41lFw057lAJQMwg0/giphy.gif",
  },
  {
    title: "Branding, SEO & Digital Marketing",
    image:
      "https://res.cloudinary.com/dzwm5v9gy/image/upload/v1761918540/main-sample.png",
    gif: "https://media.giphy.com/media/26ufdipQqU2lhNA4g/giphy.gif",
  },
];

export default function Services() {
  return (
    <section className="services">
      {/* Header */}
      <div className="services-header">
        <h2>Services</h2>
      </div>

      {/* Grid */}
      <div className="services-grid">
        {services.map((item, index) => (
          <div className="service-card" key={index}>
            <div className="service-media">
              <img src={item.image} alt={item.title} className="media static" />
              <img src={item.gif} alt="" className="media gif" />
            </div>

            <div className="service-info">
              <h3>{item.title}</h3>
            </div>
          </div>
        ))}
      </div>

      {/* GLOBAL CTA */}
      <div className="services-cta-wrap">
        <a href="/contact" className="framer-cta">
          <span className="cta-label">GET STARTED TODAY</span>
          <span className="cta-line"></span>
          <span className="cta-arrow">
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <path d="M4 12l1.41 1.41L11 7.83V20h2V7.83l5.58 5.59L20 12l-8-8-8 8z" />
            </svg>
          </span>
        </a>
      </div>
    </section>
  );
}
