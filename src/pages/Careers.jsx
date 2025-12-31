import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/header/header';
import Footer from '../components/footer/footer';
import './Careers.css';

const Careers = () => {
  const openPositions = [
    {
      id: 1,
      title: 'Senior Frontend Developer',
      department: 'Engineering',
      type: 'Full-time',
      location: 'Remote',
      description: 'We are looking for an experienced Frontend Developer to join our team and help build amazing user experiences.'
    },
    {
      id: 2,
      title: 'UI/UX Designer',
      department: 'Design',
      type: 'Full-time',
      location: 'Remote / Hybrid',
      description: 'Join our design team to create beautiful and intuitive interfaces that users love.'
    },
    {
      id: 3,
      title: 'Full Stack Developer',
      department: 'Engineering',
      type: 'Full-time',
      location: 'Remote',
      description: 'Looking for a versatile developer who can work across the entire stack and deliver end-to-end solutions.'
    },
    {
      id: 4,
      title: 'DevOps Engineer',
      department: 'Engineering',
      type: 'Full-time',
      location: 'Remote',
      description: 'Help us build and maintain scalable infrastructure and deployment pipelines.'
    },
    {
      id: 5,
      title: 'Product Manager',
      department: 'Product',
      type: 'Full-time',
      location: 'Remote / Hybrid',
      description: 'Lead product strategy and work with cross-functional teams to deliver exceptional products.'
    },
    {
      id: 6,
      title: 'Marketing Specialist',
      department: 'Marketing',
      type: 'Full-time',
      location: 'Remote',
      description: 'Drive our marketing efforts and help grow our brand presence in the digital space.'
    }
  ];

  const benefits = [
    { icon: '💰', title: 'Competitive Salary', description: 'We offer competitive compensation packages' },
    { icon: '🏠', title: 'Remote Work', description: 'Work from anywhere in the world' },
    { icon: '📚', title: 'Learning Budget', description: 'Annual budget for courses and conferences' },
    { icon: '🏥', title: 'Health Insurance', description: 'Comprehensive health coverage' },
    { icon: '⏰', title: 'Flexible Hours', description: 'Work when you\'re most productive' },
    { icon: '🎉', title: 'Team Events', description: 'Regular team building and social events' }
  ];

  return (
    <>
      <Header />
      <main className="careers-page">
        <div className="careers-container">
          <div className="careers-header">
            <h1 className="careers-title">Join Our Team</h1>
            <p className="careers-subtitle">
              We're always looking for talented individuals who are passionate about creating exceptional digital experiences.
            </p>
          </div>

          <div className="careers-benefits">
            <h2 className="section-title">Why Work With Us</h2>
            <div className="benefits-grid">
              {benefits.map((benefit, index) => (
                <div key={index} className="benefit-card">
                  <div className="benefit-icon">{benefit.icon}</div>
                  <h3 className="benefit-title">{benefit.title}</h3>
                  <p className="benefit-description">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="careers-positions">
            <h2 className="section-title">Open Positions</h2>
            <div className="positions-list">
              {openPositions.map((position) => (
                <div key={position.id} className="position-card">
                  <div className="position-header">
                    <div className="position-title-section">
                      <h3 className="position-title">{position.title}</h3>
                      <div className="position-meta">
                        <span className="position-department">{position.department}</span>
                        <span className="position-type">{position.type}</span>
                        <span className="position-location">{position.location}</span>
                      </div>
                    </div>
                  </div>
                  <p className="position-description">{position.description}</p>
                  <Link to="/contact" className="apply-button">
                    Apply Now
                  </Link>
                </div>
              ))}
            </div>
          </div>

          <div className="careers-cta">
            <h2>Don't See a Role That Fits?</h2>
            <p>We're always interested in hearing from talented people. Send us your resume and we'll keep you in mind for future opportunities.</p>
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

export default Careers;

