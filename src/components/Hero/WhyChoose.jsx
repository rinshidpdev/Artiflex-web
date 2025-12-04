import "./WhyChoose.css";

export default function WhyChoose() {
  return (
    <section className="why-container">

      <div className="why-header">
        <span>WHY CHOOSE ARTIFLEX</span>
        <h2>
         We develop custom IT solutions <span>to your unique </span>
        </h2>
        <p>
           business needs, ensuring efficiency, scalability, and security at every stage.
           Our approach focuses on building reliable systems that support daily operations while preparing your business for future growth.

By choosing Artiflex IT, you gain a dedicated technology partner committed to understanding your challenges and delivering solutions that truly fit.
We design, manage, and protect your IT environment with precision helping you operate smoothly, reduce downtime, and stay secure in an evolving digital landscape

        </p>
      </div>

      <div className="why-grid">

        <div className="why-card">
          <img 
            src="https://cdn-icons-png.flaticon.com/512/9131/9131529.png"
            alt="automation"
          />
          <h3>Smart System Optimization</h3>
          <p>
            Enhance stability and performance with proactive monitoring, updates, and issue prevention.
          </p>
        </div>

        <div className="why-card">
          <img 
            src="https://cdn-icons-png.flaticon.com/512/9910/9910151.png"
            alt="dashboard"
          />
          <h3>Unified IT Overview</h3>
          <p>
            Stay informed with clear visibility of your network, devices, security, and performance—all in one place.
          </p>
        </div>

        <div className="why-card">
          <img 
            src="https://cdn-icons-png.flaticon.com/512/8985/8985533.png"
            alt="team"
          />
          <h3>Seamless Team Support</h3>
          <p>
            Fast response, real-time assistance, and reliable IT management that keeps your team productive
          </p>
        </div>

      </div>

    </section>
  );
}
