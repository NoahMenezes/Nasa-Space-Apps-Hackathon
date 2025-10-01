import React, { useState } from 'react';
import './Signup.css'; // Note: Linking to its own CSS file

const Signup = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically call a registration/sign-up API
    console.log('Signing up with:', { username, email, password });
    alert('Sign-Up attempt initiated. Check console for details.');
  };

  return (
    <div className="auth-container">
      <div className="signup-box">
        <h2>Join the Fleet! 🛰️</h2>
        <form onSubmit={handleSubmit}>
          
          <div className="input-group">
            <label htmlFor="username">Username/Callsign</label>
            <input
              type="text"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>

          <div className="input-group">
            <label htmlFor="email">Email Address</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div className="input-group">
            <label htmlFor="password">Create Password</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <button type="submit" className="auth-button">
            Register
          </button>
        </form>
        
        <p className="auth-switch">
          Already a crew member? <a href="/login">Login here</a>
        </p>
      </div>
    </div>
  );
};

export default Signup;