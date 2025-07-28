import React, { useState, useRef } from 'react';

function Timer() {
  const [seconds, setSeconds] = useState(0);       // to display time
  const timerRef = useRef(null);                   // to store interval ID

  // Start timer
  const startTimer = () => {
    if (timerRef.current !== null) return;         // prevent multiple timers
    timerRef.current = setInterval(() => {
      setSeconds(prev => prev + 1);
    }, 1000); // every 1 second
  };

  // Pause timer
  const pauseTimer = () => {
    clearInterval(timerRef.current);               // stop the timer
    timerRef.current = null;
  };

  // Reset timer
  const resetTimer = () => {
    clearInterval(timerRef.current);
    timerRef.current = null;
    setSeconds(0);                                 // reset time to 0
  };

  return (
    <div>
      <h2>Timer: {seconds} seconds</h2>
      <button onClick={startTimer}>Start</button>
      <button onClick={pauseTimer}>Pause</button>
      <button onClick={resetTimer}>Reset</button>
    </div>
  );
}

export default Timer;
