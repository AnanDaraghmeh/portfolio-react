import React from 'react';
import { render, hydrate } from 'react-dom';
import 'normalize.css';
import './styles/main.scss';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { Provider } from './store';

const rootElement = document.getElementById('root');

if (rootElement.hasChildNodes()) {
  hydrate(
    <Provider>
      <App />
    </Provider>,
    rootElement
  );
} else {
  render(
    <Provider>
      <App />
    </Provider>,
    rootElement
  );
}

serviceWorker.unregister();
