import React from 'react';
import ReactDOM from 'react-dom';
import { toUpper } from './utils/string.js';

export default function Hello () {
  console.log(toUpper('hello'));
}

// ReactDOM.render(
//   <h1>Hello, world!</h1>,
//   document.getElementById('root')
// );

