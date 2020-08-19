import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    alignItems: "center",
    display: "flex",
    height: "64px",
  },
}));
const CategoryDialogHeader = ({}: any) => {
  const classes = useStyles();
  return <div className={classes.root}>CategoryDialogHeader</div>;
};

export default CategoryDialogHeader;
