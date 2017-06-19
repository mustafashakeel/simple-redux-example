import React, {Component} from 'react';

class Update extends Component {

	constructor(props){
		super(props);
		this.state = {
			editing:false
		}

		this.renderEdit = this.renderEdit.bind(this)
	}

	edit(){
		this.setState({
			editing:true
		})

	}
	remove(){
		console.log("remove", this.props.index);

		this.props.removec();
	}
	save(){

		var val = this.refs.newText.value;
		console.log(" new ",val);
		this.setState({
			editing:false
		})
	}

	renderNormal(){
		return (
			<div className="container">
		<div className="content"> {this.props.children}</div>
		<button onClick={this.edit.bind(this)} className="edit" >Edit </button>
		<button onClick={this.remove.bind(this)} className="remove" >Remove </button>
		</div>
		);

	}
	renderEdit(){
		return (
		<div className="container">		
		<textarea ref="newText" defaultValue={this.props.children} />
		<button onClick={this.save.bind(this)} className="edit" >Save </button>
		</div>
		);

	}

	render(){
		var great = "awesome "

		if(this.state.editing){
			 return this.renderEdit();
		}else{
			return this.renderNormal();
		}
		
	}
}
export default Update;