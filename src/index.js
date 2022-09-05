import React from 'react';
import ReactDOM from 'react-dom/client';
import clevertap from './libs/clevertap'
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

clevertap.privacy.push({ optOut: false })
clevertap.privacy.push({ useIP: false })
clevertap.init('WRK-485-456Z', 'sk1-staging-4', 'wzrkt.com')
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
