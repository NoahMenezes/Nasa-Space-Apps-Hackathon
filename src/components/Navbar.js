import React from 'react';
import './Navbar.css';

const Navbar = () => {
  return (
    // The id "main-navbar" is crucial for CSS styling and Z-indexing
    <nav id="main-navbar">
      <div className="navbar-logo">
        <span role="img" aria-label="Rocket">🚀</span> Deep Space Explorer
      </div>
      <ul className="navbar-links">
        <li><a href="#home">Home</a></li>
        <li><a href="#solar-system">Solar System</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
      <div className="navbar-controls">
        {/* Placeholder for future controls like pause/info toggle */}
        <button className="control-btn">Controls</button>
      </div>
    </nav>
  );
};

export default Navbar;