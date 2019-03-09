import React from 'react';
import './assets/style/main.scss';
import './config/fa.config';
import App from './App';
import { render } from 'react-snapshot';
import { BrowserRouter } from 'react-router-dom';
import * as serviceWorker from './serviceWorker';

render(
    <BrowserRouter>
      <App />
    </BrowserRouter>, 
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
