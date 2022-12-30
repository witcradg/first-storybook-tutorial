import React from 'react';

function Button({ variant = 'primary', children, ...rest }) {
    return (
        <div>
            <button className={`button ${variant}`} {...rest} >{children}</button>
        </div>
    );
}

export default Button;