import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import { BrowserRouter, Route } from 'react-router-dom';
import Home from './Home';

ReactDOM.render(
  <BrowserRouter>
    <div>
      <Route component={App} />
      <Route path='/home' component={Home} />
    </div>
  </BrowserRouter>,
  document.getElementById('root'));
