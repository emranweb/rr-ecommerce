import React from "react";
import Container from "@material-ui/core/Container";
import { Link } from "react-router-dom";
import CartIcon from "./cartIcon";

const Header = () => {
  return (
    <header className="header">
      <Container maxWidth="lg">
        <div className="header-inner">
          <div className="logo">
            <Link to="/">RR Ecommerce</Link>
          </div>
          <div className="menu">
            <li>
              <Link to="/shop">Shop</Link>
            </li>
            <li>
              <Link to="/signin">login</Link>
            </li>
            <CartIcon />
          </div>
        </div>
      </Container>
    </header>
  );
};

export default Header;
