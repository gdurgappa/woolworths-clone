import React, { useState, useEffect } from "react";
import Logo from "../../components/Header/Logo";
import HeaderNavItems from "../../components/Header/HeaderNavItems";
import CartSection from "./CartSection";
import LoginSignupButton from "../../components/Header/LoginSignup/LoginSignupButton";
import SearchProducts from "../SearchProducts/SearchProducts";
import { makeStyles } from "@material-ui/core/styles";
import LogoImage from "../../../src/assets/images/icon-header-logo.png";
const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    alignItems: "center",
    height: "70px",
    backgroundColor: "#125430",
  },
}));
const Header = (props: {}) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Logo path="/" image={LogoImage} />
      <HeaderNavItems />
      <SearchProducts />
      <LoginSignupButton />
      <CartSection />
    </div>
  );
};

export default Header;
