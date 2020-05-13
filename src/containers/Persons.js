import React, { Component } from 'react';
import * as actions from '../store/actions';
import Person from '../components/Person/Person';
import AddPerson from '../components/AddPerson/AddPerson';
import { connect } from 'react-redux';

class Persons extends Component {

    personAddedHandler = () => {
        const newPerson = {
            id: Math.random(), // not really unique but good enough here!
            name: 'Max',
            age: Math.floor( Math.random() * 40 )
        }
        return newPerson
    }

    personDeletedHandler = (personId) => {
        this.setState( ( prevState ) => {
            return { persons: prevState.persons.filter(person => person.id !== personId)}
        } );
    }

    render () {
        return (
            <div>
                <AddPerson personAdded={() => this.props.onAddUser(this.personAddedHandler())} />
                {this.props.users.map(person => (
                    <Person 
                        key={person.id}
                        name={person.name} 
                        age={person.age} 
                        clicked={() => this.props.onRemoveUser(person.id)}/>
                ))}
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        users: state.users,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onAddUser: (newPerson) => dispatch({type: actions.ADD_USER, newPerson}),
        onRemoveUser: (personId) => dispatch({type: actions.REMOVE_USER, personId}),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Persons);