import React, { useState } from 'react';
import Person from './Person/Person';

const App = () => {
  const [currentState, updateState] = useState({
    persons: [
      { name: 'Max', age: 29 },
      { name: 'Dani', age: 18 },
      { name: 'Tanya', age: 21 },
    ],
    title: 'State'
  });

  const addYears = () => {
    let persons = currentState.persons.map( person => {
      let {name, age} = person;
      age++;
      return ({name, age})
    });
    updateState({...currentState, persons});
    console.log(currentState);
  }

  return (
    <div>
      <h1>This is some users:</h1>
      <button onClick={addYears}>Add years</button>
      {currentState.persons.map(person => <Person name={person.name} age={person.age} />)}
    </div>
  )
};

export default App;