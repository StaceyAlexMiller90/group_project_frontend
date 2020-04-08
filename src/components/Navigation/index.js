import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectToken } from "../../store/user/selectors";
import NavbarItem from "./NavbarItem";
import LoggedIn from "./LoggedIn";
import LoggedOut from "./LoggedOut";
import { selectCart } from "../../store/cart/selector";

export default function Navigation() {
  const token = useSelector(selectToken);
  const cart = useSelector(selectCart);

  const totalPrice = cart.map((item) => item.price).reduce((a, b) => a + b, 0);

  const loginLogoutControls = token ? <LoggedIn /> : <LoggedOut />;

  return (
    <Navbar bg="light" expand="lg">
      <Navbar.Brand as={NavLink} to="/">
        Completely Cool Cars
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav style={{ width: "100%" }} fill>
          <NavbarItem path="/" linkText="Home" />
          <NavbarItem path="/inventory" linkText="View Our Inventory" />
          <NavbarItem path="/contact" linkText="Contact Us" />
          {token ? (
            <NavbarItem
              path="cart"
              linkText={`Cart: ${cart.length} - Total Price €${totalPrice}`}
            />
          ) : null}
          {loginLogoutControls}
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}
