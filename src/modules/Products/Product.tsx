import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { Link } from "react-router-dom";
import { Product } from "./types/product";
import { getProductPriceInDollarsAndCents } from "../../utils/commonHelper";

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  productContainer: {
    display: "flex",
    flexDirection: "column",
    // display: "inline-flex",
    width: "220px",
    height: "480px",
    margin: "0 10px 20px",
    verticalAlign: "top",
    position: "relative",
    background: "#fff",
    boxShadow: "0 0 1px rgba(0,0,0,.3)",
    outline: "none",
  },
  cardContentRoot: {
    padding: 0,
  },
  image: { width: "150px", height: "150px", margin: "22px auto 18px" },
  title: {
    display: "block",
    fontSize: "14px",
    fontFamily: "Fresh Sans,Helvetica,Arial,sans-serif",
    color: "#3a474e",
    margin: "0 20px",
    lineHeight: "1.42857143",
    cursor: "pointer",
    textDecoration: "none",
    "&:hover": {
      textDecoration: "underline",
    },
  },
  //image
  priceContainer: {
    display: "flex",
    MsFlexPack: "justify",
    justifyContent: "space-between",
    MsFlexAlign: "start",
    alignItems: "flex-start",
    height: "56px",
    margin: "0 20px",
  },
  productPriceContainer: {
    position: "relative",
    marginTop: "27px",
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
  specialImageTag: {
    width: "60px",
    height: "60px",
    position: "absolute",
    top: "60px",
    left: "10px",
  },
});

const Product = (props: Product) => {
  const classes = useStyles();
  const {
    Description,
    CupString,
    InstorePrice,
    MediumImageFile,
    UrlFriendlyName,
    Stockcode,
    ImageTag,
  } = props;
  return (
    <Card className={classes.productContainer}>
      <CardActionArea>
        <CardMedia
          classes={{ media: classes.image }}
          component="img"
          alt="Contemplative Reptile"
          height="140"
          image={MediumImageFile}
          title="Contemplative Reptile"
        />
        {ImageTag.TagContent && (
          <img
            className={classes.specialImageTag}
            src={`https://woolworths.com.au/${ImageTag.TagContent}`}
          />
        )}
        <CardContent className={classes.cardContentRoot}>
          <Link
            className={classes.title}
            to={`/shop/productdetails/${Stockcode}/${UrlFriendlyName}`}
          >
            {Description}
          </Link>
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
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Add to Card
        </Button>
        <Button size="small" color="primary">
          Save to List
        </Button>
      </CardActions>
    </Card>
  );
};

export default Product;
