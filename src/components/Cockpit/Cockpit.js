import React, { useEffect, useRef, useContext } from 'react';
import AuthContext from '../../context/auth-context';

const Cockpit = ({ isShow, personsLength, tooglePerson, ...rest }) => {
  const authContext = useContext(AuthContext);
  const $btn = useRef();

  useEffect( () => {
    $btn.current.style.boxShadow = '0px 0px 2px 0px black';
    return () => {
      console.log('%c%s', 'background: linear-gradient( gold, orangered);', 'USEEFFECT');
    }
  });

  useEffect( () => {
    console.log('[Cockpit.js] -> useEffect()');
    const timerId = setTimeout( () => {
      console.log('Saved to server');
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

  useEffect(() => {
    console.log('%c%s', 'color: orange' ,authContext.auth);
    return () => console.log('%c%s', 'color: orange' ,authContext.auth);
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
    <AuthContext.Consumer>
      {({logIn}) => (
        <React.Fragment>
          <h1 style={style}>This is some users:</h1>
          <p className={classes.join(' ')}>Some text</p>
          <button
            style={btnStyle}
            onClick={tooglePerson}
            ref={$btn}
            >
            Add years
          </button>
          <button
            type="button"
            onClick={logIn}
            >
            LOGIN
          </button>
        </React.Fragment>
      )}
    </AuthContext.Consumer>
  );
};

export default Cockpit;
