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

    componentDidMount = () => {
        const query = new URLSearchParams(this.props.location.search);
        const ingrs = {};
        let totalPrice;
        for (let pair of query.entries()) {
            if(pair[0] === 'totalPrice') {
                totalPrice = +pair[1];
            } else {
                ingrs[pair[0]] = +pair[1];
            }
        }
        this.setState(() => ({ ingr: {...ingrs}, totalPrice: totalPrice}))
    }

    render() {
        return (
            <>
                <CheckoutSummary
                    ingr={this.state.ingr}
                    onCancelCheckout={this.cancelCheckout}
                    onContinueCheckout={this.continueCheckout}
                />
                <Route
                    path={`${this.props.match.path }/contact-data`}
                    render={
                        () => <ContactData totalPrice={this.state.totalPrice} ingr={this.state.ingr} {...this.props} />
                    }
                />
            </>
        )
    } 
}

export default Checkout;