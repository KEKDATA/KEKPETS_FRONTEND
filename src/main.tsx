import { StyledEngineProvider } from '@mui/material/styles';
import React from 'react';
import ReactDOM from 'react-dom';

import { Application } from './application';
import './styles.css';

if (import.meta.env.DEV) {
  const createDynamicImportMakeFakeServer = async () => {
    const makeFakeServer = await import('api/fake');

    makeFakeServer.default();
  };

  createDynamicImportMakeFakeServer();
}

ReactDOM.render(
  <StyledEngineProvider injectFirst>
    <Application />
  </StyledEngineProvider>,
  document.querySelector('#root'),
);
