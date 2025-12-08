import React, { useState } from 'react';
import './faq.css';


const faqItems = [
  {
    question: "How Does NF9 Work?",
    answer:
      "NF9 is a digital studio focused on building smooth, modern, high-performing web experiences. We combine strategy, UX, design, and development to create websites that feel fast, clean, and intuitive on every device.",
  },
  {
    question: "What services does NF9 offer?",
    answer:
      "We work on web design, development, rebranding, UI/UX, landing pages, animations, performance optimisation, and ongoing website care. Each project is tailored to your goals and audience.",
  },
  {
    question: "How long does a typical web project take?",
    answer:
      "Project timelines depend on scope, but most NF9 projects run between 4–8 weeks. We share clear milestones so you always know what’s happening and when.",
  },
  {
    question: "Do you provide ongoing support after launch?",
    answer:
      "Yes. NF9 offers ongoing support, minor updates, performance checks, and design refinements so your site stays sharp and aligned with your brand as it grows.",
  },
  {
    question: "What is your pricing structure?",
    answer:
      "We work with transparent, project-based pricing. After understanding your requirements, we share a clear proposal covering scope, timelines, and investment—no hidden costs.",
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
