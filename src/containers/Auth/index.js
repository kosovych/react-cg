import React, { Component } from 'react';
import { connect } from 'react-redux';
import Input from '../../components/ui/Input';
import classes from '../Checkout/ContactData/style.module.css';
import { auth } from '../../redux/actions';

class Auth extends Component {
    state = {
        controls: {
            email: {
                elementType: 'input',
                elementConfig: {
                    labelTxt: 'Email',
                    id: 'user-email',
                    type: 'text',
                    placeholder: 'Your Email',
                    value: '',
                },
                valid: false,
                validation: {
                    required: true,
                },
                touched: false,
            },
            password: {
                elementType: 'input',
                elementConfig: {
                    labelTxt: 'Password',
                    id: 'user-password',
                    type: 'password',
                    placeholder: 'Your Password',
                    value: '',
                },
                valid: false,
                validation: {
                    required: true,
                },
                touched: false,
            },
        },
        isSignUp: true,
    }

    isValid = (value, validation) => {   
        const { required, min, max } = validation;
        const trimedValue = value .trim();
        let errorMessage = '';
        let isValid = false;
        if(required) {
            isValid = trimedValue.length > 0;
            errorMessage = `Should be not empty`;
        }
        if(min) {
            isValid = trimedValue.length >= min;
            errorMessage = `Should be more than ${min}`;
        }
        if(max) {
            isValid = trimedValue.length <= max;
            errorMessage = `Should be less than ${max}`;
        }
        if(min && max) {
            isValid = trimedValue.length >= min && trimedValue.length <= max;
            errorMessage = `Should be more than ${min} and less than ${max}`;
        }   
        return {isValid, errorMessage};
    }

    changeHandler(event, input) {
        const controls = {
            ...this.state.controls,
            [input]: {
                ...this.state.controls[input],
                touched: true,
                valid: this.isValid(event.target.value, this.state.controls[input].validation).isValid,
                elementConfig: {
                    ...this.state.controls[input].elementConfig,
                    value: event.target.value,
                }
            }
        };
        this.setState(() => ({controls}), () => console.dir(this.state))
    }

    onSubmitHandler(evt) {
        evt.preventDefault();
        console.log(this.state);
        
        this.props.onAuth(this.state.controls.email.elementConfig.value, this.state.controls.password.elementConfig.value, this.state.isSignUp)
    }

    render() {
        const { controls } = this.state;
        const inputs = [];
        for(let input in controls) {
            inputs.push(
                <Input
                    invalidClass={(!controls[input].valid && controls[input].touched) ? 'is-invalid' : ''}
                    key={controls[input].elementConfig.id}
                    showError={!controls[input].valid && controls[input].touched}
                    errorMessage={controls[input].errorMessage}
                    elementType={controls[input].elementType}
                    elementConfig={controls[input].elementConfig}
                    changed={(event) => this.changeHandler(event, input)}
                />    
            )
        }
        const form = [...inputs];
        return (
            <div style={{'marginTop': '112px'}} className={classes.Form}>
                <h2>{ this.state.isSignUp ? 'SIGN UP' : 'SIGN IN' }</h2>
                <form onSubmit={(evt) => this.onSubmitHandler(evt)}>
                    {form}
                    <button
                        type="submit"
                        className="btn btn-primary mb-3"
                    >
                        Submit
                    </button>
                </form>
                <button
                    className="btn btn-secondary"
                    onClick={ () => this.setState(prevState => ({ isSignUp : !prevState.isSignUp }) ) }
                >
                    Switch to { !this.state.isSignUp ? 'SIGN UP' : 'SIGN IN' }
                </button>
            </div>
        );
    }
};

const mapDispatchToProps = dispatch => ({
    onAuth: (email, password, isSignUp) => dispatch(auth(email, password, isSignUp)),
});

export default connect(null, mapDispatchToProps)(Auth);