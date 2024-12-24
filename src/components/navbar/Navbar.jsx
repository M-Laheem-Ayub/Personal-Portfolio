import React, { useEffect } from "react";
import "./Navbar.css";

const Navbar = ({ setIsMenuOpen }) => {
  useEffect(() => {
    const links = document.querySelectorAll(".my-link");

    links.forEach((link) => {
      link.addEventListener("click", (e) => {
        const ripple = document.createElement("span");
        ripple.className = "ripple";
        link.appendChild(ripple);

        const rect = link.getBoundingClientRect();
        const size = Math.max(rect.width, rect.height);
        ripple.style.width = ripple.style.height = `${size}px`;
        ripple.style.left = `${e.clientX - rect.left - size / 2}px`;
        ripple.style.top = `${e.clientY - rect.top - size / 2}px`;

        setTimeout(() => {
          ripple.remove();
        }, 600); 
        
        setIsMenuOpen(false);
      });
    });

    return () => {
      links.forEach((link) =>
        link.removeEventListener("click", () => {})
      );
    };
  }, [setIsMenuOpen]);

  return (
    <div>
      <ul className="navbar-nav pt-3 mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link my-link me-3" aria-current="page" href="#">
            About Me
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link my-link me-3" href="#">
            Skills
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link my-link me-3" href="#">
            Project
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link my-link" href="#">
            Contact Me
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
