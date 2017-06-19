import React, {Component} from 'react';

class Form extends Component {

	handleMe(e){
		e.preventDefault();

		console.log(" handleme ", this.refs.name.value);
		this.props.handleForm(this.refs);
	}


render(){
	return (
		<div>
		  <form onSubmit={this.handleMe.bind(this)}>
	        <input type="text" ref="name" /><br/>
	        <input type="text" ref="occupation" /><br/>
	        <button >Submit</button>
	      </form>
		</div>

		)
}
}
export default Form;
