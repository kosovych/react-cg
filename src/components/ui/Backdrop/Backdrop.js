import React from 'react';
import styles from './Backdrop.module.css';

const Backdrop = ({ clicked }) => (
  <div onClick={clicked} className={styles.Backdrop} />
);

export default Backdrop;
