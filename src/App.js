import React from 'react';
import { ChallengeProvider } from './contexts/ChallengeContext';
import ChallengeApp from './pages/ChallengeApp';

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  render() {
    if (this.state.hasError) {
      return <h1>Something went wrong.</h1>;
    }

    return this.props.children;
  }
}
function App() {
  return (
    <ErrorBoundary>
      <ChallengeProvider>
        <ChallengeApp />
      </ChallengeProvider>
    </ErrorBoundary>
  );
}

export default App;