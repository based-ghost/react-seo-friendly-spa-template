import { hydrate, render } from 'react-dom';
import { StrictMode } from 'react';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import './assets/style/main.scss';
import './config/fa.config';
import * as serviceWorkerRegistration from './serviceWorkerRegistration';
import reportWebVitals from './reportWebVitals';

const appElement = (
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>
);

const rootElement = document.getElementById('root');
const hasChildNodes = !!rootElement?.hasChildNodes();

hasChildNodes
  ? hydrate(appElement, rootElement)
  : render(appElement, rootElement);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://cra.link/PWA
serviceWorkerRegistration.unregister();

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
