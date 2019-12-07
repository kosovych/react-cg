import React from 'react';
import BurgerIngridients from './BurgerIngridients/BurgerIngridients';
import styles from './Burger.module.css';



const Burger = ({ ingr }) => {
  const arrOfIngr = Object.keys(ingr)
    .map((ingKey => [...Array(ingr[ingKey])]
      .map( (_, i) => <BurgerIngridients key={ingKey + i} type={ingKey} />) ));
  return (
    <div className={styles.Burger}>
      <BurgerIngridients type="breat-top" />
        {arrOfIngr}
      <BurgerIngridients type="breat-bottom" />
    </div>
  )
};

export default Burger;
