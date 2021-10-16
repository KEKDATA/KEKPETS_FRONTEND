import { StyledEngineProvider } from '@mui/material/styles';
import React from 'react';
import ReactDOM from 'react-dom';

import { makeFakeServer } from 'api/fake';

import { Application } from './application';
import './styles.css';

if (import.meta.env.DEV) {
  makeFakeServer();
}

ReactDOM.hydrate(
  <StyledEngineProvider injectFirst>
    <Application />
  </StyledEngineProvider>,
  document.querySelector('#root'),
);
