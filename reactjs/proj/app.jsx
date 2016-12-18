var SalaamDisplay = React.createClass({


		render:function(){
				console.log('Props   name ',this.props.name);
	console.log('Props   message',this.props.message);
	console.log('state   message',this.state);



			return (
				<div>
				<h1>This is an innter Component</h1>
			</div>
		);


		}
});

var SalaamForm = React.createClass({
	addNames:function(e){

		console.log('Refs   ',this.refs.names.value);


		e.preventDefault();
		var names = this.refs.names.value;


		if (names.length >0 &&typeof name ==='string'){
				this.refs.names.value = "";
				this.props.onNewName(names);
			// this.setState({
			// 	name:names
			// });
		}



	},

		render:function(){
		return (
			<div>
				<form onSubmit={this.addNames}>
						<input type="text" ref="names" /><br/>
						<button>Click</button>
				</form>
			</div>
		);
	}
});



var Salaam = React.createClass({

	getDefaultProps:function(){
			return {
				name:'Qureshi',
				message:'Greetings'
			}
	},
	getInitialState:function(){
		return{
			name:this.props.name
		}
	},
	onSubmitClick:function(name){

		this.setState({
			name:name
		});

	},



render:function(){


var name = this.state.name,
		message = this.props.message;

	return (
		<div>
			<SalaamDisplay/>
			<SalaamForm onNewName={this.onSubmitClick}/>

		</div>
	);
}
});

var name = 'Eisa',
		message = "As Salaamualaikum "
ReactDOM.render(<Salaam name={name} message={message}/>,document.getElementById('app'));

// var Amazing = React.createClass({
// 	getDefaultProps:function(){
// 		return{
// 			name:'computer',
// 			message:'Greetings'
// 		}
// 	},
// 	onButtonClick:function(e){
// 		e.preventDefault();
// 				var nameRef = this.refs.name;
// 		var name = nameRef.value;
// 		 nameRef.value = '';
//
// 		 if(typeof name === 'string' && name.length >0){
// 			 		this.setState({name:name});
// 		 }
// 	},
// 	render:function(){
// 		var deal = this.state.name;
// 				var greeting = this.props.message;
// 		return(
// 				<div>
// 				<h1> This is Amazing Deal for a {deal}</h1>
// 				<p> This is from Paragraph Tag</p>
// 				<span> {greeting} , {deal} </span>
// 				<form onSubmit={this.onButtonClick}>
// 					<input type="text" ref="name"/>
// 					<button> Set Name</button>
// 				</form>
// 				</div>
// 			);
// 	}
// });
//
// ReactDOM.render(
//   <Amazing name="Mustafa" message="Salaam"/>,
//   document.getElementById('app')
// );
