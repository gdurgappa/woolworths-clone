import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Product from "./Product";
import Categories from "../Categories/Categories";
import { makeStyles } from "@material-ui/core/styles";
import Pagination from "@material-ui/lab/Pagination";
import { useDispatch, useSelector } from "react-redux";
import { getUrlParamsToFetchProducts } from "../../utils/commonHelper";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      marginTop: theme.spacing(2),
    },
  },
}));

function ProductList() {
  const classes = useStyles();
  const [productsList, setProductsList] = useState([]);
  const [page, setPage] = useState({
    currentPage: 1,
    totalProductsCount: 0,
    limit: 10,
  });
  const params: any = useParams<any>();
  const { category, subCategorySelected, subCategory } = params;
  //path="/shop/browse/:category/:subCategory/:subCategorySelected"
  const dispatch = useDispatch();

  const products: any = useSelector<any>(
    (state) => state.products.filteredProducts
  );
  const categoryMappedId: any = useSelector<any>(
    (state) => state.category.categoryMappedId
  );

  useEffect(() => {
    console.log("categoryMappedId", categoryMappedId);
    if (Object.keys(categoryMappedId).length) {
      const urlParams = getUrlParamsToFetchProducts(params, categoryMappedId);

      const body = {
        ...urlParams,
        // categoryId: urlParams.,
        pageNumber: page.currentPage,
        pageSize: page.limit,
        sortType: "TraderRelevance",
        // url: url,
        location: urlParams?.url,
        formatObject: '{"name":"Organic Fruit"}',
        isSpecial: false,
        isBundle: false,
        isMobile: false,
        filters: null,
      };
      dispatch({ type: "GET_PRODUCT_LIST", payload: body });
    }
  }, [params, categoryMappedId]);

  return (
    <>
      {/* xxxx use redux to display h1 - use category.Description  */}
      <h1>{subCategorySelected}</h1>
      <div>Filter Your search - tab</div>
      <h4>{page.totalProductsCount}</h4>

      {/* {productsList.map((product: any) => { */}
      {products.map((product: any) => {
        // xxxx store categories in redux?
        return (
          <Product
            key={product.Stockcode}
            {...product}
            category={{ category, subCategorySelected, subCategory }}
          />
        );
      })}

      <Pagination
        count={page.totalProductsCount && page.totalProductsCount / page.limit}
        shape="rounded"
      />
    </>
  );
}

export default ProductList;
