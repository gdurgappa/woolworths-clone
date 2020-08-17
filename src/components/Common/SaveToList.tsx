import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";
import AddIcon from "@material-ui/icons/Add";
const useStyles = makeStyles((theme) => ({
  linkContainer: {
    display: "flex",
    alignItems: "center",
    height: "64px",
    "&:hover": {
      textDecoration: "underline",
    },
  },
  addIcon: {
    color: "#178841",
    fontSize: "16px",
  },
  link: {
    color: "#178841",
    textDecoration: "none",
    fontSize: "14px",
    margin: "0 8px",
  },
}));
const SaveToList = ({ linkOverrideStyle, iconOverrideStyle }: any) => {
  console.log("linkOverrideStyle", linkOverrideStyle);
  const classes = useStyles();
  return (
    <div style={{ width: "50%" }} className={classes.linkContainer}>
      <Link to={"#"} className={classes.link}>
        Save to list
      </Link>
      <AddIcon style={iconOverrideStyle} className={classes.addIcon} />
    </div>
  );
};

export default SaveToList;
