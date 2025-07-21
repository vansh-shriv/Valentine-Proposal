import React, { useState } from 'react';
import './ReasonButton.css';

const reasons = [
  'You make my heart skip a beat! 💓',
  'You are my favorite hello and my hardest goodbye.',
  'You make every day feel like Valentine’s Day.',
  'You are the peanut butter to my jelly.',
  'You light up my world like nobody else.',
  'You give the best hugs in the universe!',
  'You are my best adventure.',
  'You make me laugh when I want to cry.',
  'You are my sunshine on a cloudy day.',
  'You are my person, always and forever.',
];

const ReasonButton: React.FC = () => {
  const [reason, setReason] = useState('');
  const [show, setShow] = useState(false);
  const handleClick = () => {
    const idx = Math.floor(Math.random() * reasons.length);
    setReason(reasons[idx]);
    setShow(true);
    setTimeout(() => setShow(false), 2500);
  };
  return (
    <div className="reason-container">
      <button className="reason-btn" onClick={handleClick}>
        💌 Show me a reason you love me
      </button>
      {show && (
        <div className="reason-modal">
          <span className="heart-icon">❤️</span>
          <span className="reason-text">{reason}</span>
        </div>
      )}
    </div>
  );
};

export default ReasonButton; 