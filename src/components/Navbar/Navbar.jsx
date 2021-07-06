import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <ul className="nav-menu">
        <Link to="/">
          <li className="nav-item active">🏠 HOME</li>
        </Link>
        <Link to="/products">
          <li className="nav-item">💻 PRODUCTS</li>
        </Link>
        <Link to="/cart">
          <li className="nav-item">🛒 CART</li>
        </Link>
      </ul>
    </nav>
  );
};

export default Navbar;
