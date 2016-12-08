var React = require('react'),
    ReactDOM = require('react-dom');

    class Contact extends React.component {
    	render(){
    		return <div> Contact us </div>
    	}
    }
    ReactDOM.render(<Contact />, document.getElementById('react-continer'));