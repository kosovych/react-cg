import React from 'react';
import './Person.css';

const Person = ({name, age, children, click, change}) => {
  if( Math.random() < 0.7 ) {
    throw new Error('Some went wrong!');
  }
  return (
    <div className="Person" onClick={click}>
      <p>I'm a {name}. I'm {age} y.o. </p>
      <p>{children}</p>
      <input type="text" value={name} onChange={change}/>
    </div>
    )
}

export default Person;