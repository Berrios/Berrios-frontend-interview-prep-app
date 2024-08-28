import React from 'react';
import '../styles/ChallengeDescription.css';

function ChallengeDescription({ challenge }) {
  return (
    <div className="challenge-description">
      <h2>{challenge.title}</h2>
      <p>{challenge.description}</p>
      <h3>Examples:</h3>
      <pre>{challenge.examples}</pre>
    </div>
  );
}

export default ChallengeDescription;