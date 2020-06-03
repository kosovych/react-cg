import React from 'react';
import Burger from '../components/Burger/Burger';
import BuildControls from '../components/Burger/BuildControls/BuildControls';
import Modal from '../components/ui/Modal/Modal';
import OrderSummary from '../components/Burger/OrderSummary/OrderSummary';
import axios from '../axios/order-lost';
import Spiner from '../components/ui/Spiner';
import widthErrorHendler from '../hoc/widthErrorHendler';
import { connect } from 'react-redux';
import { getIngredients } from '../redux/actions/index';

class BurgerBuilder extends React.Component {
  state = {
    purchasable: false,
    purchased: false,
  };

  purchasedToggle = () => {
    this.setState( (prevState) => {
      return { purchased: !prevState.purchased }
    })
  }

  purchasContinue = () => {
    this.props.history.push('/checkout');
  }

  componentDidMount = () =>  {
      this.props.onIngredientsInit();
  }

  render() {
    const { purchased } = this.state;
    const disableInfo = {};
    for (let type in this.props.ingredients) {
      disableInfo[type] = this.props.ingredients[type] <= 0;
    }
    let order = (
      <OrderSummary
        purchasContinue={this.purchasContinue}
      />
    )
    if (this.props.loading) {
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
        {this.props.error && <p className="text-center">Ingredients can't be loaded</p>}
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
    loading: state.loading,
    error: state.error,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onIngredientsInit: () => dispatch(getIngredients())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(widthErrorHendler( BurgerBuilder, axios ));

