import React from 'react';
import './App.css';
import Background from './components/Background';
import Navbar from './components/Navbar'; // Import the new Navbar component

function App() {
  return (
    <div className="App">
      {/* 1. Navbar is positioned at the top with a high Z-index */}
      <Navbar /> 
      
      {/* 2. Background runs the 3D scene in the back */}
      <Background />
      
      {/* Any other content, like foreground text, should be a sibling here and also use z-index to appear above the background */}
    </div>
  );
}

export default App;