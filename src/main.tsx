import { StyledEngineProvider } from '@mui/material/styles';
import React from 'react';
import ReactDOM from 'react-dom';

import { Application } from './application';
import './styles.css';

if (import.meta.env.DEV) {
  const generateMakeFakeServer = async () => {
    const makeFakeServer = await import('api/fake');

    makeFakeServer.default();
  };

  generateMakeFakeServer();
}

ReactDOM.hydrate(
  <StyledEngineProvider injectFirst>
    <Application />
  </StyledEngineProvider>,
  document.querySelector('#root'),
);
