import React from 'react';
import './Console.css';

const Console = ({ logs }) => (
  <div className="console">
    {logs.map((log, index) => (
      <div key={index}>{log}</div>
    ))}
  </div>
);

export default Console;