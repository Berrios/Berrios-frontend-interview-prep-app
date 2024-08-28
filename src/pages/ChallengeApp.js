import React, { useState } from 'react';
import { useChallengeContext } from '../contexts/ChallengeContext';
import ChallengeDescription from '../components/ChallengeDescription/ChallengeDescription';
import CodeEditorWindow from '../components/CodeEditorWindow';
import Console from '../components/Console';
import Timer from '../components/Timer/Timer';
import NavigationButtons from '../components/NavigationButtons/NavigationButtons';
import './ChallengeApp.css';

function ChallengeApp() {
  const { currentChallenge } = useChallengeContext();
  const [code, setCode] = useState(currentChallenge.initialCode || '');
  const [consoleLogs, setConsoleLogs] = useState([]);

  const handleCodeChange = (value) => {
    setCode(value);
  };

  const handleRunCode = () => {
    const logs = [];
    const originalConsoleLog = console.log;
    console.log = (...args) => {
      logs.push(args.join(' '));
    };

    try {
      // eslint-disable-next-line no-new-func
      new Function(code)();
    } catch (error) {
      logs.push(`Error: ${error.message}`);
    }

    console.log = originalConsoleLog;
    setConsoleLogs(logs);
  };

  const handleResetCode = () => {
    setCode(currentChallenge.initialCode || '');
    setConsoleLogs([]);
  };

  return (
    <div className="challenge-app">
      <Timer />
      <div className="challenge-content">
        <ChallengeDescription challenge={currentChallenge} />
        <div className="editor-console-container">
          <CodeEditorWindow
            code={code}
            onChange={handleCodeChange}
            language="javascript"
            theme="vs-dark"
          />
          <div className="button-container">
            <button onClick={handleRunCode}>Run Code</button>
            <button onClick={handleResetCode}>Reset Code</button>
          </div>
          <Console logs={consoleLogs} />
        </div>
      </div>
      <NavigationButtons />
    </div>
  );
}

export default ChallengeApp;