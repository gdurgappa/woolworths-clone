import { makeStyles } from "@material-ui/core/styles";
import React from "react";
import { Link } from "react-router-dom";

const useStyles = makeStyles(() => ({
  root: {},
  saveToListLink: {},
}));

// todo: change name to LinkButton and pass a prop (button name)
const SaveToList = () => {
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
