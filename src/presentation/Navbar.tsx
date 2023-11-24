import React from "react";
import "../App.css";

function Navbar() {
  const isMobile = window.matchMedia('(max-width: 600px)').matches;
  return (
    <div className="navbar">
      <img className="logo" src={isMobile ? "/icons/pet-icon-small.svg" : "/icons/pet-icon.svg"} alt="Logo" />
    </div>
  );
}

export default Navbar;
