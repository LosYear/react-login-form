import React from "react";
import "./styles.scss";

const FormRow = ({ children, className }) => (
  <div className={`form-row ${className}`}>{children}</div>
);

export default FormRow;
