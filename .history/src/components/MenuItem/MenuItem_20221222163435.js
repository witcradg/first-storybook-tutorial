import React from 'react';
import Link from 'gatsby'
import './MenuItem.css'

function MenuItem({ variant = 'horizontal', children, ...rest }) {
    return (
        <div className="anchor-transition mx-1">
			<h1>Placeholder</h1>
            {/* <Link className={`menuItem ${variant}`} {...rest} target="_blank"
                rel="noopener noreferrer" >
                {children}
            </Link> */}
        </div>
    );
}

export default MenuItem;

				// <div className="anchor-transition mx-1">
				// 	<Link
				// 		className="white-anchor"
				// 		to="/collections/delta-8-gummies/"
				// 		target="_blank"
				// 		rel="noopener noreferrer"
				// 	>
				// 		<span>Delta 8 Gummies</span>
				// 	</Link>
				// </div>