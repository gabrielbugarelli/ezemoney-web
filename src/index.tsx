import React from 'react';
import ReactDOM from 'react-dom';

import { Router } from './routes';
import { GlobalStyle } from './styles/global';

//inicializa o firebase
import './services/firebaseConnection';

ReactDOM.render(
  <React.StrictMode>
    <Router />
    <GlobalStyle />
  </React.StrictMode>,
  document.getElementById('root')
);
