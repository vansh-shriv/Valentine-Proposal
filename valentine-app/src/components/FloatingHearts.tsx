import React from 'react';
import Player from 'lottie-react';
import floatingHearts from '../assets/floating-hearts.json';
import './FloatingHearts.css';

const FloatingHearts: React.FC = () => (
  <div className="floating-hearts-bg">
    <Player
      animationData={floatingHearts}
      loop
      autoplay
      style={{ width: '100vw', height: '100vh', position: 'fixed', top: 0, left: -0, zIndex: 0, pointerEvents: 'none' }}
    />
  </div>
);

export default FloatingHearts; 