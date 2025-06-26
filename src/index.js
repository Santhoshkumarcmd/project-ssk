import React from 'react';
import ReactDOM from 'react-dom/client';
import './App.css';
import App from './App';
// import ErrorBoundary from './Common/ErrorBoundary';

// Create root element
const rootElement = document.getElementById('root');

// Only create root if element exists
if (rootElement) {
  const root = ReactDOM.createRoot(rootElement);
  root.render(
    <React.StrictMode>
       <App /> 
    </React.StrictMode>
  );
}