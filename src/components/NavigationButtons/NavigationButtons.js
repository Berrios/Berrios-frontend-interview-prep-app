import React from 'react';
import { useChallengeContext } from '../contexts/ChallengeContext';
import '../styles/NavigationButtons.css';

function NavigationButtons() {
  const { currentChallenge, setCurrentChallenge, challenges } = useChallengeContext();

  const currentIndex = challenges.findIndex(c => c.id === currentChallenge.id);

  const handlePrevious = () => {
    if (currentIndex > 0) {
      setCurrentChallenge(challenges[currentIndex - 1]);
    }
  };

  const handleNext = () => {
    if (currentIndex < challenges.length - 1) {
      setCurrentChallenge(challenges[currentIndex + 1]);
    }
  };

  return (
    <div className="navigation-buttons">
      <button onClick={handlePrevious} disabled={currentIndex === 0}>Previous</button>
      <span>{currentChallenge.category}</span>
      <button onClick={handleNext} disabled={currentIndex === challenges.length - 1}>Next</button>
    </div>
  );
}

export default NavigationButtons;