import React from 'react';
import { useChallengeContext } from '../../contexts/ChallengeContext';

function NavigationButtons() {
  const { challenges, currentChallengeIndex, setCurrentChallengeIndex } = useChallengeContext();

  // Ensure challenges is an array and has elements
  const hasChallenges = Array.isArray(challenges) && challenges.length > 0;
  const currentIndex = hasChallenges ? currentChallengeIndex : -1;

  const handlePrevious = () => {
    if (currentIndex > 0) {
      setCurrentChallengeIndex(currentIndex - 1);
    }
  };

  const handleNext = () => {
    if (hasChallenges && currentIndex < challenges.length - 1) {
      setCurrentChallengeIndex(currentIndex + 1);
    }
  };

  if (!hasChallenges) {
    return null; // or return some placeholder UI
  }

  return (
    <div>
      <button onClick={handlePrevious} disabled={currentIndex === 0}>
        Previous
      </button>
      <button onClick={handleNext} disabled={currentIndex === challenges.length - 1}>
        Next
      </button>
    </div>
  );
}

export default NavigationButtons;