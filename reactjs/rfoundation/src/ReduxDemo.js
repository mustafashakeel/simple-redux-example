import React,{Component} from 'react';
import {createStore} from 'redux';

class ReduxDemo extends Component {
	render(){
		
		// Step 2 : Reucer : state n action 
		const reducer = function(state, action){
			if(action.type ==='ATTACK'){
				return action.payload

			}
			if(action.type ==='NINJA') {
				return action.payload;
			}
			return state;
		}

		// Step 1 Store : Reducer n state 

		const store = createStore(reducer, "Peace");


		// Step 3 Subscribe 
  
  
		store.subscribe(()=>{
			console.log("Store is now ", store.getState());


		})

		// Step 4: Dispatch Action 
		store.dispatch({type:"ATTACK",payload:" Iron Man"});
		store.dispatch({type:"NINJA",payload: " Teenage Mutant Ninja Turtles"})




		return(
			<div>

				<h3>Redux Demo </h3>

			</div>

			);
	}
}
export default ReduxDemo;