import React from 'react';
import Person from './Person/Person';

class App extends React.Component {
  state = {
    persons: [
      { name: 'Max', age: 29 },
      { name: 'Dani', age: 18 },
      { name: 'Tanya', age: 21 },
    ]
  }

  addYears = () => {
    let newPersonsYears = this.state.persons.map( person => {
      let {name, age} = person;
      age++;
      return ({name, age})
    });
    this.setState({
      persons: newPersonsYears
    });
  }

  render() {
    return (
      <div>
        <h1>This is some users:</h1>
        <button onClick={this.addYears}>Add years</button>
        {this.state.persons.map(person => <Person name={person.name} age={person.age} />)}
      </div>
    )
  }
};

export default App;