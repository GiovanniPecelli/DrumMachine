import React, { useState } from 'react';
import DrumPad from './DrumPad';
import sounds from './sounds';
import './styles.css';

const App = () => {
  const [displayText, setDisplayText] = useState('');
  const [volume, setVolume] = useState(1);

  return (
    <div id="drum-machine">
      <div id="display">{displayText}</div>
      <div className="volume-control">
        <span>Volume: {Math.round(volume * 100)}%</span>
        <input
          type="range"
          min="0"
          max="1"
          step="0.01"
          value={volume}
          onChange={(e) => setVolume(parseFloat(e.target.value))}
        />
      </div>
      <div className="drum-pads-container">
        {sounds.map((sound) => (
          <DrumPad
            key={sound.id}
            sound={sound}
            onPadClick={setDisplayText}
            volume = {volume}
          />
        ))}
      </div>
    </div>
  );
};

export default App;