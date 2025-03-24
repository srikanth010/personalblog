import React, { useState, useEffect } from "react";
import "./BackToTop.css";

function BackToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };
    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  return (
    isVisible && (
      <button className="back-to-top" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
        ↑
      </button>
    )
  );
}

export default BackToTop;
