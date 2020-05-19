import React from 'react';
import { Route } from 'react-router-dom';
import CheckoutSummary from '../../components/CheckoutSummary';
import ContactData from './ContactData';

class Checkout extends React.Component {
    state = {
        ingr: {}
    }

    cancelCheckout = () => {
        this.props.history.goBack();
    }

    continueCheckout = () => {
        this.props.history.push('/checkout/contact-data');
    }

    render() {
        return (
            <>
                <CheckoutSummary
                    onCancelCheckout={this.cancelCheckout}
                    onContinueCheckout={this.continueCheckout}
                />
                <Route
                    path={`${this.props.match.path }/contact-data`}
                    render={
                        () => <ContactData totalPrice={this.state.totalPrice} {...this.props} />
                    }
                />
            </>
        )
    } 
}

export default Checkout;