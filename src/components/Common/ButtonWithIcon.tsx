import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import { Button } from "@material-ui/core";
import Cheveron from "./Cheveron";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    alignItems: "center",
    verticalAlign: "middle",
    justifyContent: "center",
    margin: 0,
    background: "#178841",
    borderRadius: "36px",
    cursor: "pointer",
    WebkitUserSelect: "none",
    MozUserSelect: "none",
    MsUserSelect: "none",
    userSelect: "none",
    borderColor: "#178841",
    textTransform: "none",
    height: "40px",
    marginBottom: "5px",
    minWidth: "104px",
    maxWidth: "344px",
    color: "#fff",
    padding: "0 24px",
    overflow: "hidden",
    opacity: (props: any) => (props.animation ? 0 : 1),
    transition: (props: any) =>
      props.animation ? "opacity .35s ease-in-out .3s" : "",
  },
  buttonRoot: {
    lineHeight: "41px",
    height: "41px",
    fontSize: "14px",

    backgroundColor: "#178841",
    color: "#fff",
    border: "none",
    borderRadius: "28px",
    fontWeight: 500,
    cursor: "pointer",
    textAlign: "left",
    // padding: "0 24px",
    padding: 0,
    textTransform: "none",
  },
  buttonLabel: {},
  icon: {
    width: "20px",
    height: "20px",
    paddingLeft: "5px",
    // color: "#fff",
  },
}));
const ButtonWithIcon = ({
  onClickCallback,
  rootDivOverrideStyle,
  buttonOverrideStyle,
  title = "Discover More",
  renderIcon: Icon,
  cheveronType = "right",
  animation = false,
}: any) => {
  const classes = useStyles({ animation });
  return (
    <div
      style={rootDivOverrideStyle}
      className={classes.root}
      id="actionButton"
    >
      <Button
        style={buttonOverrideStyle}
        classes={{ root: classes.buttonRoot, label: classes.buttonLabel }}
      >
        {title}
      </Button>
      <Cheveron rootClassName={classes.icon} cheveronType={cheveronType} />
    </div>
  );
};

export default ButtonWithIcon;
