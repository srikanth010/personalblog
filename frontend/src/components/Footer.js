import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <p className="footer-text">© {new Date().getFullYear()} Srikanth Kanteti. All Rights Reserved.</p>
        <div className="footer-links">
          <a href="https://linkedin.com/in/YOUR_LINKEDIN" target="_blank" rel="noreferrer">
            <i className="fab fa-linkedin"></i>
          </a>
          <a href="https://github.com/YOUR_GITHUB" target="_blank" rel="noreferrer">
            <i className="fab fa-github"></i>
          </a>
          <a href="mailto:your.email@example.com">
            <i className="fas fa-envelope"></i>
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
