var React = require('react');

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
});

module.exports = CalculatorDisplay;
