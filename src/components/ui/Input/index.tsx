import React from 'react'
import { IInputPropType } from '../../../lib/types'
import './input.scss'

const Input: React.FC<IInputPropType> = ({ placeholder, suffix,  ...rest }) => {
  return (
    <div className="input-wrapper">
      <input className="custom-input" placeholder={placeholder} {...rest} />
      <span>
          {suffix}
      </span>
    </div>
  );
}

export default Input