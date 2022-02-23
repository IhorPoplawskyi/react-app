import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {addPost} from './../src/components/redux/state';
import { updateNewPostText } from './../src/components/redux/state';

export let rerenderEntireTree = (state) => {
  ReactDOM.render(
    <React.StrictMode>
      <App state={state} addPost={addPost} updateNewPostText={updateNewPostText}/>
    </React.StrictMode>,
    document.getElementById('root')
  );
}