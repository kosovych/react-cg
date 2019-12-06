import React from 'react';
import BurgerIngridients from './BurgerIngridients/BurgerIngridients';
import styles from './Burger.module.css';

const ingr = ['breat-top', 'meat', 'cheese', 'salet', 'becon', 'breat-bottom'];

const Burger = () => (
  <div className={styles.Burger}>
    { ingr.map( (ing) => <BurgerIngridients type={ing} /> ) }
  </div>
);

export default Burger;
