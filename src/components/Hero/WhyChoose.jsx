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
          <h3>Smart Automation</h3>
          <p>
            Save hours every day with fully automated workflows that reduce
            manual effort and improve accuracy.
          </p>
        </div>

        <div className="why-card">
          <img 
            src="https://cdn-icons-png.flaticon.com/512/9910/9910151.png"
            alt="dashboard"
          />
          <h3>Unified Dashboard</h3>
          <p>
            Track activities, performance, insights and customer interactions all in
            one beautifully designed dashboard.
          </p>
        </div>

        <div className="why-card">
          <img 
            src="https://cdn-icons-png.flaticon.com/512/8985/8985533.png"
            alt="team"
          />
          <h3>Team Collaboration</h3>
          <p>
            Real-time communication and shared workspaces keep your team aligned
            and running smoothly.
          </p>
        </div>

      </div>

    </section>
  );
}
