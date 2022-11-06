//react
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
//redux
import { store } from "./store";
import { Provider } from "react-redux";
//styles
import "normalize.css";
import "./index.sass";

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
