import React, { useEffect } from 'react';
import { formatTime } from '../../utils/timeFormatter';
import './Timer.css';

const Timer = ({ time, setTime, isRunning, setIsRunning }) => {
  useEffect(() => {
    let timer;
    if (isRunning && time > 0) {
      timer = setInterval(() => {
        setTime((prevTime) => (prevTime > 0 ? prevTime - 1 : 0));
      }, 1000);
    }
    return () => clearInterval(timer);
  }, [isRunning, time, setTime]);

  return (
    <div className="timer">
      <span>{formatTime(time)}</span>
      <button onClick={() => setIsRunning(!isRunning)}>
        {isRunning ? 'Pause' : 'Play'}
      </button>
    </div>
  );
};

export default Timer;