// Header.js
import React from 'react';
import './Header.css';
import './Common.css';

function Header() {
  return (
    <header>
       <div className="logo-container">
        <span className="header-logo">S</span>
        <span className="header-logo">K</span>
</div>
      <nav>
        <ul>
          <li><a href="#about">About</a></li>
          <li><a href="#portfolio">Portfolio</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
