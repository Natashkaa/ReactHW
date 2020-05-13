import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Header from './Header';
import Footer from './Footer';
import * as serviceWorker from './serviceWorker';
import { Router } from 'react-router-dom';
import {createBrowserHistory} from 'history';

const history = createBrowserHistory()

ReactDOM.render((
  <Router history={history}>
    <Header/>
    <Footer/>
  </Router>
  ), document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
