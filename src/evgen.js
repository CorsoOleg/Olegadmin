var React = require("react"); 
var ReactDOM = require("react-dom"); 
import { Component } from "react"; 

class MyApp extends Component { 
	render() { 
		return ( 
			<div> 
				<h1>Hello, world2!</h1> 
			</div> 
		); 
	} 
} 

ReactDOM.render( 
	<MyApp ></MyApp>     , 
	document.getElementById('my_container'));