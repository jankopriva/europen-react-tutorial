import React from 'react';
import ReactDOM from 'react-dom';

import './css/skeleton.css';

import {createStore} from 'redux';
import { Provider } from 'react-redux';

import {addTodo} from './src/actions';
import {todoApp} from './src/reducers';
import App from './src/app';


let store = createStore(todoApp);
const unsubscribe = store.subscribe(() => {
  console.log(store.getState());
});

console.log(store.getState());

store.dispatch(addTodo('Need to learn ES6'));
store.dispatch(addTodo('Need to read about Redux'));

unsubscribe();

let rootElement = document.getElementById('root');

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  rootElement
);
