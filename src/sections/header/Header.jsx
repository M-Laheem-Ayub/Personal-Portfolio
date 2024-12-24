import React, { useState, useEffect, useRef } from "react";
import "./Header.css";
import Logo from "../../components/logo/Logo";
import Navbar from "../../components/navbar/Navbar";
import ResumeButton from "../../components/button/ResumeButton";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navRef = useRef(null); // Reference to the nav element

  // Function to handle outside clicks
  const handleClickOutside = (event) => {
    if (navRef.current && !navRef.current.contains(event.target)) {
      setIsMenuOpen(false); // Close the menu
    }
  };

  useEffect(() => {
    // Add event listener when menu is open
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
    <div id="my-header" className=" container-fluid">
      <nav className="navbar navbar-expand-lg z-1" ref={navRef}>
        <div className="container-fluid px-2 px-md-4 mx-0 mx-lg-5">
          <a className="navbar-brand" href="#">
            <Logo />
          </a>
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
         

        </div>
      </nav>
    </div>
  );
};

export default Header;
