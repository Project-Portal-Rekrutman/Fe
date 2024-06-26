import React from 'react';
import ReactDOM from 'react-dom/client';
// import { BrowserRouter, Routes, Route } from "react-router-dom";
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
// import Landing from "./components/page/landing"
// import { Provider } from 'react-redux';
// import store from './app/store';
import Login from "./components/page/login";
import Score from "./components/organism/modal/score";
import Register from "./components/page/register";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <Provider store={store}>
      
    </Provider>, */}
    <App />
    {/* <Login /> */}
  {/* <Register/> */}
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
