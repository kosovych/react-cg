import React from 'react';
import BurgerIngridients from './BurgerIngridients/BurgerIngridients';
import styles from './Burger.module.css';
import { connect } from 'react-redux';

const Burger = ({ ingredients, ...rest }) => {
  console.log(ingredients);
  let arrOfingredients = Object.keys(ingredients)
    .map((ingKey => [...Array(ingredients[ingKey])]
      .map( (_, i) => <BurgerIngridients key={ingKey + i} type={ingKey} />) ))
    .reduce((arr, el) => {
      return el.concat(arr)
    }, []);
    
    if (arrOfingredients.length === 0) arrOfingredients = <p className="ta-center">Please, start adding ingridients</p>
  return (
    <>
      <div className={styles.Burger}>
        <BurgerIngridients type="breat-top" />
          {arrOfingredients}
        <BurgerIngridients type="breat-bottom" />
      </div>
    </>

  )
};

const mapStateToProps = state => {
  return {
    ingredients: state.ingredients,
  }
}

export default connect(mapStateToProps)(Burger);
