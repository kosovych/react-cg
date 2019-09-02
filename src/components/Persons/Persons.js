import React from 'react';
import Person from './Person/Person';

const Persons = ({ persons, change, removePerson }) =>
  persons.map((person, index) => (
    <Person
      change={event => change(event, person.id)}
      click={() => removePerson(index)}
      key={index}
      name={person.name}
      age={person.age}
    />
  ));

export default Persons;
