import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
	render() {
		return (
			<div className="App">
				<h1>Hi, I am God.</h1>
				<Person name="Stefan" age="37">
					My hobbies: CS
				</Person>
				<Person name="Bergros" age="33" />
				<Person name="Einar Bragi" age="4" />
			</div>
		);
	}
}

export default App;
