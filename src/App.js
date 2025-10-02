import React from 'react';
import { Routes, Route, useLocation, useNavigate } from 'react-router-dom';
import './App.css';

// Import all components from the components directory
import Background from './components/Background';
import Navbar from './components/Navbar';
import Login from './components/Login';
import Signin from './components/Signin';
import Profile from './components/Profile';
import SearchEngine from './components/SearchEngine';
import About from './components/About';

// Home Component
const Home = () => {
  const navigate = useNavigate();
  
  const handleNavClick = (path) => {
    navigate(path);
    window.scrollTo(0, 0);
  };
  
  return (
    <div className="home-container">
      <div className="home-content">
        <h1>Explore the Cosmos</h1>
        <p>Discover the wonders of our universe with NASA's latest data and imagery</p>
        <div className="cta-buttons">
          <button 
            onClick={() => handleNavClick('/search')} 
            className="cta-button"
          >
            Start Exploring
          </button>
          <button 
            onClick={() => handleNavClick('/about')} 
            className="cta-button secondary"
          >
            Learn More
          </button>
        </div>
      </div>
    </div>
  );
};

// Contact Component
const Contact = () => (
  <div className="contact-container">
    <h1>Contact Us</h1>
    <p>Have questions? Reach out to our team of space enthusiasts.</p>
    <div className="contact-info">
      <p>Email: contact@spaceexplorer.com</p>
      <p>Follow us on social media for updates</p>
    </div>
  </div>
);

function App() {
  const location = useLocation();
  
  return (
    <div className="App">
      {/* Navbar and Background are always visible */}
      <Navbar />
      <Background />
      
      <div className="main-content">
        <Routes>
        {/* Home Route (Default/Index) */}
        <Route path="/" element={<Home />} /> 
        
        {/* Auth Routes */}
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signin />} />
        
        {/* App Routes */}
        <Route path="/profile" element={<Profile />} />
        <Route path="/search" element={<SearchEngine />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        
        {/* 404 Route - Always placed last */}
        <Route path="*" element={
          <div style={{ 
            display: 'flex', 
            justifyContent: 'center', 
            alignItems: 'center', 
            height: '70vh',
            flexDirection: 'column',
            textAlign: 'center',
            padding: '20px',
            color: 'white'
          }}>
            <h1>404 - Page Not Found</h1>
            <p>The page you're looking for doesn't exist or has been moved.</p>
            <a href="/" style={{ marginTop: '20px', color: '#00C8FF' }}>Return Home</a>
          </div>
        } />
        </Routes>
      </div>
    </div>
  );
}

export default App;