import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Product from "../Product";
import Categories from "../../Categories/Categories";
import { makeStyles } from "@material-ui/core/styles";
import Pagination from "@material-ui/lab/Pagination";
import { useDispatch, useSelector } from "react-redux";
import {
  getUrlParamsToFetchProducts,
  getUrlParamsToFetchProductsNew,
} from "../../../utils/commonHelper";
import ProductListLeftPanel from "./ProdcutListLeftPanel";
import ProductListContent from "./ProductListContent";
import DynamicBanner from "../../../components/ProductList/DynamicBanner";
import ReactPlaceholder from "react-placeholder";

import {
  TextBlock,
  MediaBlock,
  TextRow,
  RectShape,
  RoundShape,
} from "react-placeholder/lib/placeholders";
import ProductFilter from "../../../components/ProductList/ProductFilter";
import ProductSortBy from "../../../components/ProductList/ProductSortBy";
const useStyles = makeStyles((theme) => ({
  pageContainer: {
    display: "flex",
    width: "100%",
  },
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
    // margin: '"180px pxpx'",
  },
  //sort

  //products
  productsContainer: {
    display: "flex",
    flexFlow: "wrap",
    marginLeft: "-10px",
    // margin: '0px "-'px10px",
  },
  adBanner: {},
  breadCrumbs: {},
}));

function ProductListSkeleton() {
  const classes = useStyles();
  const [page, setPage] = useState({
    currentPage: 1,
    totalProductsCount: 0,
    limit: 10,
  });

  return (
    <div
      className={[classes.pageContainer, "show-loading-animation"].join(" ")}
    >
      <div className={classes.root}>
        <RectShape
          style={{ width: "100%", height: 130, marginBottom: "50px" }}
        />

        <div className={classes.contentContainer}>
          <div style={{ display: "flex", marginBottom: 50 }}>
            <TextBlock
              color="gray"
              rows={1}
              style={{ height: "20px", width: "100px", margin: "0px 20px" }}
            />
            {">"}
            <TextBlock
              color="gray"
              rows={1}
              style={{ height: "20px", width: "100px", margin: "0px 20px" }}
            />
            {">"}
            <TextBlock
              color="gray"
              rows={1}
              style={{ height: "20px", width: "100px", margin: "0px 20px" }}
            />
          </div>
          <TextBlock
            color="gray"
            rows={1}
            style={{ height: "80px", width: "120px", marginBottom: "50px" }}
          />

          <ProductFilter />

          <div style={{ display: "flex" }}>
            <TextBlock
              color="gray"
              rows={1}
              style={{ height: "50px", width: "150px", marginBottom: 50 }}
            />
            <h4 className={classes.totalProductsText}>Products</h4>
          </div>
          <ProductSortBy />

          <div className={classes.productsContainer}>
            {[...Array(4)].map((product: any) => {
              return (
                <RectShape color="blue" style={{ width: 100, height: 400 }} />
                // <Product
                //   key={product.Products[0].Stockcode}
                //   {...product.Products[0]}
                //   category={{ category, subCategorySelected, subCategory }}
                // />
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
    </div>
  );
}

export default ProductListSkeleton;
