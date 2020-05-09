import React from 'react';
import classes from './style.module.css';
import axios from '../../../axios/order-lost';
import Spiner from '../../../components/ui/Spiner/index';

class ContactData extends React.Component {
    state = {
        name: 'Yaro',
        email: 'example@mail.com',
        address: {
            street: 'Iziz',
            postalCode: '152',
        },
        loading: false
    }

    formHandler = (event) => {
        const { ingr, totalPrice} = this.props;
        event.preventDefault();
            const order = {
            ingr,
            totalPrice,
            customer: {
                address: {
                country: 'Ukraine',
                street: 'SomeTest',
                zipCode: '451212',
                },
                email: 'qwerty@qwerty.com',
                name: 'User Name'
            },
            deliveryMethod: 'fatest'
            };
            console.dir(order);
            this.setState(() => ({loading: true}));
            axios.post('/orders.json', order)
            .then(
                res => {
                    this.setState(() => ({ loading: false}));
                    this.props.history.push('/');
                }
            )
            .catch(err => this.setState(() => ({ loading: false})));
    }

    render() {
        const form = (
            this.state.loading ? <Spiner /> : (
                <form className={classes.Form}>
                    <h2>Contact Form</h2>
                    <div className="form-group">
                        <input type="text" placeholder="Name" className="form-control" />
                    </div>
                    <div className="form-group">
                        <input type="email" placeholder="Email" className="form-control" />
                    </div>
                    <div className="form-group">
                        <input type="text" placeholder="Street" className="form-control" />
                    </div>
                    <div className="form-group">
                        <input type="text" placeholder="ZIP" className="form-control" />
                    </div>
                    <button onClick={this.formHandler} type="submit" className="btn btn-primary">Submit</button>
                </form>
            )
        );
        return(
            { ...form }
        )
    }
}

export default ContactData;