import React from 'react';
import classNames from "classnames";

const Text = ({
    name,
    type="text",
    placeholder = "",
    value,
    error = "",
    maxLength = '100',
    handleChange,
    errorClasses,
    min = '',
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
            <input
                type={type}
                name={name}
                id={name}
                value={value}
                min={min}
                maxLength={maxLength}
                onChange={handleChange}
                placeholder={placeholder}
                className={styleClasses}
            />
            {error.length > 0 && (
                <p className={textErrorClasses}>
                    {error}
                </p>
            )}
        </div>
    );
};

export default Text;