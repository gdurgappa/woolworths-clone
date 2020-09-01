import { makeStyles } from "@material-ui/core/styles";
import React from "react";
import HeaderNavItems from "../../features/Header/HeaderNavItems";
import BurgerMenu from "../../shared/Common/BurgerMenu";
import Logo from "../../shared/Common/Logo";
import { useActiveScreensize } from "../../shared/hooks/useActiveScreensize";
import Login from "../Login/Login";
import SearchIcon from "../SearchProducts/SearchIcon";
import SearchProducts from "../SearchProducts/SearchProducts";
import CartSection from "../ViewCart/CartSection";

const useStyles = makeStyles(() => ({
  root: {
    display: "flex",
    alignItems: "center",
    height: "70px",
    backgroundColor: "#125430",
  },
  spacer: {
    flexGrow: 1,
  },
}));
const Header = () => {
  const classes = useStyles();
  const screenSize = useActiveScreensize();

  return (
    <div className={classes.root}>
      {screenSize === "sm" && <BurgerMenu menuText="Menu" />}
      <Logo path="/" />
      {screenSize === "lg" && <HeaderNavItems />}
      {screenSize === "sm" && <span className={classes.spacer}></span>}
      {screenSize === "sm" && <SearchIcon />}
      {screenSize === "lg" && <SearchProducts />}
      <Login />
      <CartSection />
    </div>
  );
};

export default Header;
