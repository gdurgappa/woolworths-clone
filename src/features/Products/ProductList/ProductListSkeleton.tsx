import { makeStyles } from "@material-ui/core/styles";
import React from "react";
import { RectShape, TextBlock } from "react-placeholder/lib/placeholders";
import ProductFilter from "./ProductFilter";
import ProductSortBy from "./ProductSortBy";

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
    [theme.breakpoints.down("sm")]: {
      width: "100%",
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
  },

  productsContainer: {
    display: "flex",
    flexFlow: "wrap",
    marginLeft: "-10px",
  },
  adBanner: {},
  breadCrumbs: {},
}));

function ProductListSkeleton() {
  const classes = useStyles();

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
            {[...Array(4)].map((_, index: number) => {
              return (
                <RectShape
                  key={index}
                  color="blue"
                  style={{ width: 100, height: 400 }}
                />
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductListSkeleton;
