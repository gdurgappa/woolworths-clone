import { makeStyles } from "@material-ui/core/styles";
import Pagination from "@material-ui/lab/Pagination";
import React, { useState } from "react";
import ReactPlaceholder from "react-placeholder";
import "react-placeholder/lib/reactPlaceholder.css";
import { useSelector } from "react-redux";
import BreadCrumbs from "../../../components/ProductList/BreadCrumbs";
import DynamicBanner from "../../../components/ProductList/DynamicBanner";
import ProductFilter from "../../../components/ProductList/ProductFilter";
import ProductSortBy from "../../../components/ProductList/ProductSortBy";
import { getUrlParamsToFetchProducts } from "../../../utils/commonHelper";
import Product from "../Product";
import { UrlParamsType } from "./ProductList";
import ProductListSkeleton from "./ProductListSkeleton";
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

interface ProductListContentProps {
  params: UrlParamsType;
}
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
    <ReactPlaceholder
      showLoadingAnimation
      ready={products.length}
      // ready={products.length > 0}
      customPlaceholder={<ProductListSkeleton />}
    >
      <div className={classes.root}>
        {/* todo: extract this to dynamicbanner list */}
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
          {/* <ReactPlaceholder
            showLoadingAnimation
            ready={true}
            // ready={products.length > 0}
            type="rect"
            className={classes.productsContainer}
            style={{ background: "red" }}
            // customPlaceholder={<ProductListSkeleton />}
          > */}
          <div className={classes.productsContainer}>
            {/* todo: extract this to product list list */}
            {products.map((product: any) => {
              return (
                // todo: use a selector insteadof product.produt[0]..flatten it .. see if it can be done in teh reducer or us a selector(reselect)
                <Product
                  key={product.Products[0].Stockcode}
                  {...product.Products[0]}
                  category={{ category, subCategorySelected, subCategory }}
                />
              );
            })}
          </div>
          {/* </ReactPlaceholder> */}
          <Pagination
            count={
              page.totalProductsCount && page.totalProductsCount / page.limit
            }
            shape="rounded"
          />
        </div>
      </div>
    </ReactPlaceholder>
  );
}

export default ProductListContent;
