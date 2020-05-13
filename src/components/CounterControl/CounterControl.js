import React from 'react';

import './CounterControl.css';

const counterControl = (props) => (
    <button className="CounterControl" onClick={props.clicked}>
        {props.label}
    </button>
);

export default counterControl;