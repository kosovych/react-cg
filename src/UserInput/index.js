import React from 'react';
import './style.css';

const UserInput = ({change, value}) => {
  return (
    <input type="text" value={value} onChange={ (event) => change(event.target.value) }/>
  )
}

export default UserInput;