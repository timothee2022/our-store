// import { createStyles } from '@mantine/core';
import React from "react";
import { Link } from "react-router-dom";
// import styles from './header';
import { connect } from "react-redux";
import { addToCart } from '../../Redux/Shopping/shopping-actions';
import { Box } from '@mui/material';


const Header = ({ productData, addToCart }) => {

  return (
    <div>
      <Link to="/">
        <h1 >
          OUR STORE
        </h1>
      </Link>


      <Link to="/electronics">
        <h3>Electronics</h3>
      </Link>

      <Box sx={{display: 'flex', flexDirection: 'row', textAlign: 'center', margin: '25px'}}>
        <div>
          <img
            src='https://images.unsplash.com/photo-1610792516307-ea5acd9c3b00?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80'
            alt='your product'
          />

          <div>
            <p>title:</p>
            <p>This is the description</p>
            <p>$ 15.00</p>
          </div>

          <img
            src='https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80'
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
                VIEW DETAILS
              </button>
            </Link>
            <button onClick={() => addToCart(productData.id)}>
              ADD TO CART
            </button>
          </div>
        </div>
      </Box>

      <Link to="/food">
        <h3>Food</h3>
      </Link>

    
      <img
            src='https://images.unsplash.com/photo-1522507806580-0be3530796be?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80'
            alt='your product'
          />

          <div>
            <p>title:</p>
            <p>This is the description</p>
            <p>$ 15.00</p>
          </div>

      <Link to="/cart">
      </Link>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    addToCart: (id) => dispatch(addToCart(id)),
    // loadCurrentItem: (item) => dispatch(loadCurrentItem(item)),
  };
};

export default connect(null, mapDispatchToProps)(Header);