var React = require('react'),
		ReactDOM =require('react-dom');
var CalculatorDisplay = React.createClass({
	render:function(){
			var sum =this.props.sum,
					info=this.props.info;

		return (
			<div className="display">
				<span> Total : {sum}</span><br/>
				<span> Calculattion Details : {info}</span>

			</div>

		);
	}
})

var CalculatorInput = React.createClass({
	calculate:function(e){
		e.preventDefault();
		var updates = {};

			var first = parseInt(this.refs.firstValue.value),
					second = parseInt(this.refs.SecondValue.value),
					sum = (first+second),
					info = this.refs.info.value;
					updates.sum = sum;
					updates.info = info;
					// console.log("updates ", updates);


					this.props.calcButton(updates);


	},

	render:function(){
		return (
			<div>
				<strong>Please Input the numbers</strong>
				<form onSubmit={this.calculate}>
					<input name="text" ref="firstValue" placeholder="enter value"/>
						<input name="text" ref="SecondValue" placeholder="enter value"/><br/>
						<textarea ref="info" placeholder="please enter the info"></textarea>
						<br/>

						<button> Add it </button>

				</form>

			</div>
		);
	}

});


var Calculator = React.createClass({

	handleCalculate:function(sum){

		this.setState({
			sum:sum.sum,
			info:sum.info
		});

	},
	getInitialState:function(){
		return{
			sum:0,
			message:"Details of the calculation"
		}
	},


		render:function(){
				var sum = this.state.sum,
						info= this.state.info;

			return (
				<div className="calculatorbox" >
					<CalculatorDisplay  sum={sum} info={info}/>
					<CalculatorInput  calcButton={this.handleCalculate}/>
				</div>
			)
		}

})

var calc = document.getElementById('calculator');
ReactDOM.render(<Calculator /> , calc);

//////////////////////////////////////////////////////////////////////////
///////////////////////////////////////

var SalaamDisplay = React.createClass({


		render:function(){

			var name = this.props.name;
var message = this.props.message;




			return (
				<div>
				<h1>This is an innter Component {name}</h1>
			</div>
		);


		}
});

var SalaamForm = React.createClass({
	addNames:function(e){


		console.log('Refs   ',this.refs.names.value);


		e.preventDefault();
		var names = this.refs.names.value;

				console.log(names);

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
	onSubmitClick:function(names){

		this.setState({
			name:names
		});

	},



render:function(){


var name = this.state.name,
		message = this.props.message;

	return (
		<div>
			<SalaamDisplay name={name}/>
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
