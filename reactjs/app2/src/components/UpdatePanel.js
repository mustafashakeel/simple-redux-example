import React, {Component} from 'react';
import Update from './Update';

class UpdatePanel extends Component {

	constructor(props){
		super(props);
		this.state = {
			 comments:[
			 'Great to see you',
			 'What is Love ',
			 'Accept it '
			 ]
		}
		 this.removeComment = this.removeComment.bind(this)
	}
	
	editComment(){

	}

	removeComment(){
		var comments = this.state.comments;
		console.log("rmoveComments ", comments);

	}
	commentsText(text,i){
		
						return(<Update key={i} index={i} removec={this.editComment}>{text}</Update>) 
					
	}
	render(){
		return (
			<div>
				{
					this.state.comments.map(this.commentsText)
				}
			</div>
			);
	}

}
export default UpdatePanel;