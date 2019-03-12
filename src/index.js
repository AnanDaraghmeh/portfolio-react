import React from 'react';
import { render, hydrate } from 'react-dom';
import 'normalize.css';
import './styles/styles.scss';
import App from './App';
import * as serviceWorker from './serviceWorker';

const rootElement = document.getElementById('root');

if (rootElement.hasChildNodes()) {
  hydrate(<App />, rootElement);
} else {
  render(<App />, rootElement);
}

serviceWorker.unregister();
