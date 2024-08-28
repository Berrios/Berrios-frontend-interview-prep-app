import React from 'react';
import './ChallengeDescription.css';

function ChallengeDescription({ challenge, showMethods }) {
  if (!challenge) {
    return <div>No challenge selected.</div>;
  }

  return (
    <div className="challenge-description">
      <h2>{challenge.name}</h2>
      <p className="section">{challenge.section}</p>
      <p className="description">{challenge.description}</p>
      
      <h3>Example:</h3>
      <pre className="example">
        <strong>Input:</strong> {challenge.example.input}
        <br />
        <strong>Output:</strong> {challenge.example.output}
      </pre>
      
      {showMethods && (
        <div className="methods">
          <h3>Suggested Methods:</h3>
          <ul>
            {challenge.methods.map((method, index) => (
              <li key={index}>{method}</li>
            ))}
          </ul>
        </div>
      )}
      
      <h3>Time Complexity:</h3>
      <p className="big-o">{challenge.bigONotation}</p>
    </div>
  );
}

export default ChallengeDescription;