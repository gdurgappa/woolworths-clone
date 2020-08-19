import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { getProductPriceInDollarsAndCents } from "../../utils/commonHelper";
//todo: gives to fixed error http://localhost:8080/shop/productdetails/197276/tip-top-9-grain-bread-original
// http://localhost:8080/shop/ shows nothing
const useStyles = makeStyles((theme) => ({
  priceContainer: {
    display: "flex",
    MsFlexPack: "justify",
    justifyContent: "space-between",
    MsFlexAlign: "start",
    alignItems: "center",
    padding: "0 20px 30px",
    // height: "56px",//parent
    // margin: "0 20px", //parent
    // marginTop: "27px",//parent
  },
  productPriceContainer: {
    position: "relative",
  },
  productPriceDollarSymbol: {
    fontSize: "20px",
    // lineHeight: 1,
    verticalAlign: "top",
  },
  productPriceInDollar: { fontSize: "36px", lineHeight: 1 },
  productPriceInCents: {
    // position: "absolute", //todo: bug
    margin: "-1px",
    padding: 0,
    overflow: "hidden",
    clip: "rect(0,0,0,0)",
    border: 0,
    // lineHeight: 1,
    verticalAlign: "top",
    fontSize: "20px",
  },
  cupPrice: {
    fontSize: "14px",
    lineHeight: 2,
    color: "#3a474e",
    whiteSpace: "nowrap",
    marginLeft: "4px",
    fontFamily: "Helvetica,Arial,sans-serif",
  },
}));
const ProductPrice = ({
  CupString,
  InstorePrice,
  InstoreHasCupPrice,
  HideWasSavedPrice,
  InstoreWasPrice,
}: any) => {
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
        {!HideWasSavedPrice && InstoreWasPrice && (
          <div style={{ fontSize: "12px" }}>
            Was ${InstoreWasPrice.toFixed(2)}
          </div>
        )}
      </div>
      {InstoreHasCupPrice && (
        <span className={classes.cupPrice}>{CupString}</span>
      )}
    </div>
  );
};

export default ProductPrice;
