import React from "react";
import "./nav1.css";
import MenuDesplegable from "./MenuDesplegable";
import Logo from "./logo";


function Nav1() {
  return (
    <div className="nav1">
        <div className="logo"><Logo />
        </div>
        <div className="localizador1">
        <MenuDesplegable/>
        </div>
      </div>
  );
}
export default Nav1;