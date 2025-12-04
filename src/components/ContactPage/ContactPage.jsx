import React, { useState } from 'react';
import './ContactPage.css';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    service: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  return (
    <div className="contact-page">
      {/* Attractive Hero Banner */}
      <section className="contact-hero-section">
        <div className="hero-content-wrapper">
          <div className="hero-left-content">
            <div className="hero-tag">
              <span className="tag-dot"></span>
              Get In Touch
            </div>
            <h1 className="hero-main-title">
              Let's Build Your Next <span className="text-gradient">Big Project</span> Together
            </h1>
            <p className="hero-desc">
              Ready to take your business to the next level? Our team of IT experts is here to help you succeed. 
              Fill out the form and let's start the conversation.
            </p>
            <div className="hero-quick-stats">
              <div className="quick-stat">
                <div className="stat-icon">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path d="M12 8V12L15 15M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <div className="stat-info">
                  <div className="stat-value">2-4 Hours</div>
                  <div className="stat-name">Response Time</div>
                </div>
              </div>
              <div className="quick-stat">
                <div className="stat-icon">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path d="M17 21V19C17 17.9391 16.5786 16.9217 15.8284 16.1716C15.0783 15.4214 14.0609 15 13 15H5C3.93913 15 2.92172 15.4214 2.17157 16.1716C1.42143 16.9217 1 17.9391 1 19V21M23 21V19C22.9993 18.1137 22.7044 17.2528 22.1614 16.5523C21.6184 15.8519 20.8581 15.3516 20 15.13M16 3.13C16.8604 3.3503 17.623 3.8507 18.1676 4.55231C18.7122 5.25392 19.0078 6.11683 19.0078 7.005C19.0078 7.89317 18.7122 8.75608 18.1676 9.45769C17.623 10.1593 16.8604 10.6597 16 10.88M13 7C13 9.20914 11.2091 11 9 11C6.79086 11 5 9.20914 5 7C5 4.79086 6.79086 3 9 3C11.2091 3 13 4.79086 13 7Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <div className="stat-info">
                  <div className="stat-value">500+</div>
                  <div className="stat-name">Happy Clients</div>
                </div>
              </div>
              <div className="quick-stat">
                <div className="stat-icon">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path d="M9 12L11 14L15 10M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <div className="stat-info">
                  <div className="stat-value">24/7</div>
                  <div className="stat-name">Support</div>
                </div>
              </div>
            </div>
          </div>
          <div className="hero-right-visual">
            <div className="visual-card card-1">
              <div className="card-icon-wrapper">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none">
                  <path d="M3 8L10.89 13.26C11.53 13.67 12.47 13.67 13.11 13.26L21 8M5 19H19C20.1 19 21 18.1 21 17V7C21 5.9 20.1 5 19 5H5C3.9 5 3 5.9 3 7V17C3 18.1 3.9 19 5 19Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <div className="card-text">Email Support</div>
            </div>
            <div className="visual-card card-2">
              <div className="card-icon-wrapper">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none">
                  <path d="M3 5C3 3.89543 3.89543 3 5 3H8.27924C8.70967 3 9.09181 3.27543 9.22792 3.68377L10.7257 8.17721C10.8831 8.64932 10.6694 9.16531 10.2243 9.38787L7.96701 10.5165C9.06925 12.9612 11.0388 14.9308 13.4835 16.033L14.6121 13.7757C14.8347 13.3306 15.3507 13.1169 15.8228 13.2743L20.3162 14.7721C20.7246 14.9082 21 15.2903 21 15.7208V19C21 20.1046 20.1046 21 19 21H18C9.71573 21 3 14.2843 3 6V5Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <div className="card-text">Call Anytime</div>
            </div>
            <div className="visual-card card-3">
              <div className="card-icon-wrapper">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none">
                  <path d="M21 10C21 17 12 23 12 23C12 23 3 17 3 10C3 7.61305 3.94821 5.32387 5.63604 3.63604C7.32387 1.94821 9.61305 1 12 1C14.3869 1 16.6761 1.94821 18.364 3.63604C20.0518 5.32387 21 7.61305 21 10Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M12 13C13.6569 13 15 11.6569 15 10C15 8.34315 13.6569 7 12 7C10.3431 7 9 8.34315 9 10C9 11.6569 10.3431 13 12 13Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <div className="card-text">Visit Office</div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Cards */}
      <section className="contact-cards-section">
        <div className="contact-cards-container">
          <div className="contact-method-card">
            <div className="method-icon email-icon">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
                <path d="M3 8L10.89 13.26C11.53 13.67 12.47 13.67 13.11 13.26L21 8M5 19H19C20.1 19 21 18.1 21 17V7C21 5.9 20.1 5 19 5H5C3.9 5 3 5.9 3 7V17C3 18.1 3.9 19 5 19Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <h3>Email Us</h3>
            <p>Our team is here to help</p>
            <a href="mailto:sales@artiflexit.com">sales@artiflexit.com</a>
          </div>

          <div className="contact-method-card">
            <div className="method-icon phone-icon">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
                <path d="M3 5C3 3.89543 3.89543 3 5 3H8.27924C8.70967 3 9.09181 3.27543 9.22792 3.68377L10.7257 8.17721C10.8831 8.64932 10.6694 9.16531 10.2243 9.38787L7.96701 10.5165C9.06925 12.9612 11.0388 14.9308 13.4835 16.033L14.6121 13.7757C14.8347 13.3306 15.3507 13.1169 15.8228 13.2743L20.3162 14.7721C20.7246 14.9082 21 15.2903 21 15.7208V19C21 20.1046 20.1046 21 19 21H18C9.71573 21 3 14.2843 3 6V5Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <h3>Call Us</h3>
            <p>Mon-Fri from 9am to 6pm</p>
            <a href="tel:+971558086462">+971 55 808 6462</a>
          </div>

          <div className="contact-method-card">
            <div className="method-icon location-icon">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
                <path d="M21 10C21 17 12 23 12 23C12 23 3 17 3 10C3 7.61305 3.94821 5.32387 5.63604 3.63604C7.32387 1.94821 9.61305 1 12 1C14.3869 1 16.6761 1.94821 18.364 3.63604C20.0518 5.32387 21 7.61305 21 10Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M12 13C13.6569 13 15 11.6569 15 10C15 8.34315 13.6569 7 12 7C10.3431 7 9 8.34315 9 10C9 11.6569 10.3431 13 12 13Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <h3>Visit Us</h3>
            <p>Come say hello</p>
            <a href="#">Office No. 1-264, Al Quoz, Dubai, UAE</a>
          </div>

          <div className="contact-method-card">
            <div className="method-icon clock-icon">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
                ircle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2"/>
                <path d="M12 6V12L16 14" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
              </svg>
            </div>
            <h3>Working Hours</h3>
            <p>We're available</p>
            <a href="#">Mon-Fri: 9AM - 6PM</a>
          </div>
        </div>
      </section>

      {/* Beautiful Form Section */}
      <section className="form-main-section">
        <div className="form-section-wrapper">
          <div className="form-section-header">
            <div className="section-tag">Send Us A Message</div>
            <h2 className="section-heading">
              Ready to Get Started? <span className="text-gradient">Let's Talk</span>
            </h2>
            <p className="section-subheading">
              Fill out the form below and we'll get back to you within 24 hours
            </p>
          </div>

          <div className="form-content-grid">
            <div className="form-main-container">
              <form className="main-contact-form" onSubmit={handleSubmit}>
                <div className="form-double-row">
                  <div className="form-field">
                    <label>Full Name *</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="John Doe"
                      required
                    />
                  </div>
                  <div className="form-field">
                    <label>Email Address *</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="john@company.com"
                      required
                    />
                  </div>
                </div>

                <div className="form-double-row">
                  <div className="form-field">
                    <label>Phone Number *</label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+971 55 808 6462"
                      required
                    />
                  </div>
                  <div className="form-field">
                    <label>Company Name</label>
                    <input
                      type="text"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      placeholder="Your Company"
                    />
                  </div>
                </div>

                <div className="form-field">
                  <label>Service *</label>
                  <select
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    required
                  >
                    <option value="">Select a service</option>
                    <option value="cybersecurity">Cyber Security</option>
                    <option value="infrastructure">Infrastructure Solutions</option>
                    <option value="cloud">Cloud Solutions</option>
                    <option value="amc">AMC</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div className="form-field">
                  <label>Your Message *</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell us about your project..."
                    rows="6"
                    required
                  ></textarea>
                </div>

                <button type="submit" className="main-submit-btn">
                  Send Message
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                    <path d="M4 10H16M16 10L12 6M16 10L12 14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </button>
              </form>
            </div>

            <div className="form-sidebar-content">
              <div className="sidebar-gradient-card">
                <h3>Why Choose ArtFlex IT?</h3>
                <ul className="benefits-list">
                  <li>
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                      ircle cx="10" cy="10" r="10" fill="white" opacity="0.2"/>
                      <path d="M6 10L9 13L14 7" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    <span>14+ Years of Industry Experience</span>
                  </li>
                  <li>
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                      ircle cx="10" cy="10" r="10" fill="white" opacity="0.2"/>
                      <path d="M6 10L9 13L14 7" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    <span>500+ Successful Projects</span>
                  </li>
                  <li>
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                      ircle cx="10" cy="10" r="10" fill="white" opacity="0.2"/>
                      <path d="M6 10L9 13L14 7" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    <span>Certified IT Professionals</span>
                  </li>
                  <li>
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                      ircle cx="10" cy="10" r="10" fill="white" opacity="0.2"/>
                      <path d="M6 10L9 13L14 7" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    <span>24/7 Dedicated Support</span>
                  </li>
                  <li>
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                      ircle cx="10" cy="10" r="10" fill="white" opacity="0.2"/>
                      <path d="M6 10L9 13L14 7" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    <span>Global Service Coverage</span>
                  </li>
                </ul>
              </div>

              <div className="sidebar-white-card">
                <h4>Need Immediate Help?</h4>
                <p>For urgent inquiries, call us directly at:</p>
                <a href="tel:+971558086462" className="urgent-phone">+971 55 808 6462</a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
