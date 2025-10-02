import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  const handleNavClick = (path) => {
    closeMobileMenu();
    navigate(path);
    window.scrollTo(0, 0);
  };

  return (
    <nav id="main-navbar" className={isScrolled ? 'scrolled' : ''}>
      <div className="nav-container">
        <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
          <span role="img" aria-label="Rocket">🚀</span> Deep Space Explorer
        </Link>
        
        <div className={`nav-links ${isMobileMenuOpen ? 'active' : ''}`}>
          <Link 
            to="/" 
            className={location.pathname === '/' ? 'active' : ''}
            onClick={() => handleNavClick('/')}
          >
            Home
          </Link>
          <Link 
            to="/search" 
            className={location.pathname === '/search' ? 'active' : ''}
            onClick={() => handleNavClick('/search')}
          >
            Search
          </Link>
          <Link 
            to="/about" 
            className={location.pathname === '/about' ? 'active' : ''}
            onClick={() => handleNavClick('/about')}
          >
            About
          </Link>
          <Link 
            to="/contact" 
            className={location.pathname === '/contact' ? 'active' : ''}
            onClick={() => handleNavClick('/contact')}
          >
            Contact
          </Link>
        </div>
        
        <div className="auth-buttons">
          <Link 
            to="/login" 
            className="login-btn"
            onClick={closeMobileMenu}
          >
            Login
          </Link>
          <Link 
            to="/signup" 
            className="signup-btn"
            onClick={closeMobileMenu}
          >
            Sign Up
          </Link>
        </div>
        
        <button 
          className={`mobile-menu-btn ${isMobileMenuOpen ? 'active' : ''}`}
          onClick={toggleMobileMenu}
          aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
      
      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="mobile-menu-overlay" onClick={closeMobileMenu}></div>
      )}
    </nav>
  );
};

export default Navbar;
