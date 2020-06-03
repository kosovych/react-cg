import React from 'react';
import PropTypes from 'prop-types';
import style from './BurgerIngredients.module.css';

const BurgerIngredients = ({
  type
}) => {
  let ingridient;

  switch (type) {
    case 'breat-bottom':
      ingridient = <div className={[style.BreadBottom, style.Ingridient].join(' ')}/>
      break;
    case 'breat-top':
      ingridient = <div className={[style.BreadTop, style.Ingridient].join(' ')}/>
      break;
    case 'meat':
      ingridient = <div className={[style.Meat, style.Ingridient].join(' ')}/>
      break;
    case 'cheese':
      ingridient = <div className={[style.Cheese, style.Ingridient].join(' ')}/>
      break;
    case 'salet':
      ingridient = <div className={[style.Salad, style.Ingridient].join(' ')}/>
      break;
    case 'becon':
      ingridient = <div className={[style.Bacon, style.Ingridient].join(' ')}/>
      break;

    default:
      ingridient = null
      break;
  }
  return ingridient
};

BurgerIngredients.propTypes = {
  type: PropTypes.string.isRequired,
};

export default BurgerIngredients;
