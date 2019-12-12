import React from 'react';

const OrderSummary = ({ ingridiends, price }) => {
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
      <h2 className="text-center">Price: <span className="badge badge-secondary">$ {price}</span></h2>
    </>
    )
  };

export default OrderSummary;
