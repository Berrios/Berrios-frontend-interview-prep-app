import React, { useState, useEffect } from 'react';
import { useChallengeContext } from '../contexts/ChallengeContext';
import ChallengeDescription from '../components/ChallengeDescription/ChallengeDescription';
import CodeEditorWindow from '../components/CodeEditorWindow/CodeEditorWindow';
import Console from '../components/Console/Console';
import Timer from '../components/Timer/Timer';
import NavigationButtons from '../components/NavigationButtons/NavigationButtons';
import { testCases as allTestCases } from '../data/testCases';
import '../styles/ChallengeApp.css';

/* eslint-disable no-unused-vars, no-eval */

function ChallengeApp() {
  const { currentChallenge, challenges } = useChallengeContext();
  const [code, setCode] = useState('');
  const [testCases, setTestCases] = useState('');
  const [consoleLogs, setConsoleLogs] = useState([]);
  const [activeTab, setActiveTab] = useState('editor');
  const [timerElapsed, setTimerElapsed] = useState(false);

  useEffect(() => {
    if (currentChallenge) {
      setCode(currentChallenge.initialCode || '');
      setTestCases(allTestCases[currentChallenge.id] || '');
    }
  }, [currentChallenge]);

  const handleCodeChange = (value) => {
    setCode(value);
  };

  const handleTestCasesChange = (value) => {
    setTestCases(value);
  };

  const handleRunCode = () => {
    const logs = [];
    const originalConsoleLog = console.log;
    console.log = (...args) => {
      logs.push(args.join(' '));
    };

    try {
      // eslint-disable-next-line no-new-func
      const userFunction = new Function('return ' + code)();
      
      const describe = (desc, fn) => {
        logs.push(`Describe: ${desc}`);
        fn();
      };
      
      const test = (desc, fn) => {
        logs.push(`  Test: ${desc}`);
        try {
          fn();
          logs.push('    PASSED');
        } catch (error) {
          logs.push(`    FAILED: ${error.message}`);
        }
      };
      
      const expect = (actual) => ({
        toBe: (expected) => {
          if (actual !== expected) {
            throw new Error(`Expected ${expected}, but got ${actual}`);
          }
        },
        toEqual: (expected) => {
          if (JSON.stringify(actual) !== JSON.stringify(expected)) {
            throw new Error(`Expected ${JSON.stringify(expected)}, but got ${JSON.stringify(actual)}`);
          }
        },
        toBeGreaterThanOrEqual: (expected) => {
          if (actual < expected) {
            throw new Error(`Expected ${actual} to be greater than or equal to ${expected}`);
          }
        },
        toBeLessThanOrEqual: (expected) => {
          if (actual > expected) {
            throw new Error(`Expected ${actual} to be less than or equal to ${expected}`);
          }
        }
      });

      // Run the tests
      eval(`
        const ${currentChallenge.functionName} = ${userFunction.toString()};
        ${testCases}
      `);

    } catch (error) {
      logs.push(`Error: ${error.message}`);
    }

    console.log = originalConsoleLog;
    setConsoleLogs(logs);
    setActiveTab('console');
  };

  const handleResetCode = () => {
    if (currentChallenge && currentChallenge.initialCode) {
      setCode(currentChallenge.initialCode);
    } else {
      setCode('');
    }
    setConsoleLogs([]);
  };

  const handleTimerElapsed = () => {
    setTimerElapsed(true);
  };

  if (challenges.length === 0) {
    return <div>Loading challenges...</div>;
  }

  if (!currentChallenge) {
    return <div>No challenge selected. Please try refreshing the page.</div>;
  }

  return (
    <div className="challenge-app">
      <Timer onTimerElapsed={handleTimerElapsed} />
      <div className="challenge-content">
        <ChallengeDescription 
          challenge={currentChallenge} 
          showMethods={timerElapsed}
        />
        <div className="editor-console-container">
          <div className="tabs">
            <button 
              onClick={() => setActiveTab('editor')} 
              className={activeTab === 'editor' ? 'active' : ''}
            >
              Code Editor
            </button>
            <button 
              onClick={() => setActiveTab('testCases')} 
              className={activeTab === 'testCases' ? 'active' : ''}
            >
              Test Cases
            </button>
            <button 
              onClick={() => setActiveTab('console')} 
              className={activeTab === 'console' ? 'active' : ''}
            >
              Console
            </button>
          </div>
          {activeTab === 'editor' && (
            <CodeEditorWindow
              code={code}
              onChange={handleCodeChange}
              language="javascript"
              theme="vs-dark"
            />
          )}
          {activeTab === 'testCases' && (
            <CodeEditorWindow
              code={testCases}
              onChange={handleTestCasesChange}
              language="javascript"
              theme="vs-dark"
            />
          )}
          {activeTab === 'console' && (
            <Console logs={consoleLogs} />
          )}
          <div className="button-container">
            <button onClick={handleRunCode}>Run Code</button>
            <button onClick={handleResetCode}>Reset Code</button>
          </div>
        </div>
      </div>
      <div className="navigation-container">
        <NavigationButtons />
      </div>
    </div>
  );
}

export default ChallengeApp;