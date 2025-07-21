import React, { useState } from 'react';
import './StartScreen.css';

type Props = {
  onYes: () => void;
};

const StartScreen: React.FC<Props> = ({ onYes }) => {
  const [noButtonStyle, setNoButtonStyle] = useState({});
  const moveNoButton = () => {
    const noButton = document.getElementById('no-btn');

    if (!noButton) return;
    const buttonRect = noButton.getBoundingClientRect();

    const maxX = window.innerWidth - buttonRect.width;
    const maxY = window.innerHeight - buttonRect.height;

    const x = Math.random() * maxX;
    const y = Math.random() * maxY;

    setNoButtonStyle({
      position: 'fixed',
      left: 0,
      top: 0,
      transform: `translate(${x}px, ${y}px) scale(1.1)`,
      transition: 'transform 1s cubic-bezier(.34,1.56,.64,1)',
    });
  };

  return (
    <div className="start-screen">
      <h1 style={{ color: 'hotpink'}}>Will you be my Valentine? 🥺</h1>
      <div className="button-row" id="button-row">
        <button className="yes-btn" onClick={onYes}>Yes 💖</button>
        <button
          className="no-btn"
          id="no-btn"
          style={noButtonStyle}
          onMouseEnter={moveNoButton}
          onClick={moveNoButton}
        >
          No 😔
        </button>
      </div>
    </div>
  );
};

export default StartScreen;
