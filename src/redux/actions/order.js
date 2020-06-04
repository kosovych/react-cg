import * as actionTypes from './actionTypes';
import axios from '../../axios/order-lost';

export const purchaseSuccess = (id, purchaseObj) => {
  return {
    type: actionTypes.PURCHASE_SUCCESS,
    id: id,
  }
}

export const purchaseFail = (error) => {
  return {
    type: actionTypes.PURCHASE_FAIL,
    error: error,
  }
}

export const purchaseStart = () => {
  return dispatch => {
    axios.get('/orders.json')
    .then(res => {
        let orders = [];
        for ( let order in res.data) {
            orders.push({ingredients: res.data[order].ingredients, totalPrice: res.data[order].totalPrice, id: order})
        };
        console.log(orders);
        
        this.setState({loading: false, orders})
    }
  )
  }
}