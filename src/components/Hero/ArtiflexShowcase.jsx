import React from "react";
import "./ArtiflexShowcase.css";
import image from "../../assets/F.jpg";

const ArtiflexShowcase = () => {
  return (
    <section className="showcase-wrapper">
      <div className="showcase-box">
        <img 
          src={image} 
          alt="Artiflex Showcase" 
          className="showcase-image"
        />
      </div>
     
    </section>
  );
};

export default ArtiflexShowcase;
