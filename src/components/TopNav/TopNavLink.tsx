import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import KeyboardArrowDownIcon from "@material-ui/icons/KeyboardArrowDown";
const useStyles = makeStyles((theme) => ({
  root: {
    display: "block",
    position: "relative",
    margin: "0 10px",
    color: (props: any) => (props.isActive ? "#fff" : "#a5c84d"),
    fontSize: "12px",
    height: "100%",
    lineHeight: "30px",
    textDecoration: "none",
    fontWeight: 400,

    "&:hover": {
      textDecoration: "underline",
      color: "#fff",
    },
  },
  activeIcon: {
    position: "absolute",
    left: "50%",
    top: "18px",
    fontSize: "15px",
    transform: "translateX(-50%)",
  },
}));

const TopNavLink = ({ nav, isActive }: any) => {
  const classes = useStyles({ isActive });
  return (
    <Link className={classes.root} to={"#"}>
      {nav.name}
      {isActive && <KeyboardArrowDownIcon className={classes.activeIcon} />}
    </Link>
  );
};

export default TopNavLink;
