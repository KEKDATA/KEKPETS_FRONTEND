import React from 'react';
import ReactDOM from 'react-dom';

import { Application } from './application';

ReactDOM.hydrate(<Application />, document.querySelector('#root'));
