import React from 'react';
import { render } from 'react-dom';
import {Router, Route, hashHistory} from 'react-router';
import App from './modules/App';
import About from './modules/About';
import Repo from './modules/Repo';
import Test from './modules/Test';

render((
  <Router history={hashHistory}>
    <Route path='/' component={App} />
    <Route path='/repo' component={Repo} />    
    <Route path='/about' component={About} />
    <Route path='/test' component={Test} />
  </Router>), document.getElementById('app'));
