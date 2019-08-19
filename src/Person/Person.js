import React from 'react';
import { random } from 'node-forge';

const Person = () => {
  return <p>I'm a Person. I'm {Math.floor(Math.random() * 30)} y.o</p>
}

export default Person;