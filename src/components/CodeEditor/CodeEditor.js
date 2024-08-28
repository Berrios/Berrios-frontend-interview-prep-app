import React from 'react';
import './CodeEditor.css';

const CodeEditor = ({ code, setCode }) => (
  <textarea
    value={code}
    onChange={(e) => setCode(e.target.value)}
    className="code-editor"
  />
);

export default CodeEditor;