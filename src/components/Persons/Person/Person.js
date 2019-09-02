import React from 'react';
import './Person.css';
import Radium from 'radium';

const Person = ({name, age, children, click, change}) => {
  const style = {
    '@media (max-width: 500px)': {
      width: '90%',
    }
  }
  return (
    <div style={style} className="Person">
      <button
          onClick={click}>
          x
        </button>
      <p>I'm a {name}. I'm {age} y.o. </p>
      <p>{children}</p>
      <input type="text" value={name} onChange={change}/>
    </div>
    )
}

export default Radium(Person);