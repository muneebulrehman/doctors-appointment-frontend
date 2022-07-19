import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { CookiesProvider } from 'react-cookie';
import store from './app/store';
import App from './App';
import './bootstrap';
import './index.scss';

const container = document.getElementById('root');
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <CookiesProvider>
        <App />
      </CookiesProvider>
    </Provider>
  </React.StrictMode>
);
