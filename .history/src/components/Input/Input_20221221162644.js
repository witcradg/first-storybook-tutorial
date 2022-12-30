import React from 'react'
import '.Input.css'

function Input({ variant = 'primary', children, ...rest }) {
    return (
        <div>
            <label for="fname">First name:</label>
            <input type="text" id="fname" name="fname"></input>
        </div>)
}

export default Input