import React from "react";
import { Link } from "react-router-dom";
import styles from './header';

const Header = ({ productData }) => {

  return (
    <div>
      <Link to="/">
        <h1>OUR STORE</h1>
      </Link>


      <Link to="/electronics">
        <h3>Electronics</h3>
      </Link>

      <div className={styles.product}>
        <img
          src='https://images.unsplash.com/photo-1610792516307-ea5acd9c3b00?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80'
          alt='your product'
        />

        <div>
          <p>title:</p>
          <p>This is the description</p>
          <p>$ 15.00</p>
        </div>

        <div>
          <Link to={`/product/someID`}>
            <button>
              View Item
            </button>
          </Link>
          <button>
            Add To Cart
          </button>
        </div>
      </div>

      <Link to="/food">
        <h3>Food</h3>
      </Link>

      <Link to="/cart">
      </Link>
    </div>
  );
};


export default Header;