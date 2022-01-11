import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals'

let posts = [{ message: "Hi, how are you?", likeCounts: 15},
    { message: "It's my first post", likeCounts: 20}]

let dialogs = [{id: 1, name: 'Ann'},
    {id: 2, name: 'Natasha'},
    {id: 3, name: 'Dima'},
    {id: 4, name: 'Max'},
    {id: 5, name: 'Oksana'},
]

let messages = [{id: 1, message: 'hi'},
    {id: 2, message: 'YO'},
    {id: 3, message: 'Yo'},
]

ReactDOM.render(
  <React.StrictMode>
    <App dialogs={dialogs} messages={messages} posts={posts}/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// eslint-disable-next-line @typescript-eslint/no-unused-expressions
reportWebVitals;
