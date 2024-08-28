import React, { useState } from 'react';
import { Controlled as CodeMirror } from 'react-codemirror2';
import 'codemirror/lib/codemirror.css';
import 'codemirror/theme/material.css';
import 'codemirror/mode/javascript/javascript';
import './CodeEditor.css';

function CodeEditor({ code, setCode, onRun, onSubmit, onReset, testCases, consoleLogs }) {
  const [activeTab, setActiveTab] = useState('editor');

  const options = {
    mode: 'javascript',
    theme: 'material',
    lineNumbers: true,
  };

  return (
    <div className="code-editor">
      <div className="editor-tabs">
        <button
          className={`editor-tab ${activeTab === 'editor' ? 'active' : ''}`}
          onClick={() => setActiveTab('editor')}
        >
          Editor
        </button>
        <button
          className={`editor-tab ${activeTab === 'console' ? 'active' : ''}`}
          onClick={() => setActiveTab('console')}
        >
          Console
        </button>
        <button
          className={`editor-tab ${activeTab === 'testCases' ? 'active' : ''}`}
          onClick={() => setActiveTab('testCases')}
        >
          Test Cases
        </button>
      </div>
      <div className="editor-content">
        {activeTab === 'editor' && (
          <CodeMirror
            value={code}
            options={options}
            onBeforeChange={(editor, data, value) => setCode(value)}
          />
        )}
        {activeTab === 'console' && (
          <div className="console-output">
            {consoleLogs.map((log, index) => (
              <div key={index}>{log}</div>
            ))}
          </div>
        )}
        {activeTab === 'testCases' && (
          <div className="test-cases">
            {testCases.map((testCase, index) => (
              <div key={index}>
                <h4>Test Case {index + 1}</h4>
                <pre>{JSON.stringify(testCase, null, 2)}</pre>
              </div>
            ))}
          </div>
        )}
      </div>
      <div className="editor-buttons">
        <button onClick={onRun}>Run</button>
        <button onClick={onSubmit}>Submit</button>
        <button onClick={onReset}>Reset</button>
      </div>
    </div>
  );
}

export default CodeEditor;