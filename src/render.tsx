import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {RootStateType} from "./Redux/State";
import {BrowserRouter} from "react-router-dom";

export let rerenderEntireTree = (state: RootStateType) => {
    ReactDOM.render(
        <BrowserRouter>
            <App state={state}/>
        </BrowserRouter>, document.getElementById('root'));
}

