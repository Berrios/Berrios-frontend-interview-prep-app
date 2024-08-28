import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

// Suppress ResizeObserver errors
const suppressResizeObserverErrors = () => {
  const global = window;
  const suppress = (event) => {
    if (event.message && event.message.includes('ResizeObserver loop')) {
      event.stopImmediatePropagation();
    }
  };

  if (global.ResizeObserver) {
    const ResizeObserver = global.ResizeObserver;
    global.ResizeObserver = class extends ResizeObserver {
      constructor(callback) {
        super((entries, observer) => {
          requestAnimationFrame(() => {
            callback(entries, observer);
          });
        });
      }
    };
  }

  global.addEventListener('error', suppress);
  global.addEventListener('unhandledrejection', suppress);

  const consoleError = console.error;
  console.error = (...args) => {
    if (args[0] && args[0].includes && args[0].includes('ResizeObserver loop')) {
      return;
    }
    consoleError(...args);
  };
};

// Call the function to suppress ResizeObserver errors
suppressResizeObserverErrors();

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);