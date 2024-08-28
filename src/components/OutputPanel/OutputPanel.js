import React from 'react';

function OutputPanel({ output, consoleLogs }) {
  return (
    <div className="output-panel">
      <h3>Output:</h3>
      <pre>{output}</pre>
      <h3>Console Logs:</h3>
      <pre>{consoleLogs.join('\n')}</pre>
    </div>
  );
}

export default OutputPanel;