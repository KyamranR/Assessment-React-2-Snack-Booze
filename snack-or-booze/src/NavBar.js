import React from "react";
import "./NavBar.css";
import { NavLink } from "react-router-dom";
import { Navbar, Nav } from "reactstrap";

function NavBar() {
  return (
    <div>
      <Navbar expand="md">
        <NavLink exact to="/" className="navbar-brand">
          Snack or Booze
        </NavLink>

        <Nav className="ml-auto" navbar>
          <NavLink to="/snacks">Snacks</NavLink>
          <NavLink to="/drinks">Drinks</NavLink>
          <NavLink to="/add">Add Item</NavLink>
        </Nav>
      </Navbar>
    </div>
  );
}

export default NavBar;
