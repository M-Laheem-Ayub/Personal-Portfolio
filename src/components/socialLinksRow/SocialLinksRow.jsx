import React from "react";
import "./SocialLinksRow.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import socialLinks from "../../api/SocialLinks";

const SocialLinksRow = () => {
  return (
    <div className="container pt-3 pt-md-2 ps-1 ps-md-4">
      <div className="row mt-0 mt-md-4 ps-2 ps-md-2">
        {socialLinks.map((social) => (
          <div className=" social-icon-cont mx-3">
            <a
              key={social.id}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
            >
              <div>
                <FontAwesomeIcon
                  className="social-icon"
                  icon={social.icon}
                  size="2x"
                  color={social.color}
                />
              </div>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SocialLinksRow;
