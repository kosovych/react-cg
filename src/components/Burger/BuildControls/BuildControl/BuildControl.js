import React from 'react';
import styles from './BuildControl.module.css';

const BuildControl= ({ label, addIng, type }) => {
  return (
    <div className={[styles.BuildControl, 'alert alert-info d-flex justify-content-center align-items-center'].join(' ')}>
      <div className={[styles.Label, 'h5'].join(' ')}>{ label }</div>
      <button
        className={[styles.BuildControlBtn, 'btn btn-success'].join(' ')}
        type="button"
        onClick={() => addIng(type)}
      >
        More
      </button>
      <button
        className={[styles.BuildControlBtn, 'btn btn-light'].join(' ')}
        type="button"
      >
        Less
      </button>
    </div>
  );
};

export default BuildControl
