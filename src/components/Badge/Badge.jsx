import React from 'react'

import "./Badge.scss"

const Badge = ({color, onClick, className}) => {
    return (
        <i className={`_badge  ${className}`} style={{ backgroundColor: color}} onClick={onClick}></i>
    )
}

export default Badge