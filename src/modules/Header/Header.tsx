import { makeStyles } from "@material-ui/core/styles";
import React from "react";
import LogoImage from "../../../src/assets/images/icon-header-logo.png";
import HeaderNavItems from "../../components/Header/HeaderNavItems";
import LoginSignupButton from "../../components/Header/LoginSignup/LoginSignupButton";
import Logo from "../../components/Header/Logo";
import SearchProducts from "../SearchProducts/SearchProducts";
import CartSection from "./CartSection";
const useStyles = makeStyles(() => ({
  root: {
    display: "flex",
    alignItems: "center",
    height: "70px",
    backgroundColor: "#125430",
  },
}));
const Header = () => {
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
