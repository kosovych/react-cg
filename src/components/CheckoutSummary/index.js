import React from 'react';
import Burger from '../Burger/Burger';

const CheckoutSummary = ({ ingr, onContinueCheckout, onCancelCheckout }) => {
    return (
        <div style={{textAlign: 'center'}}>
            <h1>We hope it's taste well</h1>
            <Burger ingr={ingr} />
            <button
                onClick={() => onCancelCheckout()}
                type="button"
                style={{marginRight: '16px'}}
                className="btn btn-secondary"
                data-dismiss="modal"
            >
                Cancel
            </button>
            <button
                onClick={() => onContinueCheckout()}
                type="button"
                className="btn btn-primary"
            >
                Continue
            </button>
        </div>
    )
}
export default CheckoutSummary;