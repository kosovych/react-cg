import React from 'react';
import Transition from 'react-transition-group/Transition';

import './Modal.css';

const modal = ({show, closed}) => {
    return (
        <Transition
            in={show}
            timeout={1000}
            mountOnEnter
            unmountOnExit
            onEnter={() => {console.log('onEnter')}}
            onEntering={() => {console.log('onEntering')}}
            onEntered={() => {console.log('onEntered')}}
            onExit={() => {console.log('onExit')}}
            onExiting={() => {console.log('onExiting')}}
            onExited={() => {console.log('onExited')}}
        >
            {state => (
                <div
                    className="Modal"
                    style={{
                        transform: `scale(${state === 'entered' ? 1 : 0})`,
                        opacity: state === 'entered' ? 1 : 0,
                    }}
                >
                    <h1>A Modal</h1>
                    <button className="Button" onClick={closed}>Dismiss</button>
                </div>
            )}
        </Transition>
    )
};

export default modal;
