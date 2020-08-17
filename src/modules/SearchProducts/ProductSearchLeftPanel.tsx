import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";
import Cheveron from "../../components/Common/Cheveron";

const useStyles = makeStyles((theme) => ({
  leftPanelRoot: {
    position: "relative",
    backgroundColor: "#fff",
    boxShadow: "0 0 5px rgba(0,0,0,.15)",
    height: "100%",
    width: "220px",
    maxWidth: "220px",
    flexBasis: "220px",
  },
}));
//background-color: #3a474e; -- is active color: #fff;
//background-color: #ffda00; color: #3a474e; -- all special
const ProductSearchLeftPanel = ({}: any) => {
  const classes = useStyles();
  return (
    <div className={classes.leftPanelRoot}>
      <nav>
        <Link to={"#"}>
          <span>Search: </span>
          <Cheveron cheveronType="right" />
        </Link>
      </nav>
    </div>
  );
};

export default ProductSearchLeftPanel;
