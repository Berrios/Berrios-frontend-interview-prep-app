import React from 'react';
import CodeEditorWindow from '../CodeEditorWindow/CodeEditorWindow';
import './TestCases.css';

function TestCases({ testCases, onChange }) {
  return (
    <div className="test-cases">
      <CodeEditorWindow
        code={testCases}
        onChange={onChange}
        language="javascript"
        theme="vs-dark"
      />
    </div>
  );
}

export default TestCases;