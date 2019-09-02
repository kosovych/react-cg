import React from 'react';
import './style.css';
import Persons from '../components/Persons/Persons';
import Radium, { StyleRoot } from 'radium';
import Cockpit from '../components/Cockpit/Cockpit';

class App extends React.Component {
  state = {
    persons: [
      { id: 'asdf', name: 'Max', age: 29 },
      { id: 'zxcvb', name: 'Dani', age: 18 },
      { id: 'cvbn', name: 'Tanya', age: 21 }
    ],
    showPerson: true
  };

  addYears = () => {
    let newPersonsYears = this.state.persons.map(person => {
      let { name, age } = person;
      age++;
      return { name, age };
    });
    this.setState({
      persons: newPersonsYears
    });
  };

  change = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => p.id === id);
    const person = { ...this.state.persons[personIndex] };
    person.name = event.target.value;
    const persons = [...this.state.persons];
    persons[personIndex] = person;
    this.setState({ persons });
  };
  tooglePerson = () => {
    this.setState({
      showPerson: !this.state.showPerson
    });
  };

  removePerson = index => {
    const persons = [...this.state.persons];
    persons.splice(index, 1);
    this.setState({
      persons: persons
    });
  };

  render() {
    let persons;
    if (this.state.showPerson) {
      persons = (
        <div>
          <Persons
            persons={this.state.persons}
            change={this.change}
            removePerson={this.removePerson}
          />
        </div>
      );
    } else {
      persons = null;
    }

    return (
      <StyleRoot>
        <div>
          <Cockpit
            isShow={this.state.showPerson}
            persons={this.state.persons.length}
            tooglePerson={this.tooglePerson}
          />
          {this.state.showPerson === true ? persons : null}
        </div>
      </StyleRoot>
    );
  }
}

export default Radium(App);
