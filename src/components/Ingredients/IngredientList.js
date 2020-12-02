import React from 'react';

import './IngredientList.css';

const IngredientList = props => {
  return (
    <section className="ingredient-list">
      <h2>Loaded Ingredients</h2>
      <ul>
        {props.ingredients.map(ig => (
          <li
            key={ig.id}
            style={{
              display: 'flex',
              alignItems: 'center',
            }}
          >
            <span>{ig.title}</span>
            <span>{ig.amount}</span>
            <button
              onClick={props.onRemoveItem.bind(this, ig.id)}
              type="button"
            >x</button>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default IngredientList;
