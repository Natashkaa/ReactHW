import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './Components/App';
import * as serviceWorker from './serviceWorker';
import { Router } from 'react-router-dom';
import {createBrowserHistory} from 'history';
import { createStore } from 'redux'
import reducer from './Reducers/Reducer'
import { Provider } from 'react-redux';

const history = createBrowserHistory()
let state = { 
  words: [ { id: 1,
            word: "Hello"}, 
          { id: 2,
            word: "Word"}
          ], 
  newWord: "123" }
let store = createStore(reducer, state);

ReactDOM.render((
  <Provider store={store}>
    <Router history={history} >
      <App/>
    </Router>
  </Provider>
  ), document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
