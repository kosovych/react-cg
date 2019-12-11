import React from 'react';
import Backdrop from '../Backdrop/Backdrop';
import styles from './Modal.module.css';

const Modal = ({ children }) => (
  <>
    <Backdrop/>
    <div className={styles.Modal}>
      {children}
    </div>
  </>
);

export default Modal;
