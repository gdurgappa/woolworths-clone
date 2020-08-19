import React, { useState, useEffect } from "react";
import { Card, CardMedia, makeStyles } from "@material-ui/core";
const useStyles = makeStyles((theme) => ({
  headingText: {
    fontSize: "22px",
    marginBottom: "20px",
  },
  paragraphText: {
    marginBottom: "20px",
    fontFamily: "Helvetica, Arial, sans-serif",
  },
}));
const AdditionalInfo = ({ title, description }: any) => {
  const classes = useStyles();
  return description ? (
    <>
      <h3 className={classes.headingText}>{title}</h3>
      <p className={classes.paragraphText}>{description}</p>
    </>
  ) : (
    <></>
  );
};

export default AdditionalInfo;
