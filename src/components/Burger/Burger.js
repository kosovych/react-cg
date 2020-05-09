import React from 'react';
import BurgerIngridients from './BurgerIngridients/BurgerIngridients';
import styles from './Burger.module.css';


const Burger = ({ ingr, ...rest }) => {
  
  let arrOfIngr = Object.keys(ingr)
    .map((ingKey => [...Array(ingr[ingKey])]
      .map( (_, i) => <BurgerIngridients key={ingKey + i} type={ingKey} />) ))
    .reduce((arr, el) => {
      return el.concat(arr)
    }, []);
    
    if (arrOfIngr.length === 0) arrOfIngr = <p className="ta-center">Please, start adding ingridients</p>
  return (
    <>
      <div className={styles.Burger}>
        <BurgerIngridients type="breat-top" />
          {arrOfIngr}
        <BurgerIngridients type="breat-bottom" />
      </div>
    </>

  )
};

export default Burger;
