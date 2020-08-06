import React, { useState, useEffect } from "react";
import { Route } from "react-router-dom";
import Home from "../../components/Home";
import { Switch } from "react-router-dom";
import ProductList from "../Products/ProductList";
import ProductDetails from "../Products/Details/ProductDetails";

const Routes = (props: {}) => {
  return (
    <Switch>
      <Route path="/" exact component={Home} />
      <Route
        path="/shop/browse/:category/:subCategory/:subCategorySelected/:nodeId"
        component={ProductList}
      />
      <Route
        path="/shop/productdetails/:Stockcode/:product"
        component={ProductDetails}
      />
    </Switch>
  );
};

export default Routes;
