import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import Box from './component/Box.jsx';
import './index.css';

// for Quick fix id react not work use this import
// import { createRoot} from 'react-dom/client';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <App />
      <Box />
      <Box />
      <Box />
  </React.StrictMode>
);

