import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Categories from "../Categories/Categories";
import { makeStyles } from "@material-ui/core/styles";
import Pagination from "@material-ui/lab/Pagination";

// https://www.woolworths.com.au/apis/ui/Search/products -
//{"Filters":[],"IsSpecial":false,"Location":"/shop/search/products?searchTerm=aioli%20mayonnaise","PageNumber":1,"PageSize":36,"SearchTerm":"aioli mayonnaise","SortType":"TraderRelevance"}
const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      marginTop: theme.spacing(2),
    },
  },
}));

function ProductsSearchResult() {
  const classes = useStyles();
  const [productsList, setProductsList] = useState([]);
  const [page, setPage] = useState({
    currentPage: 1,
    totalProductsCount: 0,
    limit: 10,
  });
  const params = useParams<any>();
  const { category, subCategorySelected, subCategory, nodeId } = params;
  //path="/shop/browse/:category/:subCategory/:subCategorySelected"

  useEffect(() => {
    const body = JSON.stringify({
      //   categoryId: "1-A90F8053",
      categoryId: nodeId,
      pageNumber: page.currentPage,
      pageSize: page.limit,
      sortType: "TraderRelevance",
      url: `/shop/browse/${category}/${subCategory}/${subCategorySelected}`,
      location: `/shop/browse/${category}/${subCategory}/${subCategorySelected}`,
      formatObject: '{"name":"Organic Fruit"}',
      isSpecial: false,
      isBundle: false,
      isMobile: false,
      filters: null,
    });
    fetch("https://www.woolworths.com.au/apis/ui/browse/category", {
      method: "post",

      body,
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        mode: "no-cors",
      },
    })
      .then((res: any) => res.json())
      .then((res: any) => {
        setProductsList(res.Bundles);
        setPage({ ...page, totalProductsCount: res.TotalRecordCount });
      });
  }, [params]);

  return (
    <>
      {/* xxxx use redux to display h1 - use category.Description  */}
      <h1>product search result</h1>
      {/* <div>Filter Your search - tab</div>
      <h4>{page.totalProductsCount}</h4>

      {productsList.map((product: any) => {
        // xxxx store categories in redux?
        return (
          <Product
            {...product}
            category={{ category, subCategorySelected, subCategory, nodeId }}
          />
        );
      })}

      <Pagination
        count={page.totalProductsCount && page.totalProductsCount / page.limit}
        shape="rounded"
      /> */}
    </>
  );
}

export default ProductsSearchResult;
