import React from 'react';
import '../styles/CodeEditor.css';

function CodeEditor({ code, setCode, onRun, onSubmit, onReset }) {
  return (
    <div className="code-editor">
      <div className="editor-tabs">
        <button className="tab active">Code</button>
        <button className="tab">Test Cases</button>
        <button className="tab">Console</button>
      </div>
      <textarea
        value={code}
        onChange={(e) => setCode(e.target.value)}
        className="code-textarea"
      />
      <div className="editor-buttons">
        <button onClick={onSubmit}>Submit</button>
        <button onClick={onRun}>Run</button>
        <button onClick={onReset}>Reset</button>
      </div>
    </div>
  );
}

export default CodeEditor;