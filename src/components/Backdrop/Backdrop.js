import React from 'react';

import './Backdrop.css';
import CSSTransition from 'react-transition-group/CSSTransition';

const backdrop = ({show}) => {
    return (
        <CSSTransition
         classNames="Backdrop"
         timeout={500}
         in={show}
         mountOnEnter
         unmountOnExit
        >
            <div className="Backdrop" />
        </CSSTransition>
    )
};

export default backdrop;
