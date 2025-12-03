import React, { useState } from 'react';
import './AboutUsPage.css';

const AboutUsPage = () => {
  const [openFaq, setOpenFaq] = useState(0);

  const stats = [
    { number: '14+', label: 'Years Experience' },
    { number: '500+', label: 'Projects Completed' },
    { number: '100+', label: 'IT Experts' },
    { number: '50+', label: 'Countries Served' },
    { number: '100+', label: 'Industry Awards' },
  ];

  const whyChooseUs = [
    'Over 14 years of experience delivering IT solutions',
    'Certified security experts and ethical hackers',
    'Customised IT solutions tailored to your business',
    'End to end project delivery from design, deployment and support',
    'Global reach with presence in multiple countries',
  ];

  const values = [
    {
      icon: '🎯',
      title: 'Integrity',
      text: 'We believe in honesty, transparency, and ethical practices in every aspect of our work. Integrity is the foundation upon which we build trust with our clients and partners.',
    },
    {
      icon: '💎',
      title: 'Excellence',
      text: 'We are committed to delivering exceptional quality and craftsmanship in all our projects. From concept to completion, we strive for excellence in every detail to ensure the quality.',
    },
    {
      icon: '🤝',
      title: 'Collaboration',
      text: 'We value collaboration and teamwork, both internally within our organization and externally with our clients and partners. By fostering open communication and mutual respect.',
    },
    {
      icon: '💡',
      title: 'Innovation',
      text: 'We embrace innovation and creativity to stay at the forefront of the IT industry. Constantly seeking new ideas and technologies, we aim to deliver innovative solutions.',
    },
  ];

  const testimonials = [
    {
      title: 'Exceeded Our Expectations',
      text: 'Artiflex IT transformed our outdated infrastructure into a modern, secure system. Their professionalism, attention to detail, and commitment to quality exceeded our expectations.',
      author: 'John Smith',
      role: 'CTO @Tech Innovations Ltd',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop',
    },
    {
      title: 'Delivered Beyond Expectations',
      text: 'Artiflex IT delivered a state-of-the-art cybersecurity solution that surpassed our expectations. Their proactive communication, innovative solutions, and dedication to excellence ensured a successful project.',
      author: 'Sarah Johnson',
      role: 'Project Manager @ABC Corporation',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop',
    },
    {
      title: 'Customized Solution Success',
      text: 'Artiflex IT optimized our cloud infrastructure and workflow efficiency. Their strategic planning, precise execution, and effective project management were instrumental in achieving our expansion goals.',
      author: 'Michael Chen',
      role: 'Operations Manager @XYZ Manufacturing',
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop',
    },
  ];

  const faqs = [
    {
      question: 'What types of IT solutions does Artiflex specialize in?',
      answer:
        'Artiflex specializes in a wide range of IT solutions, including cybersecurity, infrastructure solutions, cloud solutions, and AMC services. From endpoint protection and firewalls to cloud deployment and managed services, we have the expertise and experience to handle diverse projects of all sizes and complexities.',
    },
    {
      question: 'How long does the implementation process typically take?',
      answer:
        'The implementation timeline varies depending on the scope and complexity of the project. Typically, small to medium projects take 2-4 weeks, while larger enterprise solutions may take 2-3 months.',
    },
    {
      question: 'What factors influence the cost of an IT project?',
      answer:
        'Several factors influence project costs including the scope of services, infrastructure size, security requirements, customization needs, and ongoing support requirements.',
    },
    {
      question: 'How does Artiflex ensure quality and security for IT systems?',
      answer:
        'We follow industry best practices and compliance standards. Our certified security experts conduct thorough assessments, implement multi-layered security measures, and provide continuous monitoring.',
    },
    {
      question: 'Can I see examples of your past projects or client testimonials?',
      answer:
        'Yes! We have worked with numerous clients across various industries. Please contact our team to view our portfolio and detailed case studies.',
    },
  ];

  return (
    <div className="about-container">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-wrapper">
          <div className="feature-tag">About Us</div>
          <h1 className="hero-title">
            Bringing Your Vision to Life
            <br />
            with <span>Expertise and Dedication</span>
          </h1>
          <div className="image-container">
            <img
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1200&h=600&fit=crop"
              alt="IT Team"
            />
          </div>
          <div className="stats-container">
            {stats.map((stat, index) => (
              <div key={index} className="stat-box">
                <div className="stat-number">{stat.number}</div>
                <div className="stat-label">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Us Content Section */}
      <section className="feature-section">
        <div className="feature-left">
          <div className="feature-tag">About Artiflex IT</div>
          <h2 className="feature-title">
            Trusted <span>IT Solutions</span> Provider
          </h2>
          <p className="feature-desc">
            With over <strong>14 years of industry experience</strong>, we are a trusted IT Solutions provider operating under the esteemed <strong>Manchi Group</strong>.
          </p>
          <p className="feature-desc">
            Our expertise spans over a wide range of technology services tailored to meet the evolving needs of business across sectors. Backed by a decade of innovation and client success, we have proudly earned <strong>multiple industry awards</strong> for excellence in service, reliability and innovation.
          </p>
          <p className="feature-desc">
            At our core, we are committed to delivering <strong>smart, scalable and secure IT solutions</strong> that drive growth and digital transformation.
          </p>
        </div>
        <div className="feature-right">
          <div className="feature-card">
            <img
              src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=700&h=500&fit=crop"
              alt="About Us"
            />
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="why-choose-section">
        <div className="why-choose-container">
          <div className="feature-tag">Why Choose Us</div>
          <h2 className="feature-title">
            Your Trusted <span>Technology Partner</span>
          </h2>
          <div className="why-choose-grid">
            {whyChooseUs.map((item, index) => (
              <div key={index} className="why-choose-item">
                <div className="check-icon">✓</div>
                <p>{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Vision & Mission Section */}
      <section className="feature-section reverse">
        <div className="feature-left">
          <div className="feature-tag">Vision & Mission</div>
          <h2 className="feature-title">
            Empowering <span>Digital Transformation</span>
          </h2>
          <div className="vision-mission-box">
            <h3 className="vm-title">Vision:</h3>
            <p className="feature-desc">
              To be the most trusted technology partner empowering organizations to thrive securely in the digital era through innovative, resilient, and sustainable IT solutions.
            </p>
          </div>
          <div className="vision-mission-box">
            <h3 className="vm-title">Mission:</h3>
            <p className="feature-desc">
              To deliver end-to-end IT solutions spanning cybersecurity, infrastructure, cloud, and managed services that enable businesses to operate efficiently, scale confidently, and stay protected in an evolving digital landscape.
            </p>
          </div>
        </div>
        <div className="feature-right">
          <div className="feature-card">
            <img
              src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=700&h=500&fit=crop"
              alt="Vision Mission"
            />
          </div>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="mission-section">
        <div className="mission-container">
          <div className="feature-tag">Our Core Values</div>
          <h2 className="feature-title">
            What Drives <span>Our Success</span>
          </h2>
          <div className="values-grid">
            {values.map((value, index) => (
              <div key={index} className="value-card">
                <div className="value-icon">{value.icon}</div>
                <h3 className="value-title">{value.title}</h3>
                <p className="value-text">{value.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="testimonials-section">
        <div className="testimonials-container">
          <div className="feature-tag">Testimonials</div>
          <h2 className="feature-title">
            Our Client <span>Success Stories</span>
          </h2>
          <div className="testimonials-grid">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="testimonial-card">
                <h3 className="testimonial-title">{testimonial.title}</h3>
                <p className="testimonial-text">{testimonial.text}</p>
                <div className="testimonial-author">
                  <img src={testimonial.image} alt={testimonial.author} />
                  <div className="author-info">
                    <div className="author-name">{testimonial.author}</div>
                    <div className="author-role">{testimonial.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="faq-section">
        <div className="faq-container">
          <div className="feature-tag">Need more help?</div>
          <h2 className="feature-title">
            Frequently Asked <span>Questions (FAQ)</span>
          </h2>
          <div className="faq-list">
            {faqs.map((faq, index) => (
              <div key={index} className="faq-item">
                <div
                  className="faq-question"
                  onClick={() => setOpenFaq(openFaq === index ? -1 : index)}
                >
                  <span>{faq.question}</span>
                  <span className={`faq-icon ${openFaq === index ? 'open' : ''}`}>
                    {openFaq === index ? '∧' : '∨'}
                  </span>
                </div>
                {openFaq === index && <div className="faq-answer">{faq.answer}</div>}
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutUsPage;
