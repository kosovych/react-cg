import React, { useState } from 'react';
import IngredientForm from './IngredientForm';
import Search from './Search';
import IngredientList from './IngredientList';

function Ingredients() {
  const [ ingredients, setIngredients ] = useState([]);

  const onAddIngredients = ingredient => {
    setIngredients((prevState) => [...prevState, ingredient]);
  }
  return (
    <div className="App">
      <IngredientForm onAddIngredients={onAddIngredients} />

      <section>
        <Search />
        <IngredientList ingredients={ingredients} />
      </section>
    </div>
  );
}

export default Ingredients;
