import	React, {Component} from 'react';

class About extends Component {



render(){

	console.log("about props"	, this.props)
	return (
		<div>
			<h2> It works </h2>
				<br/>
			
			<span> {this.props.food.breakfast}</span><br/>
			
		<span> {this.props.food.lunch}</span><br/>

			<span>{this.props.food.dinner}</span>


			<h2> {this.props.city}</h2>
			<h2> {this.props.name}</h2>
		
		</div>
		);

}

}
export default About;