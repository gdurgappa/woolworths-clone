import { makeStyles } from "@material-ui/core";
import React from "react";

const useStyles = makeStyles(() => ({
  headingText: {
    fontSize: "22px",
    marginBottom: "20px",
  },
  paragraphText: {
    marginBottom: "20px",
    fontFamily: "Helvetica, Arial, sans-serif",
  },
}));

export interface AdditionalInfoIngredientsProps {
  title: string;
  description: string;
}

const AdditionalInfo = ({
  title,
  description,
}: AdditionalInfoIngredientsProps) => {
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
