import React, { createContext, useContext, useState, useEffect } from 'react';
import { fetchChallenges } from '../api/challengeApi'; // Ensure this import is correct

const ChallengeContext = createContext();

export function ChallengeProvider({ children }) {
  const [challenges, setChallenges] = useState([]);
  const [currentChallengeIndex, setCurrentChallengeIndex] = useState(0);

  useEffect(() => {
    async function loadChallenges() {
      try {
        console.log('Fetching challenges...');
        const fetchedChallenges = await fetchChallenges();
        console.log('Fetched challenges:', fetchedChallenges);
        setChallenges(fetchedChallenges);
      } catch (error) {
        console.error('Failed to fetch challenges:', error);
      }
    }
    loadChallenges();
  }, []);

  const currentChallenge = challenges[currentChallengeIndex];

  const value = {
    challenges,
    currentChallenge,
    currentChallengeIndex,
    setCurrentChallengeIndex,
  };

  return (
    <ChallengeContext.Provider value={value}>
      {children}
    </ChallengeContext.Provider>
  );
}

export function useChallengeContext() {
  return useContext(ChallengeContext);
}