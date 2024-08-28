import React from 'react';
import { useChallengeContext } from '../../contexts/ChallengeContext';
import './NavigationButtons.css';

function NavigationButtons() {
  const { currentChallenge, prevChallenge, nextChallenge, challenges } = useChallengeContext();

  const currentIndex = challenges.findIndex(c => c.id === currentChallenge.id);
  const isFirst = currentIndex === 0;
  const isLast = currentIndex === challenges.length - 1;

  return (
    <div className="navigation-buttons">
      {!isFirst && <button onClick={prevChallenge}>Previous</button>}
      <span className="current-section">{currentChallenge.section}</span>
      {!isLast && <button onClick={nextChallenge}>Next</button>}
    </div>
  );
}

export default NavigationButtons;