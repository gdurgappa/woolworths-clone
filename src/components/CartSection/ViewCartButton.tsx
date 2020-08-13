import React, { useState, useEffect } from "react";
import { Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    alignItems: "center",
    height: "70px",
    backgroundColor: "#125430",
  },
}));
const ViewCartButton = ({ onClickCallback, name, buttonStyle }: any) => {
  const classes = useStyles();
  return <Button className={buttonStyle}>{name}</Button>;
};

export default ViewCartButton;
