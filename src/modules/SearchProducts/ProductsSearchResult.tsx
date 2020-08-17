import React, { useState, useEffect } from "react";
import { useParams, useLocation } from "react-router-dom";
import Categories from "../Categories/Categories";
import { makeStyles } from "@material-ui/core/styles";
import Pagination from "@material-ui/lab/Pagination";
import { useDispatch, useSelector } from "react-redux";
import { getUrlParamsToFetchProducts } from "../../utils/commonHelper";
import Product from "../Products/Product";
import ProductListContent from "../Products/ProductList/ProductListContent";
import ProductFilter from "../../components/ProductList/ProductFilter";
import ProductSortBy from "../../components/ProductList/ProductSortBy";
import DynamicBanner from "../../components/ProductList/DynamicBanner";

// const useStyles = makeStyles((theme) => ({
//   root: {
//     display: "flex",
//     flexDirection: "column",
//     width: "100%",
//   },
//   contentContainer: {
//     margin: "0 auto",
//     width: "960px",
//   },
//   breadCrumbContainer: {},
//   breadCrumbItem: {},
//   headingText: {
//     marginBottom: "32px",
//     textTransform: "capitalize",
//     fontSize: "38px",
//     lineHeight: 1.05263158,
//     fontWeight: 500,
//   },
//   //total
//   totalProductsText: {
//     display: "flex",
//     fontFamily: "Fresh Sans,Helvetica,Arial,sans-serif",
//     fontSize: "20px",
//     marginRight: "18px",
//   },
//   //sort

//   //products
//   productsContainer: { display: "flex", flexFlow: "wrap" },
//   adBanner: {},
//   breadCrumbs: {},
// }));

const useStyles = makeStyles((theme) => ({
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
  productsContainer: { display: "flex", flexFlow: "wrap" },
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
  const params: any = useLocation<any>();
  const query = new URLSearchParams(params.search);

  const { search } = params;

  const dispatch = useDispatch();

  const { ProductCount }: any = useSelector<any>(
    (state) => state.search.aggregatedProductsResult
  );
  const {
    searchProductsResultsList,
    TotalRecordCount,
    SuggestedTerm,
  }: any = useSelector<any>((state) => state.search);

  const categoryMappedId: any = useSelector<any>(
    (state) => state.category.categoryMappedId
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

  console.log("searchProductsResultsList", searchProductsResultsList);
  return (
    <div className={classes.root}>
      <div className={classes.contentContainer}>
        {ProductCount && (
          <h1 className={classes.headingText}>
            {`No results TBD... “${search.split("=")[1]}”`}
          </h1>
        )}
        {SuggestedTerm && (
          <h1 className={classes.headingText}>
            {`Unfortunately, we couldn’t find results for “${
              search.split("=")[1]
            }”`}
          </h1>
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
          {searchProductsResultsList.map((product: any) => {
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
    </div>
  );
}

export default ProductsSearchResult;
