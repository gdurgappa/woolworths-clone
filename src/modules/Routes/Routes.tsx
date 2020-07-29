import React, { useState, useEffect } from "react";
import { Route } from "react-router-dom";
import Home from "../../components/Home";
import { Switch } from "react-router-dom";
import ProductList from "../Products/ProductList";

const Routes = (props: {}) => {
  return (
    <Switch>
      <Route path="/" exact component={Home} />
      <Route
        path="/shop/browse/:category/:subCategory/:subCategorySelected"
        component={ProductList}
      />
    </Switch>
  );
};

export default Routes;
