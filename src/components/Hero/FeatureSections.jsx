import infraImg from "../../assets/S.jpg";
import cyberImg from "../../assets/C.jpg";
import cloudImg from "../../assets/M.jpg";
import "./FeatureSections.css";

export default function FeatureSections() {
  const sections = [
    {
      tag: "IT INFRASTRUCTURE MANAGEMENT",
      title: "Build a reliable IT foundation",
      highlight: "for smooth operations",
      desc: "Artiflex IT designs and manages secure, high-performance infrastructure tailored to your business. From system setup to ongoing maintenance, we ensure everything runs efficiently so your team can stay focused on what matters.",
      link: "Explore Infrastructure →",
      img: infraImg,
    },
    {
      tag: "CYBERSECURITY & PROTECTION",
      title: "Keep your business secure",
      highlight: "from modern threats",
      desc: "Safeguard your data, devices, and network with advanced endpoint protection, firewalls, and security monitoring. Artiflex IT keeps you protected with proactive defense and real-time threat response.",
      link: "Learn About Security →",
      img: cyberImg,
    },
    {
      tag: "CLOUD & MODERN WORKPLACE",
      title: "Work smarter",
      highlight: "with cloud collaboration tools",
      desc: "Boost productivity with Microsoft 365, Teams, OneDrive, secure email, and cloud backup solutions. Artiflex IT enables seamless communication and real-time collaboration—perfect for hybrid and remote teams.",
      link: "Explore Cloud Solutions →",
      img: cloudImg,
    },
  ];

  return (
    <>
      {sections.map((sec, index) => (
        <section
          key={index}
          className={`feature-section ${index % 2 === 1 ? "reverse" : ""}`}
        >
          {/* LEFT SIDE */}
          <div className="feature-left">
            <span className="feature-tag">{sec.tag}</span>

            <h2 className="feature-title">
              {sec.title} <span>{sec.highlight}</span>
            </h2>

            <p className="feature-desc">{sec.desc}</p>

            <a href="#" className="feature-link">
              {sec.link}
            </a>
          </div>

          {/* RIGHT SIDE */}
          <div className="feature-right">
            <div className="feature-card">
              <img src={sec.img} alt="feature" />
            </div>
          </div>
        </section>
      ))}
    </>
  );
}
