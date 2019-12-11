import React from 'react';

const OrderSummary = ({ ingridiends }) => {
  const ingrSummury = Object.keys(ingridiends).map( ing => {
  return <li key={ing + 'OrderSummary'}><span className="text-capitalize">{ing}</span>: {ingridiends[ing]}</li>
  });
  return (
    <>
      <h2>Your order</h2>
      <p>Burger with ingridients</p>
      <ul>
        {ingrSummury}
      </ul>
    </>
    )
  };

export default OrderSummary;
