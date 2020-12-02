import React, { useState } from 'react';
import IngredientForm from './IngredientForm';
import Search from './Search';
import IngredientList from './IngredientList';
import ErrorModal from '../UI/ErrorModal';

const Ingredients = () => {
  const [ ingredients, setIngredients ] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const onClose = () => {
    setError('');
    setLoading(false);
  }

  const onAddIngredients = ingredient => {
    setLoading(true);
    fetch(
      'https://react-cg.firebaseio.com/ingreds.json',  {
      method: 'POST',
      body: JSON.stringify(ingredient),
      headers: {
        'Content-Type': 'application/json'
      }
    })
    .then(res => res.json())
    .then(data => {
      setLoading(false);
      setIngredients((prevState) => [...prevState, {...ingredient, id: data.name}]);
    })
    .catch(error => setError(error.message))

  }

  const onRemoveHandler = (id) => {
    setLoading(true);
    fetch(
      `https://react-cg.firebaseio.com/ingreds/${id}.json`,  {
      method: 'DELETE'
    }).then(res => {
      setLoading(false);
      const newIngredients = [];
      ingredients.forEach(ingredient => {
        if(ingredient.id !== id) {
          newIngredients.push(ingredient)
        }
      }); 
      setIngredients([...newIngredients]);
    }).catch(error => setError(error.message))
  }

  return (
    <div className="App">
      {error && <ErrorModal onClose={onClose} />}
      <IngredientForm
        loading={loading}
        onAddIngredients={onAddIngredients}
      />
      <section>
        <Search onAddIngredients={setIngredients} />
        <IngredientList ingredients={ingredients} onRemoveItem={onRemoveHandler} />
      </section>
    </div>
  );
}

export default Ingredients;
