var React = require('react'),
CalculatorInput = require('CalculatorInput'),
CalculatorDisplay = require('CalculatorDisplay');
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

});
module.exports = Calculator;
