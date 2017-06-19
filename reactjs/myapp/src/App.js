import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import About from './components/About';
import Content from './components/Content';


class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      city: 'Vancouver',
      name: 'Mustafa',
      mycity:"",
      myname:""
    }
    this.buttonNow = this.buttonNow.bind(this);
  }
  clickMe(){
    alert("cool");
  }
  buttonNow(e){
    console.log('this button now ', this)
        console.log('this button e', e)
    this.setState({
      
        city: e.city,
        name:e.name
    });
  }
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
          <span> Breakfast Type : string {this.props.breakfast }</span>
          <span> quantity {this.props.quantity}</span>
        </p>
        <About food={this.props}  name={this.state.name} city={this.state.city} />
        <Content name={this.state.name} onClick={this.great} myClick={this.clickMe} handleButton={this.buttonNow} city={this.state.city} />
      </div>
    );
  }
}
// App.propTypes = {
//   breakfast:React.propTypes.string,
//   lunch:React.propTypes.string,
//   dinner: React.propTypes.string,
//   quantity: React.propTypes.number,

// }
App.defaultProps = {
  breakfast: 'Chapati',
  lunch: 'Sandwitch',
  dinner: 'Burger ',
  quantity: 10
}

export default App;
