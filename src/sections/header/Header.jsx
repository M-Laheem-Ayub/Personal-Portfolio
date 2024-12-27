import React, { useState, useEffect, useRef } from "react";
import "./Header.css";
import Logo from "../../components/logo/Logo";
import Navbar from "../../components/navbar/Navbar";
import ResumeButton from "../../components/button/ResumeButton";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons";  // Import icons

const Header = ({ toggleTheme, isDarkMode }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navRef = useRef(null);

  const handleClickOutside = (event) => {
    if (navRef.current && !navRef.current.contains(event.target)) {
      setIsMenuOpen(false);
    }
  };

  useEffect(() => {
    if (isMenuOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isMenuOpen]);

  return (
    <div id="my-header" className="container-fluid">
      <nav className="navbar navbar-expand-lg z-1" ref={navRef}>
        <div className="container-fluid px-2 px-md-4 mx-0 mx-lg-5">
          <a className="navbar-brand" href="#">
            <Logo />
          </a>
          
          <div
            className={`collapse navbar-collapse justify-content-end ${
              isMenuOpen ? "show" : ""
            }`}
            id="navbarSupportedContent"
          >
            <Navbar setIsMenuOpen={setIsMenuOpen} />
          </div>
          <div
            className={`collapse navbar-collapse my-nav-collapse justify-content-end ${
              isMenuOpen ? "show" : ""
            }`}
            id="navbarSupportedContent"
          >
          <ResumeButton setIsMenuOpen={setIsMenuOpen} />
          </div>
          <div className="d-flex">
          <button
            className="navbar-toggler border-0"
            type="button"
            aria-controls="navbarSupportedContent"
            aria-expanded={isMenuOpen}
            aria-label="Toggle navigation"
            onClick={() => setIsMenuOpen(!isMenuOpen)} 
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <button
            className="btn theme-toggle-btn ms-3"
            onClick={toggleTheme}
          >
            {/* Use FontAwesomeIcon for toggle button */}
            <FontAwesomeIcon icon={isDarkMode ? faMoon : faSun} />
          </button>
          </div>
         
        </div>
      </nav>
    </div>
  );
};

export default Header;
