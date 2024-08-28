import React, { useState, useEffect } from 'react';
import '../styles/Timer.css';

function Timer() {
  const [time, setTime] = useState(15 * 60); // 15 minutes in seconds
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    let interval;
    if (isRunning && time > 0) {
      interval = setInterval(() => setTime(time - 1), 1000);
    } else if (time === 0) {
      alert("Time's up!");
    }
    return () => clearInterval(interval);
  }, [isRunning, time]);

  const toggleTimer = () => setIsRunning(!isRunning);

  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  return (
    <div className="timer">
      <span>{formatTime(time)}</span>
      <button onClick={toggleTimer}>
        {isRunning ? '⏸' : '▶️'}
      </button>
    </div>
  );
}

export default Timer;