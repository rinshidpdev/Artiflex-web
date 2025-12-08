import React from 'react';
import './ServicesPage.css';
import Galaxy from '../Galaxy';

const ServicesPage = () => {
  const services = [
    {
      id: 1,
      title: 'Cyber Security',
      tagline: 'Defending systems from evolving digital security threats',
      description: 'Cybersecurity is the practice of protecting computer systems, networks, and data from unauthorized access, attacks, or damage. It\'s crucial because it safeguards sensitive information, ensures business continuity, and maintains trust in an increasingly digital world. Without strong cybersecurity, organizations risk data breaches, financial loss, and reputational damage.',
      image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=800&h=600&fit=crop',
      solutions: [
        'Endpoint Protection',
        'Firewalls',
        'Email Security',
        'MDR Solutions',
        'UEM Solutions',
        'NDR',
        'Identity Threat Detection & Response',
        'Advisory Services'
      ]
    },
    {
      id: 2,
      title: 'Infrastructure Solutions',
      tagline: 'Optimizing network performance through secure infrastructure solutions',
      description: 'We provide comprehensive infrastructure solutions that form the backbone of your IT operations. From active network components to passive infrastructure, we ensure your technology foundation is robust, scalable, and future-ready for digital transformation.',
      image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&h=600&fit=crop',
      activeInfra: [
        'Access Points',
        'CCTV Cameras',
        'Switches',
        'Servers',
        'Storage Systems',
        'Virtualization Platforms',
        'Backup Solutions',
        'IT Infrastructure & Hardware Supply'
      ],
      passiveInfra: [
        'Structured Cabling',
        'Racks & Cabinets',
        'Power Systems'
      ]
    },
    {
      id: 3,
      title: 'Cloud Solutions',
      tagline: 'Innovative cloud solutions for agile, scalable businesses',
      description: 'Transform your business with cutting-edge cloud solutions that provide flexibility, scalability, and security. Our cloud services enable you to focus on growth while we handle the technical complexities of cloud infrastructure and migration.',
      image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&h=600&fit=crop',
      solutions: [
        'Cloud Infrastructure Deployment',
        'Migration Services',
        'Backup and Disaster Recovery',
        'Security and Compliance'
      ]
    },
    {
      id: 4,
      title: 'AMC',
      tagline: 'Always-on IT support to boost uptime and security',
      description: 'Our comprehensive Annual Maintenance Contract services ensure your IT infrastructure runs smoothly 24/7. We provide proactive maintenance, rapid response, and expert support to minimize downtime and maximize productivity for your business operations.',
      image: 'https://images.unsplash.com/photo-1573164713988-8665fc963095?w=800&h=600&fit=crop',
      solutions: [
        'Preventive Maintenance',
        'Hardware and Network Support',
        'Software and Security Maintenance',
        'Cloud and Infrastructure Support',
        'On Site and Emergency Support'
      ]
    }
  ];

  return (
   
      <div className="services-container">
        {/* Hero Section */}
        <section className="services-hero">
          <div className="hero-container">
            <div className="hero-left">
              <span className="hero-badge">
                <span className="badge-icon">✨</span> Our Services
              </span>
              <h1 className="hero-title">
                Complete <span className="gradient-text">IT Solutions</span> for Modern Business
              </h1>
              <p className="hero-description">
                From cybersecurity to cloud solutions, we deliver end-to-end IT services that empower your organization to thrive securely in the digital era through innovative technology.
              </p>
              <div className="hero-buttons">
                <a href="#services" className="btn-hero-primary">
                  Explore Services
                  <span className="btn-arrow">→</span>
                </a>
                <a href="#contact" className="btn-hero-secondary">
                  <span className="btn-icon">📞</span>
                  Get Consultation
                </a>
              </div>
              <div className="hero-stats">
                <div className="stat-item">
                  <div className="stat-number">4+</div>
                  <div className="stat-label">Core Services</div>
                </div>
                <div className="stat-divider"></div>
                <div className="stat-item">
                  <div className="stat-number">500+</div>
                  <div className="stat-label">Projects Done</div>
                </div>
                <div className="stat-divider"></div>
                <div className="stat-item">
                  <div className="stat-number">24/7</div>
                  <div className="stat-label">Support</div>
                </div>
              </div>
            </div>
            <div className="hero-right">
              <div className="hero-image-wrapper">
                <div className="floating-card card-1">
                  <div className="card-icon">🛡️</div>
                  <div className="card-text">Cyber Security</div>
                </div>
                <div className="floating-card card-2">
                  <div className="card-icon">☁️</div>
                  <div className="card-text">Cloud Solutions</div>
                </div>
                <div className="floating-card card-3">
                  <div className="card-icon">⚙️</div>
                  <div className="card-text">Infrastructure</div>
                </div>
                <img 
                  src="https://images.unsplash.com/photo-1551434678-e076c223a692?w=800&h=900&fit=crop" 
                  alt="IT Services" 
                  className="hero-image"
                />
                <div className="hero-image-decoration"></div>
                <div className="hero-image-decoration-2"></div>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="services-section" id="services">
          <div className="services-header">
            <span className="section-badge">What We Offer</span>
            <h2 className="section-title">
              Our Complete <span className="gradient-text">IT Services</span>
            </h2>
            <p className="section-description">
              Comprehensive technology solutions tailored to meet your business needs and drive digital transformation
            </p>
          </div>

          <div className="services-list">
            {services.map((service, index) => (
              <div key={service.id} className={`service-item ${index % 2 === 0 ? '' : 'reverse'}`}>
                <div className="service-content">
                  <div className="service-number">0{service.id}</div>
                  <h3 className="service-title">{service.title}</h3>
                  <p className="service-tagline">{service.tagline}</p>
                  <p className="service-description">{service.description}</p>
                  
                  {/* Solutions */}
                  {service.id === 2 ? (
                    <div className="solutions-container">
                      <div className="solutions-group">
                        <h4 className="solutions-group-title">Active Infrastructure</h4>
                        <div className="solutions-list">
                          {service.activeInfra.map((item, idx) => (
                            <div key={idx} className="solution-item">
                              <svg className="check-icon" viewBox="0 0 20 20" fill="none">
                                <circle cx="10" cy="10" r="10" fill="url(#gradient)"/>
                                <path d="M6 10L9 13L14 7" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                <defs>
                                  <linearGradient id="gradient" x1="0" y1="0" x2="20" y2="20">
                                    <stop offset="0%" stopColor="#667eea"/>
                                    <stop offset="100%" stopColor="#764ba2"/>
                                  </linearGradient>
                                </defs>
                              </svg>
                              <span>{item}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                      <div className="solutions-group">
                        <h4 className="solutions-group-title">Passive Infrastructure</h4>
                        <div className="solutions-list">
                          {service.passiveInfra.map((item, idx) => (
                            <div key={idx} className="solution-item">
                              <svg className="check-icon" viewBox="0 0 20 20" fill="none">
                                <circle cx="10" cy="10" r="10" fill="url(#gradient)"/>
                                <path d="M6 10L9 13L14 7" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                <defs>
                                  <linearGradient id="gradient" x1="0" y1="0" x2="20" y2="20">
                                    <stop offset="0%" stopColor="#667eea"/>
                                    <stop offset="100%" stopColor="#764ba2"/>
                                  </linearGradient>
                                </defs>
                              </svg>
                              <span>{item}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  ) : (
                    <div className="solutions-list">
                      {service.solutions.map((item, idx) => (
                        <div key={idx} className="solution-item">
                          <svg className="check-icon" viewBox="0 0 20 20" fill="none">
                            <circle cx="10" cy="10" r="10" fill="url(#gradient)"/>
                            <path d="M6 10L9 13L14 7" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                            <defs>
                              <linearGradient id="gradient" x1="0" y1="0" x2="20" y2="20">
                                <stop offset="0%" stopColor="#667eea"/>
                                <stop offset="100%" stopColor="#764ba2"/>
                              </linearGradient>
                            </defs>
                          </svg>
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>
                  )}
                </div>

                <div className="service-image-wrapper">
                  <div className="image-card">
                    <img src={service.image} alt={service.title} className="service-image" />
                    <div className="image-overlay"></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="why-choose-section">
          <div className="why-choose-container">
            <div className="why-choose-header">
              <span className="section-badge">Why Choose Us</span>
              <h2 className="section-title">
                Experience <span className="gradient-text">Excellence</span>
              </h2>
            </div>

            <div className="benefits-grid">
              <div className="benefit-card">
                <div className="benefit-number">01</div>
                <h3>14+ Years Experience</h3>
                <p>Over 14 years of experience delivering IT solutions across various industries</p>
              </div>
              <div className="benefit-card">
                <div className="benefit-number">02</div>
                <h3>Certified Experts</h3>
                <p>Certified security experts and ethical hackers protecting your business</p>
              </div>
              <div className="benefit-card">
                <div className="benefit-number">03</div>
                <h3>Customized Solutions</h3>
                <p>Customised IT solutions tailored to your business needs</p>
              </div>
              <div className="benefit-card">
                <div className="benefit-number">04</div>
                <h3>End-to-End Delivery</h3>
                <p>End to end project delivery from design, deployment and support</p>
              </div>
              <div className="benefit-card">
                <div className="benefit-number">05</div>
                <h3>Global Reach</h3>
                <p>Global reach with presence in multiple countries</p>
              </div>
              <div className="benefit-card">
                <div className="benefit-number">06</div>
                <h3>24/7 Support</h3>
                <p>Always-on IT support to boost uptime and security</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="services-cta">
          <div className="cta-container">
            <h2 className="cta-title">
              Ready to Transform Your IT Infrastructure?
            </h2>
            <p className="cta-description">
              Let our experts help you build a secure, scalable, and efficient IT environment. Contact us today for a free consultation.
            </p>
            <div className="cta-buttons">
              <a href="/services" className="cta-btn-primary">Get Started Now</a>
              <a href="/contact" className="cta-btn-secondary">Schedule Consultation</a>
            </div>
          </div>
        </section>
      </div>
   
  );
};

export default ServicesPage;
