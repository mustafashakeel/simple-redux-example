import React, {Component} from 'react';
import {Link} from 'react-router';
class Two extends Component {

	render(){
		return (
			<div> <h2>Two </h2>

			<ul>
				<li><Link to="/Two/123">Two Point</Link> </li>
			</ul>	
			
			{this.props.children}

			</div>)
	}

}

export default Two;