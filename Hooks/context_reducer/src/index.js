import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import {StoreProvider} from './store'; //dùng đến {} khi chúng ta export thông thường không dùng đến default

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <StoreProvider>
      <App />

    </StoreProvider>
  </React.StrictMode>
);
//Không để để tên chung chung như provider
reportWebVitals();
