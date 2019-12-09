import React from 'react';
import BuildControl from './BuildControl/BuildControl';

const controls = [
  { label: 'Meat', type: 'meat' },
  { label: 'Cheese', type: 'cheese' },
  { label: 'Salet', type: 'salet' },
  { label: 'Becon', type: 'becon' },
];

const BuildControls = ({addIng}) => {
  return (
    <>
      { controls.map(({ label, type }) => <BuildControl addIng={addIng} type={type} label={label} />) }
    </>
  );
}

export default BuildControls;
