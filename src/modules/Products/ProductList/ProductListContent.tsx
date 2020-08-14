import React, { useState, useEffect } from "react";
import Product from "../Product";
import Categories from "../../Categories/Categories";
import { makeStyles } from "@material-ui/core/styles";
import Pagination from "@material-ui/lab/Pagination";
import { useDispatch, useSelector } from "react-redux";
import { getUrlParamsToFetchProducts } from "../../../utils/commonHelper";
import ProductListLeftPanel from "./ProdcutListLeftPanel";
import DynamicBanner from "../../../components/ProductList/DynamicBanner";
import BreadCrumbs from "../../../components/ProductList/BreadCrumbs";
import ProductFilter from "../../../components/ProductList/ProductFilter";
import ProductSortBy from "../../../components/ProductList/ProductSortBy";

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
    fontFamily: "Fresh Sans,Helvetica,Arial,sans-serif",
    fontSize: "20px",
    marginRight: "18px",
  },
  //sort

  //products
  productsContainer: { display: "flex", flexFlow: "wrap" },
  adBanner: {},
  breadCrumbs: {},
}));

function ProductListContent({ params, categoryMappedId }: any) {
  const classes = useStyles();
  const [page, setPage] = useState({
    currentPage: 1,
    totalProductsCount: 0,
    limit: 10,
  });
  const { category, subCategorySelected, subCategory } = params;

  const { filteredProducts: products, TotalRecordCount }: any = useSelector<
    any
  >((state) => state.products);

  return (
    <div className={classes.root}>
      {Object.keys(categoryMappedId).length && (
        <DynamicBanner
          url={
            getUrlParamsToFetchProducts(
              { category, subCategory, subCategorySelected },
              categoryMappedId
            ).url
          }
        />
      )}
      <div className={classes.contentContainer}>
        <BreadCrumbs
          params={{ category, subCategory, subCategorySelected }}
          categoryMappedId={categoryMappedId}
        />
        <h1 className={classes.headingText}>
          {categoryMappedId[subCategorySelected]?.Description}
        </h1>
        <ProductFilter />
        <h4 className={classes.totalProductsText}>
          {TotalRecordCount} Products
        </h4>

        <ProductSortBy />

        <div className={classes.productsContainer}>
          {products.map((product: any) => {
            return (
              <Product
                key={product.Stockcode}
                {...product.Products[0]}
                category={{ category, subCategorySelected, subCategory }}
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

export default ProductListContent;
