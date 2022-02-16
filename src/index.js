import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const posts = [
  {id: 1, text: 'Hello world'},
  {id: 2, text: 'Hello JavaScript'},
  {id: 3, text: 'Im learning React'},
]

const dialogs = [
  {id: 1, name: 'Ihor'},
  {id: 2, name: 'Vova'},
  {id: 3, name: 'Andriy'},
  {id: 4, name: 'Anatoliy'},
  {id: 5, name: 'Oksana'},
  {id: 6, name: 'Nazar'},
];

const messages = [
  {id: 1, message: 'Hello world'},
  {id: 2, message: 'Hello JavaScript'},
  {id: 3, message: 'Aloha'},
  {id: 4, message: 'Nihao'},
  {id: 5, message: 'Namaste'},
  {id: 6, message: 'Pryvit!'},
]

ReactDOM.render(
  <React.StrictMode>
    <App posts={posts} dialogs={dialogs} messages={messages}/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
