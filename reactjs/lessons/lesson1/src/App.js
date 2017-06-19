import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
       
        </div>
       <Body />
      </div>
    );
  }
}

class Body extends Component {
  constructor(props){
    super(props);
    this.state = {
      nums:0
    };
  }
  getANumber(){
    console.log("great");
    this.setState({nums: Math.random() });
  }
  render(){
    console.log("nums state: ", this.state.nums)
    return (
    <div>
    <h3> Hi, How are you doing </h3>
    <button onClick={this.getANumber.bind(this)} value="getanumber"> Get a number </button>
    <br/>
    <Output myNum={this.state.nums} />
    </div>
    );
  }
}
class Output extends Component {

  render(){
    return (
      <div>
        <strong> {this.props.myNum} </strong>
      </div>
    );
  }
} 

export default App;


