import React from 'react';
import ReactDOM from 'react-dom';

import { StyledEngineProvider } from '@mui/material/styles';

import makeFakeServer from 'api/fake';

import { Application } from './application';
import './styles.css';

if (import.meta.env.DEV) {
  makeFakeServer();
}

ReactDOM.render(
  <StyledEngineProvider injectFirst>
    <Application />
  </StyledEngineProvider>,
  document.querySelector('#root'),
);
