import React from 'react';
import './Navbar.css';
// NOTE: For a multi-page app using React Router, you should ideally use the <Link> component
// from 'react-router-dom'. I am keeping the <a> tag structure you provided and updating the href.

const Navbar = () => {
    return (
        <nav id="main-navbar">
            {/* New Inner Container Div */}
            <div> 
                <div className="navbar-logo">
                    <span role="img" aria-label="Rocket">🚀</span> Deep Space Explorer
                </div>
                <ul className="navbar-links">
                    <li><a href="/">Home</a></li>
                    {/* UPDATED HREF to point to the new /search route */}
                    <li><a href="/search">Search Engine</a></li> 
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
