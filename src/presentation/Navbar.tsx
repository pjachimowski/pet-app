import React from "react";
import "../App.css";

function Navbar() {
  const isMobile = window.matchMedia("(max-width: 600px)").matches;
  return (
    <nav className="navbar" role="navigation">
      <img
        className="navbar__logo"
        src={isMobile ? "/icons/pet-icon-small.svg" : "/icons/pet-icon.svg"}
        alt="Logo"
        aria-label="Pet Logo"
      />
    </nav>
  );
}

export default Navbar;
