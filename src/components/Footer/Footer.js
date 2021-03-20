
import { faHeartbeat } from "@fortawesome/free-solid-svg-icons";
// icon
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <h3 className="text-center">
        Made with{" "}
        <span>
          <FontAwesomeIcon icon={faHeartbeat} />
        </span>{" "}
        by
        <a href="https://github.com/Noor-E-Jannat111" target="_blank" rel="noreferrer">
          Noor-E-Jannat
        </a>
      </h3>
    </div>
  );
};

export default Footer;
