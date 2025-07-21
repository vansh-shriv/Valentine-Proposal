import * as React from 'react';
import Player from 'lottie-react';
import giftBoxClosed from '../assets/giftbox-closed.json';
import giftBoxOpen from '../assets/giftbox-open.json';
import './GiftBox.css';

type Props = {
  onOpen: () => void;
  isOpen: boolean;
  children?: React.ReactNode;
};

const GiftBox: React.FC<Props> = ({ onOpen, isOpen, children }) => {
  return (
    <div className="giftbox-container">
      {!isOpen ? (
        <div className="giftbox-shake" onClick={onOpen} title="Click to open!">
          <Player autoplay loop animationData={giftBoxClosed} style={{ height: 200, width: 200 }} />
        </div>
      ) : (
        <div className="giftbox-opened">
          <Player autoplay loop animationData={giftBoxOpen} style={{ height: 200, width: 200 }} />
          <div className="giftbox-content">
            {children && React.Children.count(children) > 0 ? (
              children
            ) : (
              <div style={{ color: '#d72660', fontWeight: 600, fontSize: '1.2rem', textAlign: 'center' }}>
                Surprise! Here are your Valentine coupons and reasons!
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default GiftBox; 