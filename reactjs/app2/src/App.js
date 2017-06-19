import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Form from './components/Form';
import Display from './components/Display';
import  Update from './components/Update';
import  UpdatePanel from './components/UpdatePanel';


class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      name:"Mustafa",
      occupation: "Dev"
    }
    this.handleName = this.handleName.bind(this)

    // this.getMessage = this.getMessage.bind(this)
  }

  handleForm(e){
    e.preventDefault(e);
    // console.log(" handleForm ", e);
    // console.log(" handleForm ref ", this.refs.name.value  );
    
    let name = this.refs.name.value;
    let occupation = this.refs.occupation.value;

    
    this.setState({
      name:name,
      occupation:occupation
    });  
    
    this.setState({
      name:this.refs.name.value,
      occupation:this.refs.occupation.value
    });

    
  }
  componentWillReceiveProps(nextProps){
    console.log(" componentWillReceiveProps(nextProps)",nextProps);
  }
  handleName(e){
    console.log('handleChange ', e.target.value);
    this.setState({
      name:e.target.value
    })
  }
  getMessage (e){
    //e.preventDefault();
    console.log(" App getMessage e " , e.name.value );
    console.log(" App getMessage this " , this.refs);
    let nameone = e.name.value;

    let occupation = e.occupation.value;

    this.setState = {
      name: nameone ,
      occupation:e.occupation.value
    }
 
    // if(typeof name && typeof occupation === 'string' &&  )

  }
  render() {

    console.log( " state name ", this.state.name)
    return (
      <div className="App">
        <div className="box">
          <UpdatePanel />
        </div>
        <Display name={this.state.name} occupation={this.state.occupation} />

      <Form handleForm={this.getMessage.bind(this)}/>
      </div>
    );
  }
}
App.defaultProps = {
  name:'Mustafa',
  occupation:'dev'
}

export default App;
