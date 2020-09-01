import React from "react";
import { Route, Switch } from "react-router-dom";
import ProductDetails from "../../features/Products/Details/ProductDetails";
import ProductsSearchResult from "../../features/SearchProducts/ProductsSearchResult";
import ProductList from "../../features/Products/ProductList/ProductList";
import Home from "../../features/Home/Home";

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
