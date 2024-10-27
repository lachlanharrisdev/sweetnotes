import "../css/sidebar.css";
import React from "react";
import { FaHome, FaUser, FaCog } from "react-icons/fa";

const SideBar = ({ icons }) => {
    return (
        <div className="sidebar">
      <div className="icon__list">
        {icons.map((icon, index) => (
          <div
            key={index}
            className="icon__container"
            onClick={icon.action}
            title={icon.title}
          >
            {icon.icon}
          </div>
        ))}
      </div>
    </div>
    );
};


export default SideBar;