import React, { Component } from 'react';
import styles from './App.module.css';
import Person from '../components/Persons/Person/Person';
import Persons from '../components/Persons/Persons';

class App extends Component {
	state = {
		persons: [
			{
				id: '1111',
				name: 'Stefan',
				age: 37
			},
			{
				id: '2222',
				name: 'Bergros',
				age: 33
			},
			{
				id: '3333',
				name: 'Einar Bragi',
				age: 4
			}
		],
		otherState: 'some value',
		showPersons: false
	};

	deletePersonHandler = personIndex => {
		// use .slice to safely copy array instead of referencing it
		// const persons = this.state.persons.slice();
		// use ... for safe copy as well
		const persons = [...this.state.persons];
		persons.splice(personIndex, 1);
		this.setState({ persons: persons });
	};

	nameChangedHandler = (event, id) => {
		const personIndex = this.state.persons.findIndex(p => {
			return p.id === id;
		});

		const person = {
			...this.state.persons[personIndex]
		};

		person.name = event.target.value;

		// get whole persons object
		const persons = [...this.state.persons];
		persons[personIndex] = person;

		this.setState({
			persons: persons
		});
	};

	togglePersonsHandler = () => {
		const doesShow = this.state.showPersons;
		this.setState({ showPersons: !doesShow });
	};

	render() {
		let persons = null;
		let btnClass = '';

		if (this.state.showPersons) {
			persons = (
				<div>
					<Persons
						persons={this.state.persons}
						clicked={this.deletePersonHandler}
						changed={this.nameChangedHandler}
					/>
				</div>
			);

			btnClass = styles.red;
		}

		const classes = [];

		if (this.state.persons.length <= 2) {
			classes.push(styles.red);
		}
		if (this.state.persons.length <= 1) {
			classes.push(styles.bold);
		}

		return (
			<div className={styles.App}>
				<p className={classes.join(' ')}>Hi, I am ok.</p>
				<button className={btnClass} onClick={this.togglePersonsHandler}>
					Toggle Persons
				</button>
				{persons}
			</div>
		);
	}
}

export default App;
