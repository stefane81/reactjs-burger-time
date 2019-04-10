import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
	state = {
		persons: [
			{
				name: 'Stefan',
				age: 37
			},
			{
				name: 'Bergros',
				age: 33
			},
			{
				name: 'Einar Bragi',
				age: 4
			}
		]
	};

	switchNameHandler = newName => {
		// console.log('Clicked');
		// this.state.persons[0].name = 'Dude';
		this.setState({
			persons: [
				{
					name: newName,
					age: 37
				},
				{
					name: 'Bergros',
					age: 33
				},
				{
					name: 'Einar Bragi',
					age: 5
				}
			]
		});
	};

	nameChangedHandler = event => {
		this.setState({
			persons: [
				{
					name: 'Stefan',
					age: 37
				},
				{
					name: event.target.value,
					age: 33
				},
				{
					name: 'Einar Bragi',
					age: 5
				}
			]
		});
	};

	render() {
		return (
			<div className="App">
				<h1>Hi, I am God.</h1>
				<button onClick={this.switchNameHandler.bind(this, 'Not real')}>
					Switch Name
				</button>
				<Person
					name={this.state.persons[0].name}
					age={this.state.persons[0].age}
					click={this.switchNameHandler.bind(this, 'Yes real')}
					changed={this.nameChangedHandler}
				>
					My hobbies: CS
				</Person>
				<Person
					name={this.state.persons[1].name}
					age={this.state.persons[1].age}
					changed={this.nameChangedHandler}
				/>
				<Person
					name={this.state.persons[2].name}
					age={this.state.persons[2].age}
					changed={this.nameChangedHandler}
				/>
			</div>
		);
	}
}

export default App;
