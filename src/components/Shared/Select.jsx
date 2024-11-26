import React from "react";
import classNames from "classnames";
import uuid from 'react-uuid';

const Select = ({
    name,
    options,
    value,
    error = "",
    handleChange,
    errorClasses,
    classes = '',
}) => {
    const styleClasses = classNames(
        "base-text",
        classes
    );
    const textErrorClasses = classNames(
        "base-text-error",
        errorClasses
    );
    return (
        <div className="relative mb-4">
            <select 
                name={name}
                id={name}
                value={value}
                onChange={handleChange}
                className={styleClasses}
                >
                {options.map(option => (<option key={uuid()} value={option.id}>{option.name}</option>))}
            </select>
            {error.length > 0 && (
                <p className={textErrorClasses}>
                    {error}
                </p>
            )}
        </div>
    );
};

export default Select;