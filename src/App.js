import React from 'react';
import { ChallengeProvider } from './contexts/ChallengeContext';
import ChallengeApp from './pages/ChallengeApp';

function App() {
  return (
    <ChallengeProvider>
      <ChallengeApp />
    </ChallengeProvider>
  );
}

export default App;