import React, { useState, useEffect } from "react";
import { headerMenuItems } from "../../constants/menus";
import HeaderNavItem from "./HeaderNavItem";
import { makeStyles } from "@material-ui/core/styles";
const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    alignItems: "center",
  },
}));

const HeaderNavItems = (props: {}) => {
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
