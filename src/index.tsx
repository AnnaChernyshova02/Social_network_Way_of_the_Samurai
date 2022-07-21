import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {HashRouter} from "react-router-dom";
import {AppStateType, store} from "./Redux/redux-store";
import {Provider} from "react-redux";

let rerenderEntireTree = (props: AppStateType) => {
  ReactDOM.render(
    <HashRouter>
      <Provider store={store}>
        <App/>
      </Provider>
    </HashRouter>, document.getElementById('root'));
}

rerenderEntireTree(store.getState());

store.subscribe(() => {
  rerenderEntireTree(store.getState())
});
