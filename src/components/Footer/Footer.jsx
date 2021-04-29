import React from "react";
import "./Footer.scss";

const Footer = () => {
  return (
    <footer>
      <p>{new Date().getFullYear()} &copy; Akari Tsutsui<br />
        This product uses API from <a href="https://www.edamam.com" rel="noopener">EDAMAM</a>
      </p>
      <div className="logo" id="edamam-badge" data-color="light"></div>
    </footer>
  )
}

export default Footer;