import { CardMedia, makeStyles } from "@material-ui/core";
import React from "react";

const useStyles = makeStyles(() => ({
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

interface CountryOfOriginLabelProps {
  countryOfOriginInfo: {
    AltText: string;
    SvgImageFile: string;
  };
}

const CountryOfOriginLabel = ({
  countryOfOriginInfo,
}: CountryOfOriginLabelProps) => {
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
