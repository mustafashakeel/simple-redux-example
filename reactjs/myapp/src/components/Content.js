import React, {Component} from 'react';

class Content extends Component {
	constructor(props){
		super(props);
		this.state = {
			city:this.props.city,
			name:this.props.name
		}
		this.handleInput = this.handleInput.bind(this);
		this.handleName = this.handleName.bind(this);
	}
	handleClick(e){

		// console.log(" handleClick e  ", e );
		// console.log(" handleClcik this ", this.state.city );
		
		this.props.handleButton(this.state);
		
	}
	handleInput(e){
		this.setState({
			city:e.target.value
		})
		
	}
	handleName(e){
		this.setState({
			name:e.target.value
		});
	}

render(){
	let city = this.props.city;
	return (
			<div>
				
				<input type="text" name="name" value={this.state.name } onChange={this.handleName} /><br/>
				<input type="text" name="name" value={this.state.city} onChange={this.handleInput} /><br/>
				<button onClick={this.props.onClick.bind(this)} >Click Me </button><br/>
				<button onClick={this.props.myClick} >Check this button </button><br/>
<br/>
				<button onClick={this.handleClick.bind(this)} > get City </button>


			</div>
		)
}

}
 export default Content;