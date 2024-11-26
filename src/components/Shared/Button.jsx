import React from 'react';
import classNames from "classnames";
const Button = ({ text, classes = '', handleClick = null, disabled = false }) => {
    const styleClasses = classNames("base-button", classes);
    return (
        <button onClick={handleClick} className={styleClasses} disabled={disabled}>
            {text}
        </button>
    );
};

export default Button;
