import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';

import { createGlobalStyle } from 'styled-components';
import { Reset } from 'styled-reset';

import App from './App';

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    -webkit-tap-highlight-color: transparent;

  }
  body {
    background-color: #F8FAFC;
    font-family: 'Montserrat', sans-serif;
    color: black;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 26px;
  }
`;

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Reset />
      <GlobalStyle />
      <App />
    </Router>
  </React.StrictMode>,
  document.getElementById('root'),
);
