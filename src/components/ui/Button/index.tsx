import React from "react"
import { IButtonPropType } from "../../../lib/types"
import './button.scss'


const Button: React.FC<IButtonPropType> = ({ variant = 'primary', children, ...props }) => {
    return (
        <button type="button" className={`button ${variant}`} {...props}>
            {children}
        </button>
    )
}

export default Button