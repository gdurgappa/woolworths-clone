import { makeStyles } from "@material-ui/core/styles";
import React from "react";
const useStyles = makeStyles(() => ({
  root: {
    display: "block",
    lineHeight: "70px",
    color: "#fff",
    padding: "0 10px",
    whiteSpace: "nowrap",
    cursor: "pointer",
    "&:hover": {
      background: "#0d3e23",
    },
  },
}));
const HeaderNavItem = ({ nav }: { nav: { name: string } }) => {
  const classes = useStyles();
  return <div className={classes.root}>{nav.name}</div>;
};

export default HeaderNavItem;
