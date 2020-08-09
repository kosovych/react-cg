import React from 'react';

const Input = ({elementType, invalidClass, elementConfig, errorMessage, showError, changed}) => {
    let input = null;
    let {id, labelTxt, ...rest} = elementConfig;
    
    switch (elementType) {
        case 'input':
            input = (
                <>
                    <label className="text-left d-block" htmlFor={id}>{labelTxt}</label>
                    <input
                        id={id} className={`form-control ${invalidClass}`}
                        onChange={changed}
                        {...rest}
                    />
                    {showError && <p className="text-left invalid-feedback">{errorMessage}</p>}
                </>
            )
            break;

        case 'select':
            input = (
                <>
                    <label className="text-left d-block" htmlFor={id}>{labelTxt}</label>
                    <select
                        className="form-control"
                        onChange={changed}
                        id={id}
                        value={rest.value}
                    >
                        {elementConfig.options.map((option, i) => {
                            return <option key={option.value} value={option.value}>{option.text}</option>
                        })}
                    </select>
                </>
            )
            break;
    
        default:
            break;
    }
    return(
        <div className="form-group">
            {input}
        </div>
    );
}

export default Input;