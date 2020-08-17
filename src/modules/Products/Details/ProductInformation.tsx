import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import AdditionalInfo from "../../../components/Product/AdditionalInfo";
import CountryOfOriginLabel from "../../../components/Product/CountryOfOriginLabel";
import NutritionalInformation from "../../../components/Product/NutritionalInformation";
import * as siteContent from "../../../constants/siteContent";

const useStyles = makeStyles((theme) => ({
  productInfoContainer: {
    alignItems: "center",
    display: "flex",
  },
}));
const ProductInformation = ({ productDetails }: any) => {
  const classes = useStyles();
  return (
    <section className={classes.productInfoContainer}>
      <h2>Product Details</h2>
      <div
        dangerouslySetInnerHTML={{
          __html:
            productDetails.Product.AdditionalAttributes &&
            productDetails.Product.AdditionalAttributes.description,
        }}
      />
      <AdditionalInfo
        title={"Allergen"}
        description={productDetails.AdditionalAttributes.allergencontains}
      />
      <AdditionalInfo
        title={"Ingredients"}
        description={productDetails.AdditionalAttributes.ingredients}
      />
      <CountryOfOriginLabel
        countryOfOriginInfo={productDetails.CountryOfOriginLabel}
      />
      <div>--------------</div>
      <NutritionalInformation
        nutritionalInformation={productDetails.NutritionalInformation}
      />
      <div>--------------</div>
      <h2>Disclaimer</h2>
      <div>{siteContent.productDisclaimer}</div>
    </section>
  );
};

export default ProductInformation;
