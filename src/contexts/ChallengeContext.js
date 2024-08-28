import React, { createContext, useContext, useState } from 'react';
import challenges from '../data/challenges';

const ChallengeContext = createContext();

export function ChallengeProvider({ children }) {
  const [currentChallenge, setCurrentChallenge] = useState(challenges[0]);

  return (
    <ChallengeContext.Provider value={{ currentChallenge, setCurrentChallenge, challenges }}>
      {children}
    </ChallengeContext.Provider>
  );
}

export function useChallengeContext() {
  return useContext(ChallengeContext);
}