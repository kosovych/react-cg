import React from 'react';
import Burger from '../components/Burger/Burger';
import BuildControls from '../components/Burger/BuildControls/BuildControls';
import Modal from '../components/ui/Modal/Modal';
import OrderSummary from '../components/Burger/OrderSummary/OrderSummary';
import axios from '../axios/order-lost';
import Spinner from '../components/ui/Spinner';
import widthErrorHendler from '../hoc/widthErrorHendler';
import { connect } from 'react-redux';
import { getIngredients, setRedirectPath } from '../redux/actions/index';

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

  setRedirectPath = () => {
    console.log('----setRedirectPath');
    if(this.props.isBuildingBugger) {
      return this.props.onSetRedirectPath('/checkout')
    }
    return this.props.onSetRedirectPath('/')
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
      order = <Spinner />
    }
    return (
      <>
        {
          this.props.ingredients ? (
          <>
            <Burger />
            <BuildControls
              setRedirectPath={this.setRedirectPath}
              disableInfo={disableInfo}
              purchasedToggle={this.purchasedToggle}
            />
          </>
          ) : <Spinner />
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
    ingredients: state.burgerBuilder.ingredients,
    totalPrice: state.burgerBuilder.totalPrice,
    loading: state.burgerBuilder.loading,
    error: state.burgerBuilder.error,
    isBuildingBugger: state.burgerBuilder.isBuildingBugger,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onIngredientsInit: () => dispatch(getIngredients()),
    onSetRedirectPath: (path) => dispatch(setRedirectPath(path))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(widthErrorHendler( BurgerBuilder, axios ));

