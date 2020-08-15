import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {},
  saveToListLink: {},
}));
const SaveToList = ({}: any) => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Link className={classes.saveToListLink} to="#">
        SaveToList
      </Link>
    </div>
  );
};

export default SaveToList;
