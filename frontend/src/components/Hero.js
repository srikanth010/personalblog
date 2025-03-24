// Header.js
import React from 'react';
import './Hero.css'; // Import the CSS for styling
import './Common.css';

function Hero() {
  return (
    <div className="hero">
      <h1 className="hero-title">Srikanth Kanteti</h1>
      <p className="hero-subtitle">Sr.AEM FullStack Developer</p>
      <img alt="hero-logo" src="/hero.jpg" class="hero-img"></img>
    </div>
  );
}

export default Hero;