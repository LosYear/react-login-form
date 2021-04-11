import React, { forwardRef } from "react";
import "./styles.scss";

const Input = forwardRef(
  ({ label, inputName, hasError, ...inputProps }, ref) => (
    <div className="input">
      <label htmlFor={inputName} className="input__label">
        {label}
      </label>
      <input
        {...inputProps}
        ref={ref}
        id={inputName}
        className="input__control"
      />
    </div>
  )
);

export default Input;
