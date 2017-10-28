import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {Link} from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
         
          <Link to="/home">Home </Link>
          <Link to="/contact" >Contact</Link>

        </p>

        <div className='childpages'>
          { this.props.children}
        </div>


      </div>
    ); 
  }
}

export default App;


