import React from "react";
import { connect } from "react-redux";
import Header from "../Header/header";

const Products = ({ products }) => {
  return (
    <div>
      {products.map((prod) => (
        <Header key={prod.id} productData={prod} />
      ))}
    </div>
  );
};

const mapSateToProps = state => {
  return {
    products: state.shop.products,
  }
}

export default connect(mapSateToProps)(Products);