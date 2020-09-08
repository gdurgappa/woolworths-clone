import { makeStyles } from "@material-ui/core/styles";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import React from "react";
import ViewCartButton from "./ViewCartButton";

const useStyles = makeStyles(() => ({
  root: {
    height: "40px",
    display: "flex",
    alignItems: "center",
    backgroundColor: "#fff",
    WebkitBoxFlex: 0,
    flex: "0 0 auto",
    WebkitBoxAlign: "center",
    WebkitBoxPack: "justify",
    justifyContent: "space-between",
    position: "relative",
    width: "210px",
    marginRight: "10px",
    borderRadius: "20px",
    fontSize: "11px",
    lineHeight: "normal",
    color: "#3a474e",
  },
  cartTotalArea: {
    paddingLeft: "44px",
  },
  cartAmount: {},
  cartIcon: {
    position: "absolute",
    left: "10px",
    height: "30px",
    width: "30px",
  },
  cartButton: {
    height: "34px",
    lineHeight: "30px",
    margin: "0 1px",
    padding: "0 10px",
    fontSize: "14px",
    borderRadius: "17px",
    width: "92px",
    background: "#178841",
    borderColor: "#178841",
    color: "#fff",
    cursor: "pointer",
    display: "inline-block",
    verticalAlign: "middle",
    textTransform: "none",
    "&:hover": {
      backgroundColor: "#126c34",
      borderColor: "#126c34",
      color: "#fff",
    },
  },
}));

const HeaderCartArea = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <ShoppingCartIcon className={classes.cartIcon} />
      <div className={classes.cartTotalArea}>
        <p>Your Cart</p>
        <p className={classes.cartAmount}>$0.00</p>
      </div>
      <ViewCartButton buttonStyle={classes.cartButton} name={"View cart"} />
    </div>
  );
};

export default HeaderCartArea;
