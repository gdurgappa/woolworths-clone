import React, { useState, useEffect } from "react";
import { Route } from "react-router-dom";
import Home from "../../components/Home";
import { Switch } from "react-router-dom";
import ProductList from "../Products/ProductList";
import ProductDetails from "../Products/Details/ProductDetails";
import ProductsSearchResult from "../SearchProducts/ProductsSearchResult";

const Routes = (props: {}) => {
  return (
    <Switch>
      <Route path="/" exact component={Home} />
      <Route
        exact
        path="/shop/browse/:category/:subCategory"
        component={ProductList}
      />
      <Route
        exact
        path="/shop/browse/:category/:subCategory/:subCategorySelected"
        component={ProductList}
      />
      <Route
        exact
        path="/shop/search/products"
        component={ProductsSearchResult}
      />
      <Route
        path="/shop/productdetails/:Stockcode/:product"
        component={ProductDetails}
      />
    </Switch>
  );
};

export default Routes;
