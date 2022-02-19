import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {BrowserRouter} from "react-router-dom";

import {RootStateType} from "./Redux/store";
import {store} from "./Redux/redux-store";


let rerenderEntireTree = (state: RootStateType) => {
    ReactDOM.render(
        <BrowserRouter>
            <App store={store}/>
        </BrowserRouter>, document.getElementById('root'));
}

rerenderEntireTree(store.getState());

store.subscribe(()=> {
    let state = store.getState()
    rerenderEntireTree(state)
});


/*()=> {
    let state = store.getState()
    rerenderEntireTree(state)
}*/


