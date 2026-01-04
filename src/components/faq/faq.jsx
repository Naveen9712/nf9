import React, { useState } from 'react';
import './faq.css';


const faqItems = [
  {
    question: "How Does NF9 Work?",
    answer:
      "NF9 is a digital studio dedicated to creating smooth, modern, and high- performing web experiences. We blend strategy, user experience, design, and development to build websites that are fast, intuitive, and visually refined across every device. Our approach is thoughtful and collaborative-focused on solving real business problems through smart digital execution."
  },
  {
    question: "What services does NF9 offer?",
    answer:
      "We deliver end-to-end web solutions, including web design and development, rebranding, Ul/UX design, landing pages, animations, performance optimization, and ongoing website care. Every project is carefully tailored to your brand, audience, and goals-ensuring results that are both impactful and sustainable.",
  },
  {
    question: "How long does a typical web project take?",
    answer:
      "Timelines vary based on project scope, but most NF9 projects are completed within 4- 8 weeks. We define clear milestones from the start and maintain transparent communication throughout, so you always know what to expect and when.",
  },
  {
    question: "Do you provide ongoing support after launch?",
    answer:
      "Yes. Launch i s only the beginning. NF9 provides ongoing support, updates, performance monitoring, and design refinements to ensure your website continues to evolve alongside your business.",
  },
  {
    question: "What is your pricing structure?",
    answer:
      "We offer transparent, project-based pricing. Once we understand your requirements, w e provide a clear proposal outlining scope, timelines, and investment -ensuring complete clarity with no hidden costs.",
  },
];

export default function NF9Faq() {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleToggle = (index) => {
    setActiveIndex((prev) => (prev === index ? null : index));
  };

  return (
    <section className="nf9-faq">
      <div className="nf9-faq-inner">
        <h2 className="nf9-faq-title">Frequently Asked Question</h2>

        <div className="nf9-faq-list">
          {faqItems.map((item, index) => {
            const isActive = activeIndex === index;
            return (
              <div className="nf9-faq-item" key={index}>
                <button
                  className="nf9-faq-trigger"
                  onClick={() => handleToggle(index)}
                  aria-expanded={isActive}
                >
                  <span className="nf9-faq-question">{item.question}</span>

                  <span
                    className={`nf9-faq-icon ${isActive ? "nf9-faq-icon--open" : ""}`}
                    aria-hidden="true"
                  />
                </button>

                <div
                  className={`nf9-faq-content ${
                    isActive ? "nf9-faq-content--open" : ""
                  }`}
                >
                  <p>{item.answer}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

