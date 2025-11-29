import autoImg from "../../assets/image2.png";
import collabImg from "../../assets/image2.png";
import insightImg from "../../assets/image2.png";
import "./FeatureSections.css";

export default function FeatureSections() {
  const sections = [
    {
      tag: "WORKFLOW AUTOMATION",
      title: "Automate your entire workflow",
      highlight: "with precision",
      desc: "Artiflex helps you eliminate repetitive tasks with intelligent automation. From scheduling to client updates, everything flows seamlessly so your team stays focused on real work.",
      link: "Explore Automation →",
      img: autoImg,
    },
    {
      tag: "REAL-TIME COLLABORATION",
      title: "Collaborate in real time",
      highlight: "from anywhere",
      desc: "Share ideas, track progress and communicate instantly. Artiflex brings your entire team together with live updates and synchronized activities—perfect for remote workflows.",
      link: "See Collaboration →",
      img: collabImg,
    },
    {
      tag: "ANALYTICS & INSIGHTS",
      title: "Make smarter decisions",
      highlight: "with live analytics",
      desc: "Understand team performance, project bottlenecks and customer engagement using real-time dashboards. Artiflex gives you insights that actually help you grow.",
      link: "View Insights →",
      img: insightImg,
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
