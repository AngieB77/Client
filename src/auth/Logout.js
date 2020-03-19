import React from "react";
import { NavItem, NavLink } from "reactstrap";

const Logout = props => {
  return (
    <NavLink
      onClick={() => props.setSession(localStorage.removeItem("token"))}
      // id="logout"
      className="logout"
    >
      Logout
    </NavLink>
  );
};

export default Logout;
