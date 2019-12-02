import React from 'react';
import Person from './Person/Person';

class Persons extends React.Component  {
  constructor(props) {
    super(props)
  }
  static getDerivedStateFromProps(props, state) {
    return state
  }

  componentWillReceiveProps(props) {
    console.log('[Persons.js] -> componentWillReceiveProps()', props);
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log('[Persons.js] -> shouldComponentUpdate() ');
    if(nextProps.persons !== this.props.persons) {
      return true;
    }
    return false
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log('[Persons.js] -> getSnapshotBeforeUpdate() ');
    return {message: 'Hello!'}
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log('[Persons.js] -> componentDidUpdate()', snapshot);
  }

  componentWillUnmount() {
    console.log('[Persons.js] -> componentWillUnmount()');
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
