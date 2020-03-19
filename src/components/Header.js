import React from "react";
import { Navbar, NavItem } from "reactstrap";
import Logout from "../auth/Logout";

const Header = props => {
  return (
    <Navbar>
      <NavItem type="submit" background color="#778899">
        <Logout setSession={props.setSession} />
      </NavItem>
    </Navbar>
  );
};

export default Header;
