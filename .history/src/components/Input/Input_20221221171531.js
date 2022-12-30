import React from 'react'
import './Input.css'

function Input({ size = 'large', children, ...rest }) {
    return (
        <div>
            <input className={`input ${variant}`} {...rest}
                type="text">
            </input>
        </div>)
}

export default Input