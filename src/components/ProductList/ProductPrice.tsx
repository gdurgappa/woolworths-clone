import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { getProductPriceInDollarsAndCents } from "../../utils/commonHelper";

const useStyles = makeStyles((theme) => ({
  priceContainer: {
    display: "flex",
    MsFlexPack: "justify",
    justifyContent: "space-between",
    MsFlexAlign: "start",
    alignItems: "center",
    height: "56px",
    margin: "0 20px",
    marginTop: "27px",
  },
  productPriceContainer: {
    position: "relative",
  },
  productPriceDollarSymbol: {
    fontSize: "20px",
    lineHeight: 1,
    verticalAlign: "top",
  },
  productPriceInDollar: { fontSize: "36px" },
  productPriceInCents: {
    // position: "absolute", //todo: bug
    width: "1px",
    height: "1px",
    margin: "-1px",
    padding: 0,
    overflow: "hidden",
    clip: "rect(0,0,0,0)",
    border: 0,
    lineHeight: 1,
    verticalAlign: "top",
  },
  cupPrice: {
    lineHeight: 2,
    color: "#3a474e",
    whiteSpace: "nowrap",
    marginLeft: "5px",
  },
}));
const ProductPrice = ({ CupString, InstorePrice }: any) => {
  const classes = useStyles();
  return (
    <div className={classes.priceContainer}>
      <div className={classes.productPriceContainer}>
        <span className={classes.productPriceDollarSymbol}>$</span>
        <span className={classes.productPriceInDollar}>
          {getProductPriceInDollarsAndCents(InstorePrice).dollarAmount}
        </span>
        <span className={classes.productPriceInCents}>
          {getProductPriceInDollarsAndCents(InstorePrice).cents}
        </span>
      </div>
      <span className={classes.cupPrice}>{CupString}</span>
    </div>
  );
};

export default ProductPrice;
