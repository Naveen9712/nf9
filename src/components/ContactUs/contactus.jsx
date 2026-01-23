import { useEffect, useRef, useState } from "react";
import "./contactus.css";

export default function ContactUs() {
  const sectionRef = useRef(null);
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    countryCode: "+1",
    phone: "",
    message: ""
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Common country codes
  const countryCodes = [
    { code: "+1", country: "US/CA" },
    { code: "+44", country: "UK" },
    { code: "+91", country: "IN" },
    { code: "+61", country: "AU" },
    { code: "+49", country: "DE" },
    { code: "+33", country: "FR" },
    { code: "+81", country: "JP" },
    { code: "+86", country: "CN" },
    { code: "+7", country: "RU" },
    { code: "+55", country: "BR" },
    { code: "+34", country: "ES" },
    { code: "+39", country: "IT" },
    { code: "+82", country: "KR" },
    { code: "+971", country: "AE" },
    { code: "+65", country: "SG" },
    { code: "+60", country: "MY" },
    { code: "+27", country: "ZA" },
    { code: "+52", country: "MX" },
    { code: "+31", country: "NL" },
    { code: "+46", country: "SE" }
  ];

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add("is-visible");
          observer.disconnect();
        }
      },
      { threshold: 0.25 }
    );

    observer.observe(el);
  }, []);

  // Validation functions
  const validateName = (name) => {
    if (!name.trim()) {
      return "Name is required";
    }
    if (name.trim().length < 2) {
      return "Name must be at least 2 characters";
    }
    if (!/^[a-zA-Z\s'-]+$/.test(name.trim())) {
      return "Name can only contain letters, spaces, hyphens, and apostrophes";
    }
    return "";
  };

  const validateEmail = (email) => {
    if (!email.trim()) {
      return "Email is required";
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email.trim())) {
      return "Please enter a valid email address";
    }
    return "";
  };

  const validatePhone = (phone) => {
    if (!phone.trim()) {
      return "Phone number is required";
    }
    // Remove spaces, dashes, and parentheses for validation
    const cleanPhone = phone.replace(/[\s\-\(\)]/g, "");
    if (!/^\d+$/.test(cleanPhone)) {
      return "Phone number can only contain digits";
    }
    if (cleanPhone.length < 7 || cleanPhone.length > 15) {
      return "Phone number must be between 7 and 15 digits";
    }
    return "";
  };

  const validateMessage = (message) => {
    if (!message.trim()) {
      return "Message is required";
    }
    if (message.trim().length < 10) {
      return "Message must be at least 10 characters";
    }
    if (message.trim().length > 1000) {
      return "Message must not exceed 1000 characters";
    }
    return "";
  };

  const validateForm = () => {
    const newErrors = {
      name: validateName(formData.name),
      email: validateEmail(formData.email),
      phone: validatePhone(formData.phone),
      message: validateMessage(formData.message)
    };
    setErrors(newErrors);
    return !Object.values(newErrors).some(error => error !== "");
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ""
      }));
    }
  };

  const handleCountryCodeChange = (e) => {
    setFormData(prev => ({
      ...prev,
      countryCode: e.target.value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);
    
    const submitData = {
      name: formData.name.trim(),
      email: formData.email.trim(),
      phone: `${formData.countryCode}${formData.phone.replace(/[\s\-\(\)]/g, "")}`,
      message: formData.message.trim()
    };
  
    try {
      const apiUrl = import.meta.env.VITE_API_CONTACT_URL;
      if (!apiUrl) {
        throw new Error('API endpoint is not configured');
      }

      const response = await fetch(apiUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(submitData)
      });
  
      const data = await response.json();
  
      if (data.success) {
        setSubmitted(true);
        // Reset form
        setFormData({
          name: "",
          email: "",
          countryCode: "+1",
          phone: "",
          message: ""
        });
        setErrors({});
      } else {
        alert('Submission failed. Please try again.');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('An error occurred. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="contact-main" ref={sectionRef}>
      {/* ROW 1 */}
      <div className="contact-title-row framer-reveal delay-1">
        <h1>Get in touch.</h1>
      </div>

      {/* ROW 2 */}
      <div className="contact-content-row">
        {/* LEFT */}
        <div className="contact-left framer-reveal delay-2">
          <p>
            <strong>Have a project in mind?</strong> Reach out to us, and we’ll
            discuss the best way to move forward.
          </p>
        </div>

        {/* RIGHT */}
        <div className="contact-right framer-reveal delay-3">
          {!submitted ? (
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="field framer-reveal delay-4">
                <input 
                  type="text" 
                  name="name"
                  placeholder="Your name *" 
                  value={formData.name}
                  onChange={handleChange}
                  className={errors.name ? "error" : ""}
                />
                <span className="line"></span>
                {errors.name && <span className="error-message">{errors.name}</span>}
              </div>

              <div className="field framer-reveal delay-5">
                <input 
                  type="email" 
                  name="email"
                  placeholder="Email *" 
                  value={formData.email}
                  onChange={handleChange}
                  className={errors.email ? "error" : ""}
                />
                <span className="line"></span>
                {errors.email && <span className="error-message">{errors.email}</span>}
              </div>

              {/* PHONE FIELD WITH COUNTRY CODE */}
              <div className="field framer-reveal delay-6">
                <div className="phone-input-wrapper">
                  <select 
                    className="country-code-select"
                    value={formData.countryCode}
                    onChange={handleCountryCodeChange}
                  >
                    {countryCodes.map((item) => (
                      <option key={item.code} value={item.code}>
                        {item.code} ({item.country})
                      </option>
                    ))}
                  </select>
                  <input
                    type="tel"
                    name="phone"
                    placeholder="Phone number *"
                    value={formData.phone}
                    onChange={handleChange}
                    className={errors.phone ? "error phone-input" : "phone-input"}
                  />
                </div>
                <span className="line"></span>
                {errors.phone && <span className="error-message">{errors.phone}</span>}
              </div>

              <div className="field framer-reveal delay-7">
                <textarea
                  name="message"
                  placeholder="Your message *"
                  value={formData.message}
                  onChange={handleChange}
                  className={errors.message ? "error" : ""}
                ></textarea>
                <span className="line"></span>
                {errors.message && <span className="error-message">{errors.message}</span>}
              </div>

              <button
                className="submit-btn framer-reveal delay-8"
                type="submit"
                disabled={isSubmitting}
              >
                <span className="btn-text top">{isSubmitting ? "Submitting..." : "Submit"}</span>
                <span className="btn-text bottom">{isSubmitting ? "Submitting..." : "Submit"}</span>
                <span className="btn-dot"></span>
              </button>

              <p className="terms framer-reveal delay-9">
                By submitting, you agree to our{" "}
                <a href="#">Terms</a> and <a href="#">Privacy Policy</a>.
              </p>
            </form>
          ) : (
            /* SUCCESS MESSAGE */
            <div className="success-message framer-reveal delay-4">
              <h3>Thank you for reaching out ✨</h3>
              <p>
                We’ve received your message.  
                Our team will contact you shortly.
                <br />
                Welcome to <strong>NF9</strong> — where ideas turn into
                beautiful digital experiences.
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
