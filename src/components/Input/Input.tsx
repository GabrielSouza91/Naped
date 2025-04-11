import "./InputStyles.scss";
import React from "react";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  icon?: string; 
}

export function Input({ icon,  ...rest }: InputProps) {
  return (
    <div className={`input-container `}>
      {icon && <img src={icon} className="input-icon" />}
      <input {...rest} />
    </div>
  );
}
