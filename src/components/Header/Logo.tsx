import { makeStyles } from "@material-ui/core/styles";
import React from "react";
import { Link } from "react-router-dom";

const useStyles = makeStyles(() => ({
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

const Logo = ({ path }: { path: string }) => {
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
