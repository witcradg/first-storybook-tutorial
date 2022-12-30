import React from 'react';
import Link from 'gatsby'
import './MenuItem.css'

function MenuItem({ variant = 'horizontal', children, ...rest }) {
    return (
        <div className="anchor-transition mx-1">
            <Link className={`menuItem ${variant}`} {...rest} target="_blank"
                rel="noopener noreferrer" >
                {children}
            </Link>
        </div>
    );
}

export default MenuItem;
