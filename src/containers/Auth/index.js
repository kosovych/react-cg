import React, { Component } from 'react';
import { connect } from 'react-redux';
import Input from '../../components/ui/Input';
import classes from '../Checkout/ContactData/style.module.css';
import { auth } from '../../redux/actions';
import { Redirect } from 'react-router-dom';
import Spinner from '../../components/ui/Spinner';
import { isValid } from '../../utils/isValid';
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

    changeHandler(event, input) {
        const controls = {
            ...this.state.controls,
            [input]: {
                ...this.state.controls[input],
                touched: true,
                valid: isValid(event.target.value, this.state.controls[input].validation).isValid,
                elementConfig: {
                    ...this.state.controls[input].elementConfig,
                    value: event.target.value,
                }
            }
        };
        this.setState(() => ({controls}))
    }

    onSubmitHandler(evt) {
        evt.preventDefault();
        this.props.onAuth(
            this.state.controls.email.elementConfig.value,
            this.state.controls.password.elementConfig.value,
            this.state.isSignUp
        )
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
        let error = this.props.error ? <p className="alert alert-danger" role="alert">{this.props.error}</p> : null;
        return (
            <div style={{'marginTop': '112px'}} className={classes.Form}>
                <h2>{ this.state.isSignUp ? 'SIGN UP' : 'SIGN IN' }</h2>
                { error }
                <form onSubmit={(evt) => this.onSubmitHandler(evt)}>
                    {form}
                    <button
                        type="submit"
                        disabled={this.props.loading}
                        className="btn btn-primary mb-3 d-inline-flex align-items-center"
                        >
                        {this.props.loading ? <Spinner className="p-1 mr-2" /> : null }
                        Submit
                    </button>
                </form>
                <button
                    className="btn btn-secondary"
                    onClick={ () => this.setState(prevState => ({ isSignUp : !prevState.isSignUp }) ) }
                >
                    Switch to { !this.state.isSignUp ? 'SIGN UP' : 'SIGN IN' }
                </button>
                {this.props.isAuth && <Redirect to={this.props.redirectPath} />}
            </div>
        );
    }
};

const mapStateToProps = state => ({
    error: state.auth.error,
    loading: state.auth.loading,
    isAuth: state.auth.token !== null,
    redirectPath: state.auth.redirectPath,
});

const mapDispatchToProps = dispatch => ({
    onAuth: (email, password, isSignUp) => dispatch(auth(email, password, isSignUp)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Auth);
