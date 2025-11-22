import React, { useState } from 'react';
import './faq.css';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(0); // First question open by default

  const faqData = [
    {
      question: "How Does TIC Global Services Work?",
      answer: "TIC Global Services, an expert in web development in Chennai, offers complete solutions for establishing and improving your online presence. We specialize in web branding, brand identity, and digital marketing, uses a strategic approach to understand your company's goals and target audience. From designing user-friendly websites to creating a strong digital footprint through dedicated marketing campaigns, TIC ensures your brand stands out in the competitive online world. TIC Global Services provides solutions that drive business growth and success by combining creativity, cutting-edge technology, and innovative strategies."
    },
    {
      question: "What Services do TIC Global services Offer?",
      answer: "TIC Global Services offers a comprehensive range of digital solutions including web development, web branding, brand identity design, and digital marketing services. We help businesses establish and enhance their online presence through strategic planning, creative design, and innovative technology solutions tailored to meet specific business goals and target audience needs."
    },
    {
      question: "How long does it take to complete a web development project?",
      answer: "The timeline for web development projects varies depending on the complexity and scope of the project. Typically, a standard website can take anywhere from 4-8 weeks, while more complex projects may require 8-12 weeks or longer. We work closely with clients to establish realistic timelines and ensure timely delivery without compromising quality."
    },
    {
      question: "Do you provide ongoing support after project completion?",
      answer: "Yes, TIC Global Services offers comprehensive ongoing support and maintenance services after project completion. This includes regular updates, security patches, performance monitoring, and technical support to ensure your website continues to function optimally and remains up-to-date with the latest technologies and best practices."
    },
    {
      question: "What is your pricing structure for digital marketing services?",
      answer: "Our digital marketing pricing is customized based on your specific needs, goals, and budget. We offer flexible packages that can include SEO, social media marketing, content marketing, PPC advertising, and more. Contact us for a detailed consultation and personalized quote tailored to your business requirements."
    }
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="faq-section">
      <div className="faq-container">
        <h2 className="faq-title">Frequently Asked Question</h2>
        <div className="faq-list">
          {faqData.map((faq, index) => (
            <div key={index} className="faq-item">
              <button
                className={`faq-question ${openIndex === index ? 'active' : ''}`}
                onClick={() => toggleFAQ(index)}
                aria-expanded={openIndex === index}
              >
                <span className="faq-question-text">{faq.question}</span>
                <span className="faq-icon">
                  {openIndex === index ? (
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M18 6L6 18M6 6L18 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  ) : (
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12 5V19M5 12H19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  )}
                </span>
              </button>
              <div className={`faq-answer ${openIndex === index ? 'open' : ''}`}>
                <p className="faq-answer-text">{faq.answer}</p>
              </div>
              {index < faqData.length - 1 && <div className="faq-divider"></div>}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;

