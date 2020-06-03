import React from 'react';
import classes from './style.module.css';
import { connect } from 'react-redux';
import * as actions from '../../../redux/actions/actionTypes';
import axios from '../../../axios/order-lost';
import Spiner from '../../../components/ui/Spiner/index';
import Input from '../../../components/ui/Input';

class ContactData extends React.Component {
    state = {
        orderForm: {
            name: {
                elementType: 'input',
                elementConfig: {
                    labelTxt: 'Name',
                    id: 'user-name',
                    type: 'text',
                    placeholder: 'Your Name',
                    value: '',
                },
                valid: false,
                validation: {
                    required: true,
                },
                touched: false,
            },
            country: {
                elementType: 'input',
                elementConfig: {
                    labelTxt: 'Country',
                    id: 'user-country',
                    type: 'text',
                    placeholder: 'Your Country',
                    value: '',
                },
                valid: false,
                validation: {
                    required: true,
                },
                touched: false,
            },
            street: {
                elementType: 'input',
                elementConfig: {
                    labelTxt: 'Street',
                    id: 'user-street',
                    type: 'text',
                    placeholder: 'Your Street',
                    value: '',
                },
                valid: false,
                validation: {
                    required: true,
                },
                touched: false,
            },
            zipCode: {
                elementType: 'input',
                elementConfig: {
                    labelTxt: 'ZIP Code',
                    id: 'user-zipCode',
                    type: 'text',
                    placeholder: 'ZIP',
                    value: '',
                },
                valid: false,
                validation: {
                    required: true,
                    min: 5,
                    max: 5,
                },
                touched: false,
            },
            email: {
                elementType: 'input',
                elementConfig: {
                    labelTxt: 'Email',
                    id: 'user-email',
                    type: 'email',
                    placeholder: 'Your Email',
                    value: '',
                },
                valid: false,
                validation: {
                    required: true,
                },
                touched: false,
            },
            deliveryMethod: {
                elementType: 'select',
                elementConfig: {
                    labelTxt: 'Delivery Method',
                    id: 'user-deliveryMethod',
                    value: 'cheapest',
                    options: [
                        {value: 'fastest', text: 'Fastest'},
                        {value: 'cheapest', text: 'Cheapest'},
                    ],
                },
            },
        },
        loading: false,
        formValid: false,
    }

    formHandler = (event) => { 
        event.preventDefault();
        const { ingredients, totalPrice} = this.props;
        const { orderForm } = this.state;
        const orderInfo = {};
        for (const input in orderForm) {
            orderInfo[input] = orderForm[input].elementConfig.value;
        }

        const order = {
            ingredients,
            totalPrice,
            orderInfo
        };
        console.dir(order);
        this.setState(() => ({loading: true}));
        axios.post('/orders.json', order)
        .then(
            res => {
                this.setState(() => ({ loading: false}));
                this.props.history.push('/');
                this.props.resetIngredients();
            }
        )
        .catch(err => this.setState(() => ({ loading: false})));
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

    changeHandler = (event, input) => {
        let formOrder = { ...this.state.orderForm };
        let formOrderInput = {...formOrder[input]};
        if(formOrderInput.validation) {
            const {isValid, errorMessage} = this.isValid(event.target.value, formOrderInput.validation);
            formOrderInput.touched = true;
            formOrderInput.valid = isValid;
            formOrderInput.errorMessage = errorMessage;
        }
        formOrderInput.elementConfig.value = event.target.value;
        formOrder[input] = formOrderInput;
        this.setState(() => ({orderForm: formOrder}), () => this.validateForm());
    }
    
    validateForm = () => {
        const validationArray = [];
        const { orderForm } = this.state;
        for(const input in orderForm) {
            console.log(input);
            if(orderForm[input].validation) {
                validationArray.push(orderForm[input].valid);
            }
        }
        this.setState(() => ({formValid: validationArray.every(el => el === true)}));
    }

    render() {
        const { orderForm, loading, formValid } = this.state;
        const inputs = [];
        for(let input in orderForm) {
            inputs.push(
                <Input
                    invalidClass={!orderForm[input].valid && orderForm[input].touched ? 'is-invalid' : null}
                    key={orderForm[input].elementConfig.id}
                    showError={!orderForm[input].valid && orderForm[input].touched}
                    errorMessage={orderForm[input].errorMessage}
                    elementType={orderForm[input].elementType}
                    elementConfig={orderForm[input].elementConfig}
                    changed={(event) => this.changeHandler(event, input)}
                />    
            )
        }
        const form = (
            loading ? <Spiner /> : (
                <form className={classes.Form} onSubmit={this.formHandler}>
                    <h2>Contact Form</h2>
                        {inputs}
                    <button disabled={!formValid} type="submit" className="btn btn-primary">Submit</button>
                </form>
            )
        );
        return(
            { ...form }
        )
    }
}

const mapStateToProps = state => ({
    ingredients: state.ingredients,
    totalPrice: state.totalPrice,
});

const mapDispathToProps = dispatch => {
    return {
        resetIngredients: () => dispatch({type: actions.RESET_Ingredients})
    }
}

export default connect(mapStateToProps, mapDispathToProps)(ContactData);