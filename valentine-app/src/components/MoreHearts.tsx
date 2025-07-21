import React, { useEffect, useState } from 'react';
import './MoreHearts.css';

const random = (min: number, max: number) => Math.random() * (max - min) + min;

const Heart: React.FC<{ left: number; duration: number; size: number; delay: number; drift: number }>
  = ({ left, duration, size, delay, drift }) => (
  <div
    className="css-heart"
    style={{
      left: `${left}%`,
      animationDuration: `${duration}s`,
      width: `${size}px`,
      height: `${size}px`,
      animationDelay: `${delay}s`,
      '--drift': `${drift}px`,
    } as React.CSSProperties}
  />
);

const MoreHearts: React.FC = () => {
  const [hearts, setHearts] = useState<any[]>([]);

  useEffect(() => {
    const interval = setInterval(() => {
      setHearts(hs => [
        ...hs,
        {
          id: Math.random(),
          left: random(5, 95),
          duration: random(4, 8),
          size: random(14, 28),
          delay: 0,
          drift: random(-60, 60),
        },
      ].slice(-16));
    }, 900);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="more-hearts-container">
      {hearts.map(h => (
        <Heart key={h.id} left={h.left} duration={h.duration} size={h.size} delay={h.delay} drift={h.drift} />
      ))}
    </div>
  );
};

export default MoreHearts; 