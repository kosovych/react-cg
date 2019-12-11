import React from 'react';
import Burger from '../components/Burger/Burger';
import BuildControls from '../components/Burger/BuildControls/BuildControls';
import Modal from '../components/ui/Modal/Modal';
import OrderSummary from '../components/Burger/OrderSummary/OrderSummary';

class BurdergBuilder extends React.Component {
  state = {
    price: 3,
    purchasable: false,
    purchased: false,
    ingr: {
      meat: 0,
      cheese: 0,
      salet: 0,
      becon: 0
    },
    prices: {
      meat: 1.2,
      cheese: 0.5,
      salet: 0.1,
      becon: 0.6
    },
  };

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

    this.setState((prevState) => {
      return { purchasable: isPurchasable};
    })
  }

  purchasedHandler = () => {
    this.setState( (prevState) => {
      console.log('click');
      
      return { purchased: !prevState.purchased }
    })
  }

  render() {
    const { ingr, purchased, purchasable } = this.state;
    const disableInfo = {};
    for (let type in ingr) {
      disableInfo[type] = ingr[type] <= 0;
    }
    let ingrPrice = Object.entries(this.state.ingr).reduce((price, [type, count]) => {
      return price + count * this.state.prices[type];
    }, this.state.price);
    return (
      <>
        <Burger ingr={ingr} />
        <BuildControls
          disableInfo={disableInfo}
          addIng={this.addIngridiend}
          rmIng={this.removeIngridiend}
          price={ingrPrice}
          purchasedHandler={this.purchasedHandler}
          purchasable={purchasable}
        />
        { purchased ?
          <Modal>
            <OrderSummary ingridiends={this.state.ingr} />
          </Modal>
          :
          null
        }
      </>
    )
  } 
};

export default BurdergBuilder;
