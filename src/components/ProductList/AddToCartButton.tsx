import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import { Button } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    alignItems: "center",
    verticalAlign: "middle",
    justifyContent: "center",
    margin: 0,
    background: "#178841",
    borderRadius: "36px",
    cursor: "pointer",
    WebkitUserSelect: "none",
    MozUserSelect: "none",
    MsUserSelect: "none",
    userSelect: "none",
    borderColor: "#178841",
    textTransform: "none",
    height: "40px",
    marginBottom: "5px",
    width: "100%",
    "&:hover": {
      backgroundColor: "#1d6b18",
      borderColor: "#1d6b18",
      color: "#fff",
    },
  },
  buttonRoot: {
    // fontFamily: "Fresh Sans,Helvetica,Arial,sans-serif",
    fontSize: "14px",
    fontWeight: 500,
    textAlign: "center",
    color: "#fff",
    padding: 0,
    lineHeight: 2,
    textTransform: "none",
    "&:hover": {
      backgroundColor: "#1d6b18",
      borderColor: "#1d6b18",
      color: "#fff",
    },
  },
  buttonLabel: {},
  cartIcon: {
    width: "20px",
    height: "20px",
    paddingLeft: "5px",
    color: "#fff",
  },
}));
const AddToCartButton = ({ onClickCallback, rootDivOverrideStyle }: any) => {
  const classes = useStyles();
  return (
    <div style={rootDivOverrideStyle} className={classes.root}>
      <Button
        classes={{ root: classes.buttonRoot, label: classes.buttonLabel }}
      >
        Add to cart
      </Button>
      <ShoppingCartIcon className={classes.cartIcon} />
    </div>
  );
};

export default AddToCartButton;
