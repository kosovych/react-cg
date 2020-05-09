import React from 'react';
import Burger from '../components/Burger/Burger';
import BuildControls from '../components/Burger/BuildControls/BuildControls';
import Modal from '../components/ui/Modal/Modal';
import OrderSummary from '../components/Burger/OrderSummary/OrderSummary';
import axios from '../axios/order-lost';
import Spiner from '../components/ui/Spiner';
import widthErrorHendler from '../hoc/widthErrorHendler';
import { withRouter } from 'react-router-dom';

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

  addIngridiend = (type) => {
    this.setState((prevState) => {
      return { ingr: { ...prevState.ingr, [type]: prevState.ingr[type] + 1 }}
    }, () => this.updatePurchasable()); 
  };

  removeIngridiend = (type) => {
    if(this.state.ingr[type] <= 0) return
    this.setState((prevState) => {
      return { ingr: { ...prevState.ingr, [type]: prevState.ingr[type] - 1 }}
    }, () => this.updatePurchasable()); 
  }

  updatePurchasable = () => {
    const isPurchasable = Object.entries(this.state.ingr).some(([type, count]) => {
      return count > 0
    });

    this.setState(() => {
      return { purchasable: isPurchasable};
    }, () => this.getPrice())
  }

  purchasedToggle = () => {
    this.setState( (prevState) => {
      return { purchased: !prevState.purchased }
    })
  }

  purchasContinue = () => {
    const { ingr } = this.state;
    const query = [];
    for (let prop in ingr) {
      query.push( `${encodeURIComponent(prop)}=${encodeURIComponent(ingr[prop])}` )
    }
    query.push(`totalPrice=${this.state.totalPrice}`)
    this.props.history.push(
      {
        pathname: '/checkout',
        search: `?${query.join('&')}`
      }
    );
  }

  getPrice = () => {
    let ingrPrice = Object.entries(this.state.ingr).reduce((price, [type, count]) => {
      return price + count * this.state.prices[type];
    }, this.state.price);
    this.setState({totalPrice: ingrPrice.toFixed(2) });
  }

  render() {
    const { ingr, purchased, purchasable, loading } = this.state;
    const disableInfo = {};
    for (let type in ingr) {
      disableInfo[type] = ingr[type] <= 0;
    }
    let order = (
      <OrderSummary
        price={this.state.totalPrice}
        purchasContinue={this.purchasContinue}
        ingridiends={this.state.ingr}
      />
    )
    if (loading) {
      order = <Spiner />
    }
    return (
      <>
        {
          ingr ? (
          <>
            <Burger ingr={ingr} />
            <BuildControls
              disableInfo={disableInfo}
              addIng={this.addIngridiend}
              rmIng={this.removeIngridiend}
              price={this.state.totalPrice || this.state.price}
              purchasedToggle={this.purchasedToggle}
              purchasable={purchasable}
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

export default widthErrorHendler(withRouter(BurgerBuilder), axios);
