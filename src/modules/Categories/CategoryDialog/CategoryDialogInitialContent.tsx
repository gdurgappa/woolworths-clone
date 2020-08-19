import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    alignItems: "center",
    display: "flex",
    height: "64px",
  },
}));
const CategoryDialogInitialContent = ({}: any) => {
  const classes = useStyles();
  return <div className={classes.root}>CategoryDialogInitialContent</div>;
};

export default CategoryDialogInitialContent;
