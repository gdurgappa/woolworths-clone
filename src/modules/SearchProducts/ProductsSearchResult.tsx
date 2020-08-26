import { Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Pagination from "@material-ui/lab/Pagination";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import ProductFilter from "../../components/ProductList/ProductFilter";
import ProductSortBy from "../../components/ProductList/ProductSortBy";
import Product from "../Products/Product";
import ProductSearchLeftPanel from "./ProductSearchLeftPanel";
import { UrlParams } from "../../types/commonTypes";
import {
  ProductReducerType,
  SearchProductsReducerType,
  AggregatedProductsResult,
  ProductType,
} from "../../types/product";
import { RootState } from "../../store/store";

const useStyles = makeStyles(() => ({
  root: {
    display: "flex",
    flexDirection: "column",
    width: "100%",
  },
  contentContainer: {
    margin: "0 auto",
    width: "960px",
  },
  breadCrumbContainer: {},
  breadCrumbItem: {},
  headingText: {
    marginBottom: "32px",
    textTransform: "capitalize",
    fontSize: "38px",
    lineHeight: 1.05263158,
    fontWeight: 500,
  },
  //total
  totalProductsText: {
    display: "flex",
    // fontFamily: "Fresh Sans,Helvetica,Arial,sans-serif",
    fontSize: "20px",
    marginRight: "18px",
  },
  //sort

  //products
  productsContainer: {
    display: "flex",
    flexFlow: "wrap",
    marginLeft: "-10px",
    marginRight: "-10px",
  },
  adBanner: {},
  breadCrumbs: {},
}));

function ProductsSearchResult() {
  const classes = useStyles();
  const [page, setPage] = useState({
    currentPage: 1,
    totalProductsCount: 0,
    limit: 10,
  });
  const params: UrlParams = useLocation<UrlParams>();
  const query = new URLSearchParams(params.search);

  const { search } = params;

  const dispatch = useDispatch();

  const productSearchCount: AggregatedProductsResult = useSelector<RootState>(
    (state) => state.search.aggregatedProductsResult
  );
  const {
    searchProductsResultsList,
    TotalRecordCount,
    SuggestedTerm,
    Aggregations,
  } = useSelector<RootState>(
    (state) => state.search as SearchProductsReducerType
  );

  useEffect(() => {
    dispatch({
      type: "PRODUCTS_SEARCH_AGGREGATED_RESULTS",
      payload: query.get("searchTerm"),
    });
    dispatch({
      type: "PRODUCTS_SEARCH_RESULTS",
      payload: query.get("searchTerm"),
    });
  }, [params]);
  return (
    <Grid container spacing={3}>
      <Grid item xs={2}>
        <ProductSearchLeftPanel
          productSearchCount={productSearchCount}
          aggregations={Aggregations}
        />
      </Grid>
      <Grid item xs={9} style={{ margin: "0 auto" }}>
        {/* <div className={classes.root}> */}
        <div className={classes.contentContainer}>
          {productSearchCount.ProductCount === 0 && (
            <h1 className={classes.headingText}>
              {`No results TBD... “${search.split("=")[1]}”`}
            </h1>
          )}
          {SuggestedTerm && (
            <div>
              <h1 className={classes.headingText}>
                {`Unfortunately, we couldn’t find results for “${
                  search.split("=")[1]
                }”`}
              </h1>
              <h3 className={classes.headingText}>
                {`Showing results for “${SuggestedTerm}”`}
              </h3>
            </div>
          )}
          {!SuggestedTerm && (
            <h1 className={classes.headingText}>
              {`Showing results for “${search.split("=")[1]}”`}
            </h1>
          )}
          <ProductFilter />
          <h4 className={classes.totalProductsText}>
            {TotalRecordCount} Products
          </h4>

          <ProductSortBy />

          <div className={classes.productsContainer}>
            {searchProductsResultsList.map((product: ProductType) => {
              return (
                <Product
                  key={product.Products[0].Stockcode}
                  {...product.Products[0]}
                />
              );
            })}
          </div>

          <Pagination
            count={
              page.totalProductsCount && page.totalProductsCount / page.limit
            }
            shape="rounded"
          />
        </div>
        {/* </div> */}
      </Grid>
    </Grid>
  );
}

export default ProductsSearchResult;
