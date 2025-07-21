import * as React from 'react';
import { useState } from 'react';
import './CouponGallery.css';

const coupons = [
  { front: '🤗 Hug', back: 'Redeem for a warm, snuggly hug!' },
  { front: '💋 Kiss', back: 'Redeem for a sweet kiss anytime!' },
  { front: '🍿 Movie Night', back: 'Let’s watch your favorite movie together!' },
  { front: '🌹 Date Night', back: 'A special date night, just us two!' },
];

const CouponGallery: React.FC = () => {
  const [flipped, setFlipped] = useState(Array(coupons.length).fill(false));

  const handleFlip = (idx: number) => {
    setFlipped(f => f.map((v, i) => (i === idx ? !v : v)));
  };

  return (
    <div className="coupon-gallery">
      {coupons.map((coupon, idx) => (
        <div
          key={idx}
          className={`coupon-card${flipped[idx] ? ' flipped' : ''}`}
          onClick={() => handleFlip(idx)}
        >
          <div className="coupon-card-inner">
            <div className="coupon-card-front">{coupon.front}</div>
            <div className="coupon-card-back">{coupon.back}</div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CouponGallery; 