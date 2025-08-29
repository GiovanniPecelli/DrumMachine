import React, { useEffect } from 'react';

const DrumPad = ({ sound, onPadClick, volume }) => {
  const playSound = () => {
    const audio = document.getElementById(sound.keyTrigger);
    audio.currentTime = 0;
    audio.volume = volume;
    audio.play();
    onPadClick(sound.id.replace(/-/g, ' '));
  };

  const handleKeyPress = (e) => {
    if (e.keyCode === sound.keyCode) {
      playSound();
    }
  };

  useEffect(() => {
    document.addEventListener('keydown', handleKeyPress);
    return () => {
      document.removeEventListener('keydown', handleKeyPress);
    };
  }, [sound]);

  return (
    <div
      className="drum-pad"
      id={sound.id}
      onClick={playSound}
    >
      {sound.keyTrigger}
      <audio
        className="clip"
        id={sound.keyTrigger}
        src={sound.url}
      ></audio>
    </div>
  );
};

export default DrumPad;