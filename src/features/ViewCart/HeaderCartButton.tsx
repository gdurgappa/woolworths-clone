import { makeStyles } from "@material-ui/core/styles";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import React from "react";
import ViewCartButton from "./ViewCartButton";
import { Link } from "react-router-dom";

const useStyles = makeStyles(() => ({
  root: {
    color: "#fff",
    height: "40px",
    display: "flex",
    fontSize: "14px",
    textAlign: "center",
    alignItems: "center",
    lineHeight: "15px",
    borderRadius: "28px",
    justifyContent: "center",
    textDecoration: "none",
    fontWeight: 500,
    background: 0,
    borderColor: "#178841",
    fontStyle: "normal",
    marginRight: "10px",
    padding: "0 20px",
  },
  // root: {
  //   height: "40px",
  //   display: "flex",
  //   alignItems: "center",
  //   backgroundColor: "#fff",
  //   WebkitBoxFlex: 0,
  //   flex: "0 0 auto",
  //   WebkitBoxAlign: "center",
  //   WebkitBoxPack: "justify",
  //   justifyContent: "space-between",
  //   position: "relative",
  //   width: "210px",
  //   marginRight: "10px",
  //   borderRadius: "20px",
  //   fontSize: "11px",
  //   lineHeight: "normal",
  //   color: "#3a474e",
  // },
  cartTotalArea: {
    display: "flex",
    WebkitBoxAlign: "center",
    alignItems: "center",
    flexDirection: "column",
  },
  cartAmount: {},
  cartIcon: {
    height: "35px",
    width: "30px",
  },
}));

const HeaderCartButton = () => {
  const classes = useStyles();
  return (
    <Link to="#" className={classes.root}>
      <div className={classes.cartTotalArea}>
        <ShoppingCartIcon className={classes.cartIcon} />
        <span className={classes.cartAmount}>$12.30</span>
      </div>
    </Link>
  );
};

export default HeaderCartButton;
