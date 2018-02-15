import './test.html';

import React from 'react';
import ReactDOM from 'react-dom';
import { toUpper } from './utils/string.js';

export function Hello (str) {
  console.log(toUpper(str || 'hello'));
}

ReactDOM.render(
  <h1>Super basic React Example!</h1>,
  document.getElementById('root')
);

