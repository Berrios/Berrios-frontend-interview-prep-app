import React from 'react';
import ChallengeApp from './pages/ChallengeApp';
import { ChallengeProvider } from './contexts/ChallengeContext';
import './styles/global.css';

function App() {
  return (
    <ChallengeProvider>
      <ChallengeApp />
    </ChallengeProvider>
  );
}

export default App;