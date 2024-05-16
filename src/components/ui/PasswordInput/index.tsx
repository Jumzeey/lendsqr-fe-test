import React from "react"
import { useState } from "react"
import { IInputPropType } from "../../../lib/types"
import Input from "../Input"


const PasswordInput: React.FC<IInputPropType> = ({ placeholder, suffix, eventType,  ...rest }) => {
    const [showPassword, setShowPassword] = useState<boolean>(false);

    const togglePasswordVisibility = (e:React.MouseEvent<HTMLParagraphElement>) => {
        e.stopPropagation();
        console.log('clickerd')
        console.log(showPassword)
        setShowPassword(prevState => !prevState);
    }; 
  return (
    <div className="input-wrapper">
    <Input
        className="custom-input"
        placeholder={placeholder}
        type={showPassword ? "text" : "password"} // Toggle password visibility
        suffix={
            <p onClick={togglePasswordVisibility}>
                {showPassword ? "HIDE" : "SHOW"}
            </p>
        }
        {...rest}
    />
    {suffix}
</div>
  )
}

export default PasswordInput