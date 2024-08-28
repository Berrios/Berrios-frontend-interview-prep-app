import React from 'react';
import './Console.css';

function Console({ logs }) {
  const renderTestCase = (testCase) => {
    if (testCase.status === 'ERROR') {
      return (
        <div className="test-case error">
          <h4>Test Case {testCase.testCaseNumber}: ERROR</h4>
          <p><strong>Input:</strong> {testCase.input}</p>
          <p><strong>Error:</strong> {testCase.error}</p>
        </div>
      );
    }

    return (
      <div className={`test-case ${testCase.status.toLowerCase()}`}>
        <h4>Test Case {testCase.testCaseNumber}: {testCase.status}</h4>
        <p><strong>Input:</strong> {testCase.input}</p>
        <p><strong>Expected:</strong> {testCase.expected}</p>
        <p><strong>Actual:</strong> {testCase.actual}</p>
      </div>
    );
  };

  const renderLog = (log) => {
    try {
      const parsedLog = JSON.parse(log);
      if (Array.isArray(parsedLog)) {
        return (
          <div className="test-results">
            {parsedLog.map((testCase, index) => (
              <React.Fragment key={index}>
                {renderTestCase(testCase)}
              </React.Fragment>
            ))}
          </div>
        );
      } else if (parsedLog.error) {
        return <div className="error">Error: {parsedLog.error}</div>;
      }
    } catch (e) {
      // If parsing fails, treat it as a regular log message
      return <div className="log-message">{log}</div>;
    }
  };

  return (
    <div className="console">
      <h3>Console Output:</h3>
      <div className="console-content">
        {logs.map((log, index) => (
          <React.Fragment key={index}>
            {renderLog(log)}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
}

export default Console;