import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import  Home  from './components/Home';
import * as serviceWorker from './serviceWorker';
import { Provider } from "react-redux";
import {  createStore, applyMiddleware } from "redux";
import reducers from "./reducers";
import promiseMiddleware from "redux-promise";
import ReduxThunk from "redux-thunk";

const store = applyMiddleware(promiseMiddleware, ReduxThunk)(createStore);


ReactDOM.render(
  <React.StrictMode>
    <Provider store={store(reducers)}>
      <Home />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
