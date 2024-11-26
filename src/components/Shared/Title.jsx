import React from "react";
import classNames from "classnames";

const Title = ({
    children,
    classes = ''
}) => {
    const styleClasses = classNames(
        "base-title",
        classes
    );
    return (
        <h2 className={styleClasses}>
            {children}
        </h2>
    );
};

export default Title;