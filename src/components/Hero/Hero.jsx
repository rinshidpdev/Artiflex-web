import React from "react";
import "./Hero.css";

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-container">
        <h1 className="hero-title">
          The all-in-one LinkedIn
          <br />
          platform to turn content
          <br />
          into <span className="highlight">pipeline</span>
        </h1>

        <div className="hero-tags">
          <div className="tag">FIND CLIENTS FASTER</div>
          <div className="tag"> CREATE CONTENT THAT CONVERTS</div>
          <div className="tag"> TRACK GROWTH THAT MATTERS</div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
