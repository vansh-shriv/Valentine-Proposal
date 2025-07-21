import * as React from 'react';
import * as ReactDOM from 'react-dom/client';
import App from './App';
import './style.css';

const container = document.getElementById('app') as HTMLElement;
const root = ReactDOM.createRoot(container);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
