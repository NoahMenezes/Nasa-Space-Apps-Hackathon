import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';

// Import all components from the components directory
import Background from './components/Background';
import Navbar from './components/Navbar';
import Login from './components/Login';
// Signin.js contains the Registration/Sign Up UI.
import SigninComponent from './components/Signin'; 
import Profile from './components/Profile'; // <-- New Profile Component Import
import SearchEngine from './components/SearchEngine'; // <-- NEW IMPORT

function App() {
  return (
    // REMOVED <Router> WRAPPER HERE to fix nested router error.
    <div className="App">
      {/* Navbar and Background are outside Routes so they are always visible */}
      <Navbar />
      <Background />
      
      {/* 2. Define the Routes for component visibility */}
      <Routes>
        {/* Default/Home Route: Renders nothing specific (just navbar/background) */}
        <Route path="/" element={null} /> 
        
        {/* Login Route: Renders the Login component */}
        <Route path="/login" element={<Login />} />
        
        {/* Signup Route: Renders the registration component */}
        <Route path="/signup" element={<SigninComponent />} />

        {/* NEW: Profile Route. Renders the Profile component when user navigates to /profile */}
        <Route path="/profile" element={<Profile />} /> 
        
        {/* NEW: Search Engine Route. Renders the SearchEngine component at /search */}
        <Route path="/search" element={<SearchEngine />} /> 
      </Routes>
    </div>
    // REMOVED </Router> WRAPPER HERE
  );
}

export default App;
