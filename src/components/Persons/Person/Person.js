import React from 'react';
import './Person.css';
import Radium from 'radium';

class Person extends React.Component {
  
  render() {
    console.log('[Person.js render()]');
    const {name, age, children, click, change} = this.props;
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
}

export default Radium(Person);
