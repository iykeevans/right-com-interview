import React from "react";
import menu from "../../assets/images/menu.svg";

function NavBar() {
  return (
    <div className="nav-bar">
      <div style={{ fontSize: 20, color: "#212121" }}>RightCare</div>
      <div style={{ display: "flex" }}>
        <div style={{ marginRight: 20, fontSize: 12, color: "#657288" }}>
          SARA DOE
        </div>
        <div style={{ marginRight: 20, fontSize: 12, color: "#657288" }}>
          English
        </div>
        <img src={menu} alt="" srcset="" />
      </div>
    </div>
  );
}

export default NavBar;
