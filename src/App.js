import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

import { connect } from "react-redux";
import Header from './components/Header/header';
import Footer from './components/Footer/footer';
// import Categories from './components/Categories/categories';
import Products from './components/Products/products';
import './App.css';

function App({ current }) {
  return (
    <Router>
      <div className="app">
        <Header />
        <Footer />
        <Products />
        <Switch>
          <Route exact path="/" component={Products} />
          {/* <Route exact path="/electronics" component={Electronics} />
          <Route exact path="/food" component={Food} /> */}
        </Switch>
      </div>
    </Router>
  );
}

export default App;
