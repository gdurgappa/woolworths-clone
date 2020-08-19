import React, { useState, useEffect } from "react";
import { Card, CardMedia, makeStyles } from "@material-ui/core";
const useStyles = makeStyles((theme) => ({
  imageRoot: {
    margin: "10px 0",
    width: "100%",
    height: "100px",
    "&>img": {
      maxWidth: "230px",
      height: "100%",
      objectFit: "none",
    },
  },
}));
const CountryOfOriginLabel = ({ countryOfOriginInfo }: any) => {
  const classes = useStyles();
  return (
    countryOfOriginInfo && (
      <div className={classes.imageRoot}>
        <CardMedia
          component="img"
          alt={countryOfOriginInfo.AltText}
          height="140"
          image={countryOfOriginInfo.SvgImageFile}
          title={countryOfOriginInfo.AltText}
        />
      </div>
    )
  );
};

export default CountryOfOriginLabel;
