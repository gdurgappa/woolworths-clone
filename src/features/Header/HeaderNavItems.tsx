import { makeStyles } from "@material-ui/core/styles";
import React from "react";
import { headerMenuItems } from "../../constants/menus";
import HeaderNavItem from "./HeaderNavItem";
const useStyles = makeStyles(() => ({
  root: {
    display: "flex",
    alignItems: "center",
  },
}));

const HeaderNavItems = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      {headerMenuItems.map((nav) => {
        return <HeaderNavItem nav={nav} key={nav.name} />;
      })}
    </div>
  );
};

export default HeaderNavItems;
