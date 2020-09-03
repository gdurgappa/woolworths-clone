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
    lineHeight: "15px",
    borderRadius: "28px",
    justifyContent: "center",
    textDecoration: "none",
    fontWeight: 500,
    background: 0,
    borderColor: "#178841",
    fontStyle: "normal",
    marginRight: "10px",
    padding: "0 20px",
  },
  spanIconContainer: {
    display: "flex",
    WebkitBoxAlign: "center",
    alignItems: "center",
    flexDirection: "column",
  },
  loginText: {},
  userIcon: {
    width: "35px",
    height: "35px",
  },
}));

const LoginButton = () => {
  const classes = useStyles();
  return (
    <Link to="#" className={classes.root}>
      <div className={classes.spanIconContainer}>
        <PersonIcon className={classes.userIcon} />
        <span className={classes.loginText}>Log in</span>
      </div>
    </Link>
  );
};

export default LoginButton;
