import React from 'react';
import BuildControl from './BuildControl/BuildControl';

const controls = [
  { label: 'Meat', type: 'meat' },
  { label: 'Cheese', type: 'cheese' },
  { label: 'Salet', type: 'salet' },
  { label: 'Becon', type: 'becon' },
];

const BuildControls = ({addIng, rmIng, disableInfo, price, purchasable}) => {
  return (
    <>
    <h2 className="text-center">Price <span className="badge badge-secondary">$ {price.toFixed(2)}</span></h2>
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
    <button disabled={!purchasable}>Order NOW!</button>
    </>
  );
}

export default BuildControls;