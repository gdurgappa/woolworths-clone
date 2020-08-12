import React, { useState, useEffect } from "react";

import { CardMedia } from "@material-ui/core";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
const useStyles = makeStyles((theme) => ({
  logo: {
    padding: "10px",
    overflow: "hidden",
    width: "230px",
    height: "50px",
    paddingLeft: "10px",
    flexShrink: 0,
  },
}));

const Logo = ({ image, path }: any) => {
  const classes = useStyles();
  return (
    <Link to={path}>
      <img
        className={classes.logo}
        src={
          "https://www.woolworths.com.au/Images/GlobalHeader/icon-header-logo.png"
        }
      />
    </Link>
  );
};

export default Logo;
