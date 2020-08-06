import React, { useState, useEffect } from "react";
import { Card, CardMedia } from "@material-ui/core";

const CountryOfOriginLabel = ({ countryOfOriginInfo }: any) => {
  return (
    countryOfOriginInfo && (
      <Card>
        <CardMedia
          component="img"
          alt={countryOfOriginInfo.AltText}
          height="140"
          image={countryOfOriginInfo.SvgImageFile}
          title={countryOfOriginInfo.AltText}
        />
      </Card>
    )
  );
};

export default CountryOfOriginLabel;
