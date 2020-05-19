import React from 'react';
import styles from './BuildControl.module.css';
import { connect } from 'react-redux';
import * as actions from '../../../../redux/actions';

const BuildControl= ({ label, addIngridiend, type, removeIngridiend, disable }) => {
  return (
    <div className={[styles.BuildControl, 'alert alert-info d-flex justify-content-center align-items-center'].join(' ')}>
      <div className={[styles.Label, 'h5'].join(' ')}>{ label }</div>
      <button
        className={[styles.BuildControlBtn, 'btn btn-success'].join(' ')}
        type="button"
        onClick={() => addIngridiend(type)}
      >
        More
      </button>
      <button
        className={[styles.BuildControlBtn, 'btn btn-light'].join(' ')}
        type="button"
        onClick={() => removeIngridiend(type)}
        disabled={disable}
      >
        Less
      </button>
    </div>
  );
};

const mapDispathToProps = dispatch => {
  return {
    addIngridiend: (ingredientType) => dispatch({ type: actions.ADD_INGRIDIEND, ingredientType, cb: actions.CALC_PRICE }),
    removeIngridiend: (ingredientType) => dispatch({ type: actions.REMOVE_INGRIDIEND, ingredientType, cb: actions.CALC_PRICE }),
  }
}

export default connect(null, mapDispathToProps)(BuildControl);
