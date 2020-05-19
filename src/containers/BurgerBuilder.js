import React from 'react';
import Burger from '../components/Burger/Burger';
import BuildControls from '../components/Burger/BuildControls/BuildControls';
import Modal from '../components/ui/Modal/Modal';
import OrderSummary from '../components/Burger/OrderSummary/OrderSummary';
import axios from '../axios/order-lost';
import Spiner from '../components/ui/Spiner';
import widthErrorHendler from '../hoc/widthErrorHendler';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

class BurgerBuilder extends React.Component {
  state = {
    price: 3,
    totalPrice: 0,
    purchasable: false,
    purchased: false,
    loading: false,
    ingr: null,
    prices: {
      meat: 1.2,
      cheese: 0.5,
      salet: 0.1,
      becon: 0.6
    },
  };

  componentWillMount() {
    axios.get('/ingridients.json')
      .then(res => this.setState(() => ({ingr: res.data})))
  }

  purchasedToggle = () => {
    this.setState( (prevState) => {
      return { purchased: !prevState.purchased }
    })
  }

  purchasContinue = () => {
    this.props.history.push('/checkout');
  }

  render() {
    const { purchased, loading } = this.state;
    const disableInfo = {};
    for (let type in this.props.ingredients) {
      disableInfo[type] = this.props.ingredients[type] <= 0;
    }
    let order = (
      <OrderSummary
        purchasContinue={this.purchasContinue}
      />
    )
    if (loading) {
      order = <Spiner />
    }
    return (
      <>
        {
          this.props.ingredients ? (
          <>
            <Burger />
            <BuildControls
              disableInfo={disableInfo}
              purchasedToggle={this.purchasedToggle}
            />
          </>
          ) : <Spiner />
        }
        <Modal
          shown={purchased}
          onCloseHandler={this.purchasedToggle}
          title={'Order'}
          footer={
            <>
              <button onClick={this.purchasedToggle} type="button" className="btn btn-secondary" data-dismiss="modal">Cancel</button>
              <button onClick={this.purchasContinue} type="button" className="btn btn-primary">Continue</button>
            </>
          }
          >
          {order}
        </Modal>
      </>
    )
  } 
};

const mapStateToProps = state => {
  return {
    ingredients: state.ingredients,
    totalPrice: state.totalPrice,
  }
}

export default widthErrorHendler(withRouter(connect(mapStateToProps)(BurgerBuilder)), axios);
