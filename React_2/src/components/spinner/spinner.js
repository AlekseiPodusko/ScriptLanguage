
// App.js
import React from 'react';
import './spinner.css';

function App() {
  return (
    <div className="App">
      <div className="speaker">
        <div className="eye left-eye"></div>
        <div className="eye right-eye"></div>
        <div className="mouth"></div>
        <div className="body"></div>
      </div>
      <button className="speak-button" onClick={toggleSpeaking}>
        Speak!
      </button>
    </div>
  );
}

function toggleSpeaking() {
  const speaker = document.querySelector('.speaker');
  speaker.classList.toggle('speaking');

  speaker.addEventListener('animationend', () => {
    speaker.classList.remove('speaking');
  });
}

export default App;
