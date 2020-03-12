import React from "react";
import { NavLink } from "react-router-dom";

import dashboard from "../../assets/images/dashboard.svg";
import copy from "../../assets/images/copy.svg";
import sell from "../../assets/images/sell.svg";
import headset from "../../assets/images/headset.svg";
import settings from "../../assets/images/settings.svg";
import exit from "../../assets/images/exit.svg";

const navItems = [
  { name: "Dashboard", image: dashboard, route: "/" },
  { name: "Ticket", image: copy, route: "/ticket" },
  { name: "Customer list", image: sell, route: "/customer" },
  { name: "Agents", image: headset, route: "/agents" },
  { name: "Settings", image: settings, route: "/settings" },
  { name: "Logout", image: exit, route: "/logout" }
];

function SideNav() {
  return (
    <div className="side-nav">
      <small className="font-bold">MENU</small>
      {navItems.map((item, i) => (
        <div className="side-nav__link-container">
          <img
            src={item.image}
            alt="dashboard-gauge"
            className="side-nav__image"
          />
          <NavLink to={item.route} className="side-nav__link">
            {item.name}
          </NavLink>
        </div>
      ))}
    </div>
  );
}

export default SideNav;
