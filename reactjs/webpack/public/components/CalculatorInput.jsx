var React = require('react');

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

module.exports = CalculatorInput;
