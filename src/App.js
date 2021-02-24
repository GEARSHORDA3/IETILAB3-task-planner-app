import React, {Component} from 'react';
import './Components/App.css';
import {Login} from './Components/Login.js';
import {TodoApp} from './Components/TodoApp.js';
import {BrowserRouter, BrowserRouter as Router, Link, Route, Switch} from 'react-router-dom'


const LoginView = () => (
	<Login/>
);

const TodoAppView = () => (
	<TodoApp/>
);

export class App extends Component {


	constructor(props) {
		super(props)
	}

	render() {
		console.log(localStorage.getItem('isLoggedLn') + " despues de render")
		return (
			<Router>
				{(localStorage.getItem('isLoggedLn')==="false" || localStorage.getItem('isLoggedLn')===null) && LoginView()}
				
				{localStorage.getItem('isLoggedLn')==="true" && TodoAppView()}
			</Router>
		);
	}

}

