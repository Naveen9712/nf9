import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/header/header';
import Footer from '../components/footer/footer';
import './Services.css';

const Services = () => {
  const services = [
    {
      title: 'UI/UX Design',
      description: 'Creating intuitive and beautiful user interfaces that enhance user experience and drive engagement.',
      icon: '🎨'
    },
    {
      title: 'Website Design & Development',
      description: 'Building responsive, modern websites that are fast, secure, and optimized for all devices.',
      icon: '🌐'
    },
    {
      title: 'eCommerce & SaaS Development',
      description: 'Developing scalable eCommerce platforms and SaaS solutions tailored to your business needs.',
      icon: '🛒'
    },
    {
      title: 'Application Development',
      description: 'Creating custom web and mobile applications that solve real business problems.',
      icon: '📱'
    },
    {
      title: 'Cloud, DevOps & Server Management',
      description: 'Managing your infrastructure with modern cloud solutions and DevOps best practices.',
      icon: '☁️'
    },
    {
      title: 'Branding, SEO & Digital Marketing',
      description: 'Building your brand identity and increasing online visibility through strategic marketing.',
      icon: '🚀'
    }
  ];

  return (
    <>
      <Header />
      <main className="services-page">
        <div className="services-container">
          <div className="services-header">
            <h1 className="services-title">Our Services</h1>
            <p className="services-subtitle">
              We offer a comprehensive range of digital solutions to help your business grow and succeed in the digital world.
            </p>
          </div>

          <div className="services-grid">
            {services.map((service, index) => (
              <div key={index} className="service-card">
                <div className="service-icon">{service.icon}</div>
                <h3 className="service-title">{service.title}</h3>
                <p className="service-description">{service.description}</p>
              </div>
            ))}
          </div>

          <div className="services-cta">
            <h2>Ready to Get Started?</h2>
            <p>Let's discuss how we can help bring your ideas to life.</p>
            <Link to="/contact" className="cta-button">
              Get In Touch
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Services;

