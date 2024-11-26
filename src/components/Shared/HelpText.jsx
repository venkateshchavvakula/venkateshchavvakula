import React from "react";
import classNames from "classnames";

const HelpText = ({
    children,
    classes = ''
}) => {
    const styleClasses = classNames(
        "base-helptext",
        classes
    );
    return (
        <p className={styleClasses}>
            {children}
        </p>
    );
};

export default HelpText;