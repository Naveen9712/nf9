import React, { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import "./servicelist.css";

export default function ServiceList() {
  const sectionRef = useRef(null);

  // GSAP animation for stacking
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const cards = gsap.utils.toArray('.service-card');
    gsap.set(cards, { y: (i) => i * 120 });
    cards.forEach((card, index) => {
      gsap.to(card, {
        scrollTrigger: {
          trigger: card,
          start: 'top bottom',
          end: 'bottom top',
          scrub: true,
        },
        y: index * -120,
        ease: 'none',
      });
    });
  }, []);

  const services = [
    {
      type: 'Design',
      title: 'UI/UX Design',
      subtitle: 'Creating intuitive user experiences',
      buttonText: 'See Service',
      image: 'https://framerusercontent.com/images/Y8MeHdMKTiSusPqtqXmSASWXdao.png',
      bgColor: 'rgb(209, 204, 194)'
    },
    {
      type: 'Development',
      title: 'Web Development',
      subtitle: 'Building robust web applications',
      buttonText: 'See Service',
      image: 'https://framerusercontent.com/images/uK2BpwnizijFTL9zd5gnyiD2i0U.png',
      bgColor: 'rgb(170, 184, 255)'
    },
    {
      type: 'Branding',
      title: 'Brand Identity',
      subtitle: 'Crafting memorable brand experiences',
      buttonText: 'See Service',
      image: 'https://framerusercontent.com/images/VWDHOJSYYvl63LgiebRdGSjCPo.jpg',
      bgColor: 'rgb(255, 183, 250)'
    },
    {
      type: 'Consulting',
      title: 'Digital Strategy',
      subtitle: 'Guiding your digital transformation',
      buttonText: 'See Service',
      image: 'https://framerusercontent.com/images/rzoORZnzNHiRX63g8X4x3iR2PnE.png',
      bgColor: 'rgb(252, 231, 214)'
    },
    {
      type: 'Marketing',
      title: 'Digital Marketing',
      subtitle: 'Driving growth through digital channels',
      buttonText: 'See Service',
      image: 'https://framerusercontent.com/images/tz6V9QTcfKzmq8T9cdb90XyJNZo.png',
      bgColor: 'rgb(212, 237, 200)'
    }
  ];

  return (
    <section className="services-section" ref={sectionRef}>
      <div className="services-bg-text">SERVICES</div>
      <div className="services-stack">
        {services.map((service, index) => (
          <div key={index} className="service-card" style={{ backgroundColor: service.bgColor, boxShadow: '0px 1px 20px 0px rgba(19, 16, 20, 0.5)' }}>
            <div className="service-content">
              <div className="service-left">
                <div className="service-top">
                  <div className="badge">{service.type}</div>
                </div>
                <div className="service-content-text">
                  <h3 className="service-title">{service.title}</h3>
                  <h3 className="service-subtitle">{service.subtitle}</h3>
                </div>
                <div className="service-bottom">
                  <button className="service-button">
                    {service.buttonText}
                    <div className="arrow"></div>
                  </button>
                </div>
              </div>
              <div className="service-right">
                <img src={service.image} alt={service.title} />
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
