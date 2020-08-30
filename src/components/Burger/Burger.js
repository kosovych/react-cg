import React from 'react';
import BurgerIngredients from './BurgerIngredients/BurgerIngredients';
import styles from './Burger.module.css';
import { connect } from 'react-redux';

const Burger = ({ ingredients, ...rest }) => {
  let arrOfingredients = Object.keys(ingredients)
    .map((ingKey => [...Array(ingredients[ingKey])]
      .map( (_, i) => <BurgerIngredients key={ingKey + i} type={ingKey} />) ))
    .reduce((arr, el) => {
      return el.concat(arr)
    }, []);
    
    if (arrOfingredients.length === 0) arrOfingredients = <p className="ta-center">Please, start adding ingredients</p>
  return (
    <>
      <div className={styles.Burger}>
        <BurgerIngredients type="breat-top" />
          {arrOfingredients}
        <BurgerIngredients type="breat-bottom" />
      </div>
    </>

  )
};

const mapStateToProps = state => {
  return {
    ingredients: state.burgerBuilder.ingredients,
  }
}

export default connect(mapStateToProps)(Burger);
