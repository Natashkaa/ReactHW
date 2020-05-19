import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './Components/App';
import Footer from './Footer';
import Header from './Header';
import * as serviceWorker from './serviceWorker';
import { Router } from 'react-router-dom';
import {createBrowserHistory} from 'history';
import { createStore } from 'redux'
import reducer from './Reducers/Reducer'
import { Provider } from 'react-redux';

const history = createBrowserHistory()
let state = { 
  todoItems: [  { id: 1,
                  addDate: "17-04-2020",
                  addTime: "12:45",
                  description: "play the game 1 hour",
                  isChecked: true}, 
                { id: 2,
                  addDate: "18-04-2020",
                  addTime: "13:45",
                  description: "learn React",
                  isChecked: false},
                { id: 3,
                  addDate: "19-04-2020",
                  addTime: "15:45",
                  description: "draw 30-60 min",
                  isChecked: true},
                { id: 4,
                  addDate: "20-04-2020",
                  addTime: "16:45",
                  description: "train 30 min",
                  isChecked: false}
            ], 
  newTodoItem: "" }
let store = createStore(reducer, state);

ReactDOM.render((
  <Provider store={store}>
    <Router history={history} >
      <Header/>
      <App/>
      <Footer/>
    </Router>
  </Provider>
  ), document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
