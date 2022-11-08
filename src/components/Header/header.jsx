import React from "react";
import { Link } from "react-router-dom";

const Header = () => {

  return (
    <div>
      <Link to="/">
        <h1>OUR STORE</h1>
      </Link>

      <Link to="/electronics">
        <h3>Electronics</h3>
      </Link>

      <Link to="/food">
        <h3>Food</h3>
      </Link>

      <Link to="/cart">
      </Link>
    </div>
  );
};


export default Header;