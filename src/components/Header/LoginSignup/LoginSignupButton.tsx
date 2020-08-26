import { makeStyles } from "@material-ui/core/styles";
import PersonIcon from "@material-ui/icons/Person";
import React from "react";
import { Link } from "react-router-dom";

const useStyles = makeStyles(() => ({
  root: {
    color: "#fff",
    height: "40px",
    display: "flex",
    fontSize: "14px",
    textAlign: "center",
    alignItems: "center",
    // fontFamily: "Fresh Sans,Helvetica,Arial,sans-serif",
    lineHeight: "15px",
    borderRadius: "28px",
    justifyContent: "center",
    textDecoration: "none",
    backgroundColor: "#178841",
    fontWeight: 500,
    // border: "2px solid #3a474e",
    background: "#178841",
    borderColor: "#178841",
    fontStyle: "normal",
    marginRight: "10px",
    padding: "0 20px",
  },
  spanIconContainer: {
    display: "flex",
    WebkitBoxAlign: "center",
    alignItems: "center",
  },
  loginText: {},
  userIcon: {},
}));

// todo move this to modules
const LoginSignupButton = () => {
  const classes = useStyles();
  return (
    // <Link to="#">
    <Link to="#" className={classes.root}>
      <div className={classes.spanIconContainer}>
        <span className={classes.loginText}>Log in / Sign up</span>
        <PersonIcon className={classes.userIcon} />
      </div>
    </Link>
  );
};

export default LoginSignupButton;
