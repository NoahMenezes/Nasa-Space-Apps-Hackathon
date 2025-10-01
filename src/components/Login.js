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
        <h2>Welcome Back, Explorer! 🌌</h2>
        <form onSubmit={handleSubmit}>
          
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
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <button type="submit" className="auth-button">
            Login
          </button>
        </form>
        
        <p className="auth-switch">
          New to Deep Space Explorer? <a href="/signup">Create an account</a>
        </p>
      </div>
    </div>
  );
};

export default Login;