import React from 'react';
import { connect } from 'react-redux';

const OrderSummary = ({ ingredients, startPrice, totalPrice }) => {
  const ingrSummury = Object.keys(ingredients).map( ing => {
  return <li key={ing + 'OrderSummary'}><span className="text-capitalize">{ing}</span>: {ingredients[ing]}</li>
  });
  return (
    <>
      <h2>Your order</h2>
      <p>Burger with ingredients</p>
      <ul>
        {ingrSummury}
      </ul>
      <h2 className="text-center">
        Price:
        {''}
        <span className="badge badge-secondary">
          $ {totalPrice || startPrice}
        </span>
      </h2>
    </>
    )
  };

  const mapStateToProps = state => {
    return {
      ingredients: state.burgerBuilder.ingredients,
      totalPrice: state.burgerBuilder.totalPrice,
      startPrice: state.burgerBuilder.startPrice,
    }
  }

export default connect(mapStateToProps)(OrderSummary);
