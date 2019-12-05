import React from 'react';
import './Person.css';
import Radium from 'radium';
import Aux from '../../../hoc/Auxilirator';
import AuthContext from '../../../context/auth-context';

class Person extends React.Component {

  static contextType = AuthContext;

  componentDidMount() {
    this.$input.focus();
  }
  
  render() {
    console.log('%c%s', 'color: green', `login is: >>>${this.context.auth}<<<`);
    console.log('[Person.js render()]');
    const {name, age, children, click, change} = this.props;
    const style = {
      '@media (max-width: 500px)': {
        width: '90%',
      }
    }
    return (
      <AuthContext.Consumer>
        { ({auth}) => (
          <div className="Person">
            {auth ? <p>Autorized</p> : <p>PLS login</p>}
            <button
                onClick={click}>
                x
              </button>
            <p>I'm a {name}. I'm {age} y.o. </p>
            <p>{children}</p>
            <input
              type="text"
              value={name}
              onChange={change}
              ref={ (input) =>  this.$input = input}
            />
          </div>
        )}
      </AuthContext.Consumer>
    )
  }
}

export default Radium(Person);
