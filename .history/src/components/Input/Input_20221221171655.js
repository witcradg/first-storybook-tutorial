import React from 'react'
import './Input.css'

function Input({ size='medium', children, ...rest }) {
    return (
        <div>
            <input className={`input ${size}`} {...rest}
                type="text">
            </input>
        </div>)
}

export default Input