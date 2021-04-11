import React from "react";
import "./styles.scss";

const FormLayout = ({ children }) => (
  <div className="form-layout">
    <h1 className="form-layout__header">Sign in</h1>
    {children}
  </div>
);

export default FormLayout;
