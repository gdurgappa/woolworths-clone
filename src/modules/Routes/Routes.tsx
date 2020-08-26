import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "../Home/Home";
import ProductDetails from "../Products/Details/ProductDetails";
import ProductList from "../Products/ProductList/ProductList";
import ProductsSearchResult from "../SearchProducts/ProductsSearchResult";

const Routes = () => {
  return (
    <Switch>
      <Route path="/" exact component={Home} />

      <Route
        exact
        path="/shop/browse/:category/:subCategory?/:subCategorySelected?"
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
