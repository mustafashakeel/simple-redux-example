import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import {BrowserRouter, Route} from 'react-router-dom';
import Home from './components/Home';
import Contact from './components/Contact';


ReactDOM.render(
	<BrowserRouter>
		<div>
			<Route component={App} />
			<Route path="/home" component={Home} />
			<Route path='/contact' component={Contact} />
		</div>
	</BrowserRouter>
	, document.getElementById('root'));
registerServiceWorker();


