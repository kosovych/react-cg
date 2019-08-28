import React from 'react';
import Person from './Person/Person';
import classes from './style.module.css';
import ErrorBoundary from './ErrorBoundary/ErrorBoundary';
class App extends React.Component {
  state = {
    persons: [
      { id: 'asdf',name: 'Max', age: 29 },
      { id: 'zxcvb',name: 'Dani', age: 18 },
      { id: 'cvbn',name: 'Tanya', age: 21 },
    ],
    showPerson: true
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

  change = (event, id) => {
    const personIndex = this.state.persons.findIndex( p => p.id === id );
    // debugger;
    const person = {...this.state.persons[personIndex]};
    person.name = event.target.value;
    const persons = [...this.state.persons];
    persons[personIndex] = person;
    this.setState({persons});
  }
  tooglePerson = () => {
    this.setState({
      showPerson: !this.state.showPerson
    });
  }

  removePerson = (index) => {
    const persons = [...this.state.persons];
    persons.splice(index, 1);
    this.setState({
      persons: persons
    })
  }

  render() {
    let btnClass;
    const persons = <div>
      {this.state.persons.map((person, index) => (
        <ErrorBoundary key={index}>
          <Person
            change={(event) => this.change(event, person.id)}
            // click={() => this.removePerson(index)}
            key={index}
            name={person.name}
            age={person.age}
          />
        </ErrorBoundary>
        ))}
    </div>;

    if(this.state.showPerson === true) {
      btnClass = classes.Red;
    } else {
      btnClass = null
    }

    return (
      <div className={classes.App}>
        <h1 className={classes.red}>This is some users:</h1>
        <button className={btnClass} onClick={this.tooglePerson}>Add years</button>
        { this.state.showPerson === true ?
         persons: null
        }
      </div>
    )
  }
}

export default App;