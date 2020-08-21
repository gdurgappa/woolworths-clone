import React, { useState, useEffect } from "react";

import { CardMedia } from "@material-ui/core";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
const useStyles = makeStyles((theme) => ({
  imageContainer: {
    overflow: "hidden",
    flexShrink: 0,
    width: "250px",
    // height: "70px",
    padding: "10px",
  },
  logo: {
    // padding: "10px",
    width: "100%",
  },
}));

const Logo = ({ image, path }: any) => {
  const classes = useStyles();
  return (
    <Link className={classes.imageContainer} to={path}>
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
