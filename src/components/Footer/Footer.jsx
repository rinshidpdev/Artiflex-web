import React from "react";
import "./Footer.css";
import logo from "../../assets/logo.png";
import academy from "../../assets/logo.png";

export default function Footer() {
  return (
    <footer className="af-footer-wrapper">

      {/* TOP CURVE */}
      <div className="af-footer-curve">
        <svg
          viewBox="0 0 1440 120"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
        >
          <path
            d="M0,40 C300,140 1140,-60 1440,40 L1440,0 L0,0 Z"
            fill="#ffffff"
          />
        </svg>
      </div>

      {/* MAIN FOOTER */}
      <div className="af-footer">
        <div className="af-footer-inner">

          <div className="af-col af-brand">
            <img src={logo} className="af-logo" />
            <p className="af-blurb">
              We help ambitious businesses turn into big names.
            </p>
          </div>

          <div className="af-col af-links">
            <div className="af-links-col">
              <h4>Product</h4>
              {/* <a>Features</a>
              <a>Automation</a>
              <a>Integrations</a>
              <a>Pricing</a> */}
            </div>

            <div className="af-links-col">
              <h4>Free Tools</h4>
              {/* <a>Post Generator</a>
              <a>Video Downloader</a>
              <a>Headline Generator</a>
              <a>Carousel Generator</a> */}
            </div>

            <div className="af-links-col">
              <h4>Resources</h4>
              <a>Blog</a>
              {/* <a>Academy</a>
              <a>Guides</a>
              <a>Affiliates</a> */}
            </div>

            <div className="af-links-col">
              <h4>Legal</h4>
              <a>Terms</a>
              <a>Privacy</a>
            </div>
          </div>

         
        </div>

        <div className="af-footer-bottom">
          © {new Date().getFullYear()} Artiflex — All rights reserved.
        </div>
      </div>

     
    </footer>
  );
}
