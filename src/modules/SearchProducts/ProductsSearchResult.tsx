import React, { useState, useEffect } from "react";
import { useParams, useLocation } from "react-router-dom";
import Categories from "../Categories/Categories";
import { makeStyles } from "@material-ui/core/styles";
import Pagination from "@material-ui/lab/Pagination";
import { useDispatch, useSelector } from "react-redux";
import { getUrlParamsToFetchProducts } from "../../utils/commonHelper";
import Product from "../Products/Product";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      marginTop: theme.spacing(2),
    },
  },
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

  const aggregatedProductsResult: any = useSelector<any>(
    (state) => state.search.aggregatedProductsResult
  );
  const searchProductsResultsList: any = useSelector<any>(
    (state) => state.search.searchProductsResultsList
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
    <>
      <h1>{"Product search result"}</h1>
      <div>Filter Your search - tab</div>
      <div>hi {JSON.stringify(aggregatedProductsResult)}</div>
      {/* <h4>{page.totalProductsCount}</h4> */}

      {searchProductsResultsList.map((product: any) => {
        // xxxx store categories in redux?
        return <Product key={product.Products[0].Stockcode} {...product} />;
      })}

      <Pagination
        count={page.totalProductsCount && page.totalProductsCount / page.limit}
        shape="rounded"
      />
    </>
  );
}

export default ProductsSearchResult;
