import React from 'react';
const Text = ({ name, placeholder = "", value, error = "", handleChange }) => {
    return (
        <div className="relative mb-4">
            <textarea
                name={name}
                id={name}
                value={value}
                onChange={handleChange}
                placeholder={placeholder}
                className=" mb-4 h-32 w-full px-4 py-2 base-textarea"
            ></textarea>
            {error.length > 0 && (
                <p className="relative text-sm text-red-500">
                    {error}
                </p>
            )}
        </div>
    );
};

export default Text;