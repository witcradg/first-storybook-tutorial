import React from 'react';
import './MenuItem.css'

function MenuItem({ variant = 'horizontal', children, ...rest }) {
    return (
        <div>
            <button className={`button ${variant}`} {...rest} >
                {children}
                </button>
        </div>
    );
}

export default MenuItem;
