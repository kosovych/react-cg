import React from 'react';
import Person from './Person/Person';

class Persons extends React.Component  {
  static getDerivedStateFromProps(props, state) {
    return state
  }

  componentWillReceiveProps(props) {
    console.log('[Persons.js] -> componentWillReceiveProps()', props);
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log('[Persons.js] -> shouldComponentUpdate() ');
    return true;
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log('[Persons.js] -> getSnapshotBeforeUpdate() ');
    return {message: 'Hello!'}
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log('[Persons.js] -> componentDidUpdate()', snapshot);
  }

  render () {
    const { persons, change, removePerson } = this.props;
    console.log('[Persons.js render()]');
    
    return persons.map((person, index) => (
      <Person
      change={event => change(event, person.id)}
      click={() => removePerson(index)}
      key={index}
      name={person.name}
      age={person.age}
      />
    ))
  };
}

export default Persons;
