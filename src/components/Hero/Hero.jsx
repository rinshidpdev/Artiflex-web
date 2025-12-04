import React from "react";
import "./Hero.css";

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-containerr">
        <h1 className="hero-title">                   
          The all-in-one IT solution
          <br />
          to turn infrastructure
          <br />
          into <span className="highlight">uptime</span>
        </h1>

        <div className="hero-tags">
          <div className="tag">Secure. Scalable. Reliable</div>
          <div className="tag"> Faster support. Stronger systems</div>
          <div className="tag"> Connect. Protect. Perform</div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
