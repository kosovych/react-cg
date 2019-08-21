import React from 'react';

const Person = ({name, age, children}) => {
  return (
    <div>
      <p>I'm a {name}. I'm {age} y.o. </p>
      <p>{children}</p>
    </div>
    )
}

export default Person;