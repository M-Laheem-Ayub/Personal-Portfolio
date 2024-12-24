import React from "react";
import "./ResumeButton.css";

const ResumeButton = ({ setIsMenuOpen }) => {
  const handleClick = () => {
    setIsMenuOpen(false);
  };

  return (
    <div className="r-btn">
      <a href="#" style={{ textDecorationLine: "none" }} onClick={handleClick}>
        <button
          className="btn btn-dark d-flex px-4 py-2 mt-1 border-2"
          type="submit"
        >
          <div id="btn-text" className="text-light pe-2">
            Resume
          </div>
          <img
            src="assets/icons/resumeBtnIcon.webp"
            className="mt-1"
            id="btn-img"
            alt=""
          />
        </button>
      </a>
    </div>
  );
};

export default ResumeButton;
