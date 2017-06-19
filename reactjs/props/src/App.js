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

        <Parent />
      </div>
    );
  }
}

class Parent extends Component {
  render(){
    return(
    <div>
    great
    <Learn edu={this.props.subjects} />
    </div>);
  }
}
Parent.defaultProps ={
  subjects:['Maths','Science','Logic','Philosophy']
}



class Learn extends Component {
  handleSubjects(){
    console.log("Asdfsdaf");
  }
  render(){
    console.log(this.props.edu);
    return (
    <div>
     <h3 onClick={this.handleSubjects}> Subjects </h3>
      <ul>
        {this.props.edu.map((item,i) => {return <li key={i}>{item}</li>})}
      </ul>

     </div>
    )
  }
}

export default App;
