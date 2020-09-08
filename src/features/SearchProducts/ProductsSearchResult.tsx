import { Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import ProductSortBy from "../Products/ProductList/ProductSortBy";
import { RootState } from "../../store/store";
import { UrlParams } from "../../types/commonTypes";
import {
  AggregatedProductsResult,
  ProductType,
  SearchProductsReducerType,
} from "../../types/product";
import Product from "../Products/Product";
import ProductSearchLeftPanel from "./ProductSearchLeftPanel";
import ProductFilter from "../Products/ProductList/ProductFilter";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    width: "100%",
  },
  contentContainer: {
    margin: "0 auto",
    width: "960px",
    paddingTop: "64px",
    [theme.breakpoints.down("sm")]: {
      width: "100%",
    },
  },
  breadCrumbContainer: {},
  breadCrumbItem: {},
  headingText: {
    marginBottom: "32px",
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

  const params: UrlParams = useLocation<UrlParams>();
  const query = new URLSearchParams(params.search);

  const { search } = params;

  const dispatch = useDispatch();

  const productSearchCount: AggregatedProductsResult = useSelector<
    RootState,
    AggregatedProductsResult
  >((state) => state.search.aggregatedProductsResult);
  const {
    searchProductsResultsList,
    TotalRecordCount,
    SuggestedTerm,
    Aggregations,
    loading,
  } = useSelector<RootState, SearchProductsReducerType>(
    (state) => state.search
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
  console.log("loading", loading, productSearchCount.ProductCount);
  return (
    <Grid container spacing={3}>
      <Grid item xs={2}>
        <ProductSearchLeftPanel
          productSearchCount={productSearchCount}
          aggregations={Aggregations}
        />
      </Grid>
      <Grid item xs={9} style={{ margin: "0 auto" }}>
        <div className={classes.contentContainer}>
          {!loading && productSearchCount.ProductCount === 0 && search && (
            <h1 className={classes.headingText}>
              {`No results for “${search.split("=")[1]}”`}
            </h1>
          )}
          {SuggestedTerm && search && (
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
          {!SuggestedTerm && search && (
            <h1 className={classes.headingText}>
              Showing results for &quot;<i>{decodeURI(search.split("=")[1])}</i>
              &quot;
            </h1>
          )}
          <ProductFilter />
          <h4 className={classes.totalProductsText}>
            {TotalRecordCount} Products
          </h4>

          <ProductSortBy />

          <div className={classes.productsContainer}>
            {searchProductsResultsList.map((product: ProductType) => {
              return <Product key={product.Stockcode} {...product} />;
            })}
          </div>
        </div>
        {/* </div> */}
      </Grid>
    </Grid>
  );
}

export default ProductsSearchResult;
