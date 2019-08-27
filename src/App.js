import React, { useState } from 'react';
import Person from './Person/Person';
import './style.css';
import Radium, { StyleRoot } from 'radium';

// const App = () => {
//   const [currentState, updateState] = useState({
//     persons: [
//       { name: 'Max', age: 29 },
//       { name: 'Dani', age: 18 },
//       { name: 'Tanya', age: 21 },
//     ],
//     title: 'State'
//   });

//   const addYears = () => {
//     let persons = currentState.persons.map( person => {
//       let {name, age} = person;
//       age++;
//       return ({name, age})
//     });
//     updateState({...currentState, persons});
//     console.log(currentState);
//   }

//   return (
//     <div>
//       <h1>This is some users:</h1>
//       <button onClick={addYears}>Add years</button>
//       {currentState.persons.map(person => <Person name={person.name} age={person.age} />)}
//     </div>
//   )
// };

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
    const style = {
      color: `red`,
    }
    const btnStyle = {
      color: 'white',
      backgroundColor: 'green',
      padding: '6px 9px',
      ':hover': {
        border: '3px solid #ccc',
      }
    }

    let persons;
    if (this.state.showPerson) {
      persons = <div>
        {this.state.persons.map((person, index) => (
          <Person
            change={(event) => this.change(event, person.id)}
            click={() => this.removePerson(index)}
            key={index}
            name={person.name}
            age={person.age}
          />))}
      </div>;
      btnStyle.backgroundColor = 'red';
    } else {
      persons = null;
      btnStyle.backgroundColor = 'green';
      btnStyle[':hover'] = {borderRadius: '12px'}
    }

    const classes = [];
    if(this.state.persons.length <= 2) {
      classes.push('red');
    }
    if(this.state.persons.length <= 1) {
      classes.push('bold');
    }

    return (
      <StyleRoot>
        <div>
          <h1 style={style}>This is some users:</h1>
          <p className={classes.join(' ')}>Some text</p>
          <button
            style={btnStyle}
            onClick={this.tooglePerson}>
              Add years
          </button>
          { this.state.showPerson === true ?
           persons : null
          }
        </div>
      </StyleRoot>
    )
  }
}

export default Radium(App);