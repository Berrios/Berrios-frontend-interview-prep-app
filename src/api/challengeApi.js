// Import the challenges data
import challenges from '../data/challenges';

export const fetchChallenges = async () => {
  // Simulate an API call with a small delay
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(challenges);
    }, 500);
  });
};