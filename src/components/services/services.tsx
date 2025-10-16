import { useEffect, useRef, useState } from 'react';
import './services.css';

export default function Services() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  // Magnetic hover effect
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent, card: HTMLDivElement) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
      
      const deltaX = (x - centerX) / centerX;
      const deltaY = (y - centerY) / centerY;
      
      const rotateX = deltaY * 10;
      const rotateY = deltaX * 10;
      
      card.style.transform = `
        translateY(-12px) 
        scale(1.02) 
        rotateX(${rotateX}deg) 
        rotateY(${rotateY}deg)
      `;
    };

    const handleMouseLeave = (card: HTMLDivElement) => {
      card.style.transform = '';
    };

    cardsRef.current.forEach((card) => {
      if (card) {
        const mouseMoveHandler = (e: MouseEvent) => handleMouseMove(e, card);
        const mouseLeaveHandler = () => handleMouseLeave(card);
        
        card.addEventListener('mousemove', mouseMoveHandler);
        card.addEventListener('mouseleave', mouseLeaveHandler);
        
        (card as any)._mouseMoveHandler = mouseMoveHandler;
        (card as any)._mouseLeaveHandler = mouseLeaveHandler;
      }
    });

    return () => {
      cardsRef.current.forEach((card) => {
        if (card) {
          const mouseMoveHandler = (card as any)._mouseMoveHandler;
          const mouseLeaveHandler = (card as any)._mouseLeaveHandler;
          if (mouseMoveHandler) {
            card.removeEventListener('mousemove', mouseMoveHandler);
          }
          if (mouseLeaveHandler) {
            card.removeEventListener('mouseleave', mouseLeaveHandler);
          }
        }
      });
    };
  }, [isVisible]);

  return (
    <section id="services" className="services-section" ref={sectionRef}>
      <div className="services-background-grid"></div>
      
      <div className="services-container">
        {/* Section Header */}
        <div className={`services-header ${isVisible ? 'animate-in' : ''}`}>
          <span className="services-label">What We Do</span>
          <h2 className="services-title" data-text="Our Services">Our Services</h2>
          <p className="services-description">
            We deliver end-to-end solutions that transform your vision into reality, 
            combining creativity, engineering excellence, and cutting-edge technology.
          </p>
        </div>

        {/* Services Grid */}
        <div className="services-grid">
          
          {/* Product Design Card */}
          <div 
            className={`service-card ${isVisible ? 'animate-in' : ''}`}
            ref={(el) => { cardsRef.current[0] = el; return; }}
          >
            <div className="service-card-header">
              <div className="service-icon">✨</div>
              <span className="service-category">Creative</span>
            </div>
            
            <div className="service-card-content">
              <h3 className="service-card-title">Product Design</h3>
              <p className="service-card-text">
                UI/UX, user research, branding and go-to-market strategy support
              </p>
            </div>

            <div className="service-visual">
              <div className="design-mockup">
                <div className="mockup-toolbar">
                  <div className="mockup-dot"></div>
                  <div className="mockup-dot"></div>
                  <div className="mockup-dot"></div>
                </div>
                <div className="mockup-layers">
                  <div className="mockup-layer"></div>
                  <div className="mockup-layer"></div>
                  <div className="mockup-layer"></div>
                  <div className="mockup-layer"></div>
                  <div className="mockup-layer"></div>
                  <div className="mockup-layer"></div>
                </div>
                <div className="mockup-cursors">
                  <span className="cursor-icon cursor-1">🖱️</span>
                  <span className="cursor-icon cursor-2">🖱️</span>
                </div>
              </div>
            </div>
          </div>

          {/* Engineering Card */}
          <div 
            className={`service-card ${isVisible ? 'animate-in' : ''}`}
            ref={(el) => { cardsRef.current[1] = el; return; }}
          >
            <div className="service-card-header">
              <div className="service-icon">💻</div>
              <span className="service-category">Engineering</span>
            </div>
            
            <div className="service-card-content">
              <h3 className="service-card-title">Engineering</h3>
              <p className="service-card-text">
                Frontend and backend engineering
              </p>
            </div>

            <div className="service-visual">
              <div className="code-editor">
                <div className="code-header">
                  <div className="code-dots">
                    <div className="code-dot"></div>
                    <div className="code-dot"></div>
                    <div className="code-dot"></div>
                  </div>
                  <div className="code-run-btn">
                    Run ▶
                  </div>
                </div>
                <div className="code-content">
                  <div className="code-line">
                    <span className="code-keyword">&lt;script</span> <span className="code-string">type</span>=<span className="code-string">"module"</span><span className="code-keyword">&gt;</span>
                  </div>
                  <div className="code-line">
                    &nbsp;&nbsp;<span className="code-keyword">import</span> <span className="code-function">message</span> <span className="code-keyword">from</span> <span className="code-string">'./message.js'</span>;
                  </div>
                  <div className="code-line">
                    &nbsp;&nbsp;
                  </div>
                  <div className="code-line">
                    &nbsp;&nbsp;<span className="code-function">document.getElementById</span>(<span className="code-string">"demo"</span>).<span className="code-function">innerHTML</span> = message();
                  </div>
                  <div className="code-line">
                    <span className="code-keyword">&lt;/script&gt;</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Website Design & Development Card */}
          <div 
            className={`service-card ${isVisible ? 'animate-in' : ''}`}
            ref={(el) => { cardsRef.current[2] = el; return; }}
          >
            <div className="service-card-header">
              <div className="service-icon">🌐</div>
              <span className="service-category">Development</span>
            </div>
            
            <div className="service-card-content">
              <h3 className="service-card-title">Website Design & Development</h3>
              <p className="service-card-text">
                Landing pages, marketing sites and SEO
              </p>
            </div>

            <div className="service-visual">
              <div className="website-preview">
                <span className="website-tag">H1 - Heading</span>
                <h4 className="website-title">
                  Crafting your ideas<br />with our expertise
                </h4>
                <p className="website-subtitle">
                  We are a product studio<br />based in Australia
                </p>
                <div className="website-buttons">
                  <button className="website-btn">Get Started</button>
                  <button className="website-btn">See Video</button>
                </div>
                <div className="website-image-placeholder">🖼️</div>
              </div>
            </div>
          </div>

          {/* AI Integration Card */}
          <div 
            className={`service-card ${isVisible ? 'animate-in' : ''}`}
            ref={(el) => { cardsRef.current[3] = el; return; }}
          >
            <div className="service-card-header">
              <div className="service-icon">🤖</div>
              <span className="service-category">Innovation</span>
            </div>
            
            <div className="service-card-content">
              <h3 className="service-card-title">AI Integration</h3>
              <p className="service-card-text">
                Integrate, build and scale AI-powered applications
              </p>
            </div>

            <div className="service-visual">
              <div className="ai-interface">
                <div className="ai-message user">
                  <span className="ai-avatar">👤</span>
                  <span>Give me summary sales on november</span>
                </div>
                <div className="ai-message assistant">
                  <span className="ai-avatar">🤖</span>
                  <span>AI: Collecting resources...</span>
                </div>
                <div className="ai-input-area">
                  <span className="ai-input-placeholder">Type your prompt here...</span>
                  <div className="ai-send-icon">📤</div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}