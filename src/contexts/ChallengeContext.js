import React, { createContext, useContext, useState } from 'react';
import { challenges } from '../data/challenges';

const ChallengeContext = createContext();

export const ChallengeProvider = ({ children }) => {
  const [currentChallenge, setCurrentChallenge] = useState(challenges[0]);

  return (
    <ChallengeContext.Provider value={{ currentChallenge, setCurrentChallenge }}>
      {children}
    </ChallengeContext.Provider>
  );
};

export const useChallengeContext = () => useContext(ChallengeContext);