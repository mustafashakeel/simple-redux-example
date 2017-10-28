import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import One from './One';
import Two from './Two';
import TwoPoint from './TwoPoint';
import registerServiceWorker from './registerServiceWorker';
import { Router, Route, browserHistory } from 'react-router'


ReactDOM.render(
		<Router history={browserHistory} >
			<Route path="/" component={App}></Route>
				<Route path="/One" component={One}></Route>
				<Route path="/Two" component={Two}>
					<Route path="/Two/:id" component={TwoPoint} ></Route>
				</Route>
		</Router>
	, document.getElementById('root'));
registerServiceWorker();
