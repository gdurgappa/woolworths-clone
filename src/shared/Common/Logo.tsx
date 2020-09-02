import { makeStyles } from "@material-ui/core/styles";
import React from "react";
import { Link } from "react-router-dom";
import LogoImage from "../../../src/assets/images/icon-header-logo.png";
const useStyles = makeStyles((theme) => ({
  imageContainer: {
    overflow: "hidden",
    flexShrink: 0,
    width: "250px",
    // height: "70px",
    padding: "10px",
    [theme.breakpoints.down("xs")]: {
      position: "relative",
      width: "48px",
      height: "60px",
      padding: 0,
      marginLeft: "5px",
    },
  },
  logo: {
    [theme.breakpoints.down("xs")]: {
      width: "181px",
      position: "absolute",
      top: "50%",
      WebkitTransform: "translateY(-50%)",
      transform: "translateY(-50%)",
      right: "0px",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    },
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
          // "https://www.woolworths.com.au/Images/GlobalHeader/icon-header-logo.png"
          LogoImage
        }
      />
    </Link>
  );
};

export default Logo;
