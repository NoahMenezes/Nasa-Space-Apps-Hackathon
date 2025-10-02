import React, { useState } from 'react';
import './Login.css';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically call an authentication API
    console.log('Logging in with:', { email, password });
    alert('Login attempt initiated. Check console for details.');
  };

  return (
    <div className="auth-container">
      <div className="login-box">
        {/* Changed text and emoji for more space-opera aesthetic */}
        <h2>Access Terminal 🛰️</h2> 
        <form onSubmit={handleSubmit}>
          
          <div className="input-group">
            {/* INPUT FIRST for CSS Adjacent Sibling Selector */}
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            {/* LABEL SECOND */}
            <label htmlFor="email">Email Address</label> 
          </div>

          <div className="input-group">
            {/* INPUT FIRST for CSS Adjacent Sibling Selector */}
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            {/* LABEL SECOND */}
            <label htmlFor="password">Password</label>
          </div>

          <button type="submit" className="auth-button">
            Engage Drive
          </button>
        </form>
        
        <p className="auth-switch">
          New to Deep Space Explorer? <a href="/signup">Establish Credentials</a>
        </p>
      </div>
    </div>
  );
};

export default Login;