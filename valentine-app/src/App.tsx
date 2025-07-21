import * as React from 'react';
import { useState, useEffect, useRef } from 'react';
import StartScreen from './components/StartScreen';
import GiftBox from './components/GiftBox';
import CouponGallery from './components/CouponGallery';
import ReasonButton from './components/ReasonButton';
import FloatingHearts from './components/FloatingHearts';
import BackgroundMusic from './components/BackgroundMusic';
import ConfettiBurst from './components/ConfettiBurst';
import MoreHearts from './components/MoreHearts';

const App: React.FC = () => {
  const [started, setStarted] = useState(false);
  const [boxOpen, setBoxOpen] = useState(false);
  const [showConfetti, setShowConfetti] = useState(false);
  const [showFinal, setShowFinal] = useState(false);
  const confettiPlayed = useRef(false);

  useEffect(() => {
    if (boxOpen && !confettiPlayed.current) {
      setShowConfetti(true);
      confettiPlayed.current = true;
      setTimeout(() => setShowConfetti(false), 2000);
      setTimeout(() => setShowFinal(true), 20000); // Show final message after 20s
    }
  }, [boxOpen]);

  const handleCloseFinal = () => setShowFinal(false);

  return (
    <div className="app-bg">
      <div className="background-gradient" />
      <FloatingHearts />
      <MoreHearts />
      <BackgroundMusic />
      {showConfetti && <ConfettiBurst />}
      {!started ? (
        <StartScreen onYes={() => setStarted(true)} />
      ) : (
        <GiftBox isOpen={boxOpen} onOpen={() => setBoxOpen(true)}>
          {boxOpen && (
            <>
              <CouponGallery />
              <ReasonButton />
            </>
          )}
        </GiftBox>
      )}
      {showFinal && (
        <div className="final-modal">
          <div className="final-modal-content">
            <span role="img" aria-label="heart" style={{ fontSize: '2.5rem' }}>💖</span>
            <div className="final-modal-message">
              You are my forever Valentine!
            </div>
            <button className="final-close-btn" onClick={handleCloseFinal}>Aww, thank you!</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default App; 