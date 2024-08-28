import React, { createContext, useContext, useState } from 'react';
import challenges from '../data/challenges';

const ChallengeContext = createContext();

export function ChallengeProvider({ children }) {
  const [currentChallenge, setCurrentChallenge] = useState(challenges[0]);

  const prevChallenge = () => {
    const currentIndex = challenges.findIndex(c => c.id === currentChallenge.id);
    if (currentIndex > 0) {
      setCurrentChallenge(challenges[currentIndex - 1]);
    }
  };

  const nextChallenge = () => {
    const currentIndex = challenges.findIndex(c => c.id === currentChallenge.id);
    if (currentIndex < challenges.length - 1) {
      setCurrentChallenge(challenges[currentIndex + 1]);
    }
  };

  return (
    <ChallengeContext.Provider value={{ currentChallenge, setCurrentChallenge, prevChallenge, nextChallenge, challenges }}>
      {children}
    </ChallengeContext.Provider>
  );
}

export function useChallengeContext() {
  return useContext(ChallengeContext);
}