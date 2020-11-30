import React from "react";
import "./Footer.scss";

const Footer = () => {
  return (
    <footer>
      <p>For Educational Purpose Only <br />
        This product uses API from <a href="https://www.edamam.com">EDAMAM</a>
      </p>
      <div className="logo" id="edamam-badge" data-color="light"></div>
    </footer>
  )
}

export default Footer;