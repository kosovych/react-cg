import React from 'react';
import Backdrop from '../Backdrop/Backdrop';
import styles from './Modal.module.css';

const Modal = ({ children, shown, onCloseHandler, title, footer }) => (
  <>
  {
    shown
    ?
      <>
        <Backdrop clicked={onCloseHandler} />
        <div className={[styles.Modal, 'modal-dialog'].join(' ')} role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">{title}</h5>
            </div>
            <div className="modal-body">
              {children}
            </div>
            {
              footer
              ?
              <div className="modal-footer">
                { footer }
              </div>
              :
              null
            }
          </div>
        </div>
      </>
    :
      null
  }
  </>
);

export default Modal;
