import React from "react";
import "./styles.scss";
import image from "./image.svg";

const SidebarLayout = ({ children }) => (
  <div className="sidebar-layout">
    <div className="sidebar-layout__illustration">
      <img className="sidebar-layout__image" src={image} alt="" width="37vw" />
    </div>
    <div className="sidebar-layout__content">{children}</div>
  </div>
);

export default SidebarLayout;
