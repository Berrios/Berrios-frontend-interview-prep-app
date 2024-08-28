import React, { useState } from 'react';
import { useChallengeContext } from '../contexts/ChallengeContext';
import ChallengeDescription from '../components/ChallengeDescription';
import CodeEditor from '../components/CodeEditor';
import OutputPanel from '../components/OutputPanel';
import Timer from '../components/Timer';
import NavigationButtons from '../components/NavigationButtons';
import { runTestCases } from '../utils/testRunner';
import { executeCode } from '../utils/codeExecutor';
import '../styles/ChallengeApp.css';

function ChallengeApp() {
  const { currentChallenge } = useChallengeContext();
  const [code, setCode] = useState('');
  const [output, setOutput] = useState('');
  const [consoleLogs, setConsoleLogs] = useState([]);

  const handleRunCode = () => {
    const { result, logs } = executeCode(code);
    setOutput(result);
    setConsoleLogs(logs);
  };

  const handleSubmitCode = () => {
    const testResults = runTestCases(currentChallenge.testCases, code);
    setOutput(JSON.stringify(testResults, null, 2));
  };

  const handleResetCode = () => {
    setCode(currentChallenge.initialCode);
  };

  return (
    <div className="challenge-app">
      <Timer />
      <div className="challenge-content">
        <ChallengeDescription challenge={currentChallenge} />
        <div className="right-panel">
          <CodeEditor
            code={code}
            setCode={setCode}
            onRun={handleRunCode}
            onSubmit={handleSubmitCode}
            onReset={handleResetCode}
          />
          <OutputPanel output={output} consoleLogs={consoleLogs} />
        </div>
      </div>
      <NavigationButtons />
    </div>
  );
}

export default ChallengeApp;