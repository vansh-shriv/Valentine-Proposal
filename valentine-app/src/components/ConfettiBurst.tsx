import { useEffect } from 'react';
import confetti from 'canvas-confetti';

const ConfettiBurst: React.FC = () => {
  useEffect(() => {
    confetti({
      particleCount: 120,
      spread: 80,
      origin: { y: 0.6 },
      colors: ['#ffb6d5', '#ff69b4', '#fff0f6', '#d72660', '#ffe6f0'],
      scalar: 1.2,
    });
  }, []);
  return null;
};

export default ConfettiBurst; 