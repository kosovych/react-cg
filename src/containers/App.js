import React from 'react';
import './style.css';
import Persons from '../components/Persons/Persons';
import Radium, { StyleRoot } from 'radium';
import Cockpit from '../components/Cockpit/Cockpit';
import AuthContext from '../context/auth-context';

class App extends React.Component {
  constructor(props) {
    super(props);
    console.log('[App.js] -> constructor()');
    this.$btn = React.createRef();
  }
  state = {
    persons: [
      { id: 'asdf', name: 'Max', age: 29 },
      { id: 'zxcvb', name: 'Dani', age: 18 },
      { id: 'cvbn', name: 'Tanya', age: 21 }
    ],
    showPerson: true,
    showCockpit: true,
    auth: false,
  };

  static getDerivedStateProps(props, state) {
    console.log('[App.js] -> getDerivedStateProps()', props);
    return state;
  }

  componentDidMount() {
    console.log('[App.js] componentDidMount()');
    console.log(this.$btn.current.style.outline = '2px solid green');
  }

  componentWillMount() {
    console.log('[App.js] componentWillMount()');
  }

  addYears = () => {
    let newPersonsYears = this.state.persons.map(person => {
      let { name, age } = person;
      age++;
      return { name, age };
    });
    this.setState({
      persons: newPersonsYears
    });
  };

  change = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => p.id === id);
    const person = { ...this.state.persons[personIndex] };
    person.name = event.target.value;
    const persons = [...this.state.persons];
    persons[personIndex] = person;
    this.setState({ persons });
  };
  tooglePerson = () => {
    this.setState({
      showPerson: !this.state.showPerson
    });
  };

  loginHandler = () => {
    console.log('loginHandler()');
    this.setState({
      auth: true,
    });
  }

  removePerson = index => {
    const persons = [...this.state.persons];
    persons.splice(index, 1);
    this.setState({
      persons: persons
    });
  };
  
  render() {
    console.log('[App.js render()]');
    let persons;
    if (this.state.showPerson) {
      persons = (
        <div>
          <Persons
            persons={this.state.persons}
            change={this.change}
            removePerson={this.removePerson}
          />
        </div>
      );
    } else {
      persons = null;
    }
    return (
      <StyleRoot>
        <button
          type="button"
          ref={this.$btn}
          onClick={() => {this.setState({showCockpit: false})}}
        >Remove Cockpit</button>
        <div>
          <AuthContext.Provider
            value={
              {
                auth: this.state.auth,
                logIn: this.loginHandler,
              }
            }>
            { this.state.showCockpit ?
            <Cockpit
              isShow={this.state.showPerson}
              personsLength={this.state.persons.length}
              tooglePerson={this.tooglePerson}
            />

            : null
            }
          {this.state.showPerson === true ? persons : null}
          </AuthContext.Provider>
        </div>
      </StyleRoot>
    );
  }
}

export default Radium(App);
