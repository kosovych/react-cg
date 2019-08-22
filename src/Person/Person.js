import React from 'react';
import './Person.css';

const Person = ({name, age, children, click, change}) => {
  return (
    <div className="Person" onClick={click}>
      <p>I'm a {name}. I'm {age} y.o. </p>
      <p>{children}</p>
      <input type="text" value={name} onChange={change}/>
    </div>
    )
}

export default Person;