import React from 'react';
import './TestCases.css';

const TestCases = ({ testCases }) => (
  <div className="test-cases">
    {testCases.map((testCase, index) => (
      <div key={index}>
        <p>Input: {JSON.stringify(testCase.input)}</p>
        <p>Expected: {JSON.stringify(testCase.expected)}</p>
      </div>
    ))}
  </div>
);

export default TestCases;