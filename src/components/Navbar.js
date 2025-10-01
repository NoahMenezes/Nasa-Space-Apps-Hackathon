import React from 'react';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav id="main-navbar">
        {/* New Inner Container Div */}
        <div> 
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
                {/* Login Button */}
                <a href="/login">
                    <button className="auth-nav-btn login-btn">Login</button>
                </a>
                
                {/* Sign Up Button (Primary CTA) */}
                <a href="/signup">
                    <button className="auth-nav-btn signup-btn">Sign Up</button>
                </a>
            </div>
        </div>
        {/* End Inner Container Div */}
    </nav>
  );
};

export default Navbar;