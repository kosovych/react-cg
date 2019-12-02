import React, { useEffect } from 'react';

const Cockpit = ({ isShow, personsLength, tooglePerson }) => {
  useEffect( () => {
    console.log('[Cockpit.js] -> useEffect()');
    const timerId = setTimeout( () => {
      alert('Saved to server');
    }, 1000);

    return () => {
      // clearTimeout(timerId);
      console.log('[Cockpit.js] cleanup work')
    };
  }, []);

  useEffect( () => {
    console.log('[Cockpit.js] -> 2nd useEffect()');
    return () => console.log('[Cockpit.js] cleanup 2 work');
  });

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

  if (personsLength <= 2) {
    classes.push('red');
  }
  if (personsLength <= 1) {
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

export default React.memo(Cockpit);
