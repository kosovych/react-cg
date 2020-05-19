import React from 'react';
import BuildControl from './BuildControl/BuildControl';
import { connect } from 'react-redux';

const controls = [
  { label: 'Meat', type: 'meat' },
  { label: 'Cheese', type: 'cheese' },
  { label: 'Salet', type: 'salet' },
  { label: 'Becon', type: 'becon' },
];

const BuildControls = (
  {
    addIng,
    rmIng,
    disableInfo,
    totalPrice,
    startPrice,
    purchasedToggle,
    ingredients
  }) => {
  const isPurchasable = Object.entries(ingredients).some(([type, count]) => {
    return count > 0
  });
  return (
    <>
      <h2 className="text-center">Price <span className="badge badge-secondary">$ {totalPrice || startPrice}</span></h2>
      { controls.map(({ label, type }) => (
        <BuildControl
          disable={disableInfo[type]}
          key={type}
          addIng={addIng}
          type={type}
          label={label}
          rmIng={rmIng}
        />)
      )}
      <div className="d-flex justify-content-center btn-lg">
        <button
          className="btn btn-primary"
          disabled={!isPurchasable}
          onClick={() => purchasedToggle()}
          >
            Order NOW!
          </button>
      </div>
    </>
  );
}

const mapStateToProps = state => {
  return {
    ingredients: state.ingredients,
    totalPrice: state.totalPrice,
    startPrice: state.startPrice,
  }
}

export default connect(mapStateToProps)(BuildControls);