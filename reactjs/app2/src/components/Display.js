import React, {Component} from 'react';

class Display extends Component {
	render(){
		console.log(" Display ", this.props)
		return (

				<div>
					<h1> form 1 </h1>
					<h2> {this.props.name}</h2>
					<h2> {this.props.occupation} </h2>

			     
				</div>
			)
	}
}
export default Display;