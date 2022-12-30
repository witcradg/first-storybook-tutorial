import React from 'react'
import './Input.css'

function Input({ variant = 'primary', children, ...rest }) {
    return (
        <div>
            <input className={`input ${variant}`} {...rest}
                type="text">
            </input>
        </div>)
}

export default Input