import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
const useStyles = makeStyles((theme) => ({
  root: {
    display: "block",
    lineHeight: "70px",
    color: "#fff",
    padding: "0 10px",
    whiteSpace: "nowrap",
  },
}));
const HeaderNavItem = ({ nav }: any) => {
  const classes = useStyles();
  return <div className={classes.root}>{nav.name}</div>;
};

export default HeaderNavItem;
