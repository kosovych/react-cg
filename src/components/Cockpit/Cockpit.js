import React from 'react';

const Cockpit = ({ isShow, persons, tooglePerson }) => {
  const btnStyle = {
    color: 'white',
    backgroundColor: 'green',
    padding: '6px 9px',
    ':hover': {
      border: '3px solid #ccc'
    }
  };
  const style = {
    color: `red`
  };
  const classes = [];

  if (isShow) {
    btnStyle.backgroundColor = 'red';
  } else {
    btnStyle.backgroundColor = 'green';
    btnStyle[':hover'] = { borderRadius: '12px' };
  }

  if (persons <= 2) {
    classes.push('red');
  }
  if (persons <= 1) {
    classes.push('bold');
  }

  return (
    <React.Fragment>
      <h1 style={style}>This is some users:</h1>
      <p className={classes.join(' ')}>Some text</p>
      <button style={btnStyle} onClick={tooglePerson}>
        Add years
      </button>
    </React.Fragment>
  );
};

export default Cockpit;
