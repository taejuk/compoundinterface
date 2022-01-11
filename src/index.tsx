import dotenv from 'dotenv';
import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter } from 'react-router-dom';
import App from './pages/App';
import reportWebVitals from './reportWebVitals';
import ThemeProvider, { ThemedGlobalStyle } from './theme';

dotenv.config();

ReactDOM.render(
  <React.StrictMode>
    <HashRouter>
      <ThemeProvider>
        <ThemedGlobalStyle />
        <App />
      </ThemeProvider>
    </HashRouter>
  </React.StrictMode>,
  document.getElementById('root'),
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
