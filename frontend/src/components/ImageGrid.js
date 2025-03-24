//Image-grid.js
import React from 'react';
import './ImageGrid.css';
import './Common.css';
import WyndhamLogo from '../assets/wyndham.jpeg';
import EWBLogo from '../assets/ewb.png';
import maarkLogo from '../assets/maark.jpeg';
import SkillvoiceLogo from '../assets/skillvoice.png';
import { useEffect } from "react";

function ImageGrid() {
  useEffect(() => {
    const cards = document.querySelectorAll(".card");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.2 }
    );

    cards.forEach((card) => observer.observe(card));

    return () => {
      cards.forEach((card) => observer.unobserve(card));
    };
  }, []);

  return (
    <section id="portfolio" className="projects-container">
      <h1 className="section-heading">PROJECTS</h1>
      <div className="projects-divider"></div>
      <h2 className="section-subheading">Work Experience</h2>

      <div className="grid-container">
        <div className="card">
          <a href="https://www.wyndhamhotels.com" target="_blank" rel="noreferrer">
            <img src={WyndhamLogo} alt="Wyndham-Logo" className="card-image" />
            <div className="card-description">
              <h3>Wyndham Hotels</h3>
              <p>AEM implementation for scalable hotel website solutions.</p>
            </div>
          </a>
        </div>

        <div className="card">
          <a href="https://www.eastwestbank.com" target="_blank" rel="noreferrer">
            <img src={EWBLogo} alt="EWB-Logo" className="card-image" />
            <div className="card-description">
              <h3>East West Bank</h3>
              <p>Developed AEM components for digital banking experiences.</p>
            </div>
          </a>
        </div>

        <div className="card">
          <a href="https://maark.com/" target="_blank" rel="noreferrer">
            <img src={maarkLogo} alt="Maark-Logo" className="card-image" />
            <div className="card-description">
              <h3>Maark</h3>
              <p>Led full-stack development for enterprise solutions.</p>
            </div>
          </a>
        </div>

        <div className="card">
          <a href="https://skillvoice.com/" target="_blank" rel="noreferrer">
            <img src={SkillvoiceLogo} alt="Sv-Logo" className="card-image" />
            <div className="card-description">
              <h3>Skillvoice</h3>
              <p>Worked on AEM integration for an e-learning platform.</p>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
}

export default ImageGrid;
