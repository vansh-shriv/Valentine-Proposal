import React, { useEffect, useRef } from 'react';
import music from '../assets/valentine-music.mp3';

const BackgroundMusic: React.FC = () => {
  const audioRef = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    const audio = audioRef.current;
    if (audio) {
      audio.volume = 0.3;
      audio.play().catch(() => {});
    }
  }, []);

  return <audio ref={audioRef} src={music} loop autoPlay />;
};

export default BackgroundMusic; 