import { makeStyles } from "@material-ui/core/styles";
import React from "react";
import ReactPlaceholder from "react-placeholder";
import "react-placeholder/lib/reactPlaceholder.css";
import { useSelector } from "react-redux";
import BreadCrumbs from "./BreadCrumbs";
import DynamicBanner from "./DynamicBanner";
import ProductFilter from "./ProductFilter";
import ProductSortBy from "./ProductSortBy";
import { RootState } from "../../../store/store";
import { CategoryMappedId } from "../../../types/category";
import { ProductReducerType, ProductType } from "../../../types/product";
import { getUrlParamsToFetchProducts } from "../../../utils/commonHelper";
import Product from "../Product";
import { UrlParamsType } from "./ProductList";
import ProductListSkeleton from "./ProductListSkeleton";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    width: "100%",
  },
  contentContainer: {
    margin: "0 auto",
    width: "960px",
    [theme.breakpoints.down("sm")]: {
      width: "100%",
      padding: "10px",
    },
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
  totalProductsText: {
    display: "flex",
    fontSize: "20px",
    marginRight: "18px",
  },
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
  categoryMappedId: CategoryMappedId;
}

function ProductListContent({
  params,
  categoryMappedId,
}: ProductListContentProps) {
  const classes = useStyles();

  const { category, subCategorySelected, subCategory } = params;

  // todo: unknown
  const {
    filteredProducts: products,
    TotalRecordCount,
  }: ProductReducerType = useSelector<RootState, ProductReducerType>(
    (state) => state.products
  );

  return (
    <ReactPlaceholder
      showLoadingAnimation
      ready={products.length > 0}
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
            // categoryMappedId={categoryMappedId}
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
            {/* todo: extract this to product list list */}
            {products.map((product: ProductType) => {
              return (
                // todo: use a selector insteadof product.produt[0]..flatten it .. see if it can be done in teh reducer or us a selector(reselect)
                <Product
                  key={product.Stockcode}
                  {...product}
                  // category={{ category, subCategorySelected, subCategory }}
                />
              );
            })}
          </div>
        </div>
      </div>
    </ReactPlaceholder>
  );
}

export default ProductListContent;
