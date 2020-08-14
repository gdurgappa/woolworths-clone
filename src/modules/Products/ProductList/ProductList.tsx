import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Product from "../Product";
import Categories from "../../Categories/Categories";
import { makeStyles } from "@material-ui/core/styles";
import Pagination from "@material-ui/lab/Pagination";
import { useDispatch, useSelector } from "react-redux";
import { getUrlParamsToFetchProducts } from "../../../utils/commonHelper";
import ProductListLeftPanel from "./ProdcutListLeftPanel";
import ProductListContent from "./ProductListContent";
import DynamicBanner from "../../../components/ProductList/DynamicBanner";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      marginTop: theme.spacing(2),
    },
  },
  pageContainer: {
    display: "flex",
    width: "100%",
  },
  contentContainer: {},
  adBanner: {},
  breadCrumbs: {},
  breadCrumbItem: {},
}));

function ProductList() {
  const classes = useStyles();
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
    <div className={classes.pageContainer}>
      <ProductListLeftPanel
        {...{ category, subCategorySelected, subCategory }}
      />
      <ProductListContent params={params} categoryMappedId={categoryMappedId} />
    </div>
  );
}

export default ProductList;
