import { makeStyles } from "@material-ui/core/styles";
import React from "react";
import AdditionalInfo from "../../../components/Product/AdditionalInfo";
import CountryOfOriginLabel from "../../../components/Product/CountryOfOriginLabel";
import NutritionalInformation from "../../../components/Product/NutritionalInformation";
import * as siteContent from "../../../constants/siteContent";
import { ProductDetailsType } from "../../../types/product";

const useStyles = makeStyles(() => ({
  productInfoContainer: {
    display: "flex",
    alignItems: "start",
    justifyContent: "center",
    flexDirection: "column",
    background: "#eee",
    paddingBottom: "40px",
    width: "940px",
    margin: "0 auto",
    color: "#3a474e",
    fontFamily: "Helvetica, Arial, sans-serif",
    fontSize: "16px",
    lineHeight: 1.625,
    textSizeAdjust: " none",
  },
  heading: {
    marginTop: "40px",
    marginBottom: "22px",
    fontFamily: "Fresh Sans,Helvetica,Arial,sans-serif",
    "& h2": {
      fontSize: "28px",
      fontWeight: 500,
    },
    "& div": {
      marginBottom: "20px",
      fontFamily: "Helvetica,Arial,sans-serif",
    },
  },
  hr: {
    width: "100%",
    height: "1px",
    margin: "14px 0",
    border: "none",
    backgroundImage: "linear-gradient(90deg,#3a474e 30%,#eee 0)",
    backgroundPosition: "top",
    backgroundSize: "6px 1px",
    backgroundRepeat: "repeat-x",
  },

  disclaimer: {
    fontSize: "12px",
    marginBottom: "20px",
    fontFamily: "Helvetica, Arial, sans-serif",
  },
}));
const ProductInformation = ({
  productDetails,
}: {
  productDetails: ProductDetailsType;
}) => {
  const classes = useStyles();
  return (
    <section className={classes.productInfoContainer}>
      <div className={classes.heading}>
        <h2>Product Details</h2>
        <div
          dangerouslySetInnerHTML={{
            __html:
              productDetails.Product.AdditionalAttributes &&
              productDetails.Product.AdditionalAttributes.description,
          }}
        />
      </div>
      <CountryOfOriginLabel
        countryOfOriginInfo={productDetails.CountryOfOriginLabel}
      />
      <div className={classes.hr} />

      <AdditionalInfo
        title={"Ingredients"}
        description={productDetails.AdditionalAttributes.ingredients}
      />

      <AdditionalInfo
        title={"Allergen"}
        description={productDetails.AdditionalAttributes.allergencontains}
      />

      <NutritionalInformation
        nutritionalInformation={productDetails.NutritionalInformation}
      />

      <p className={classes.disclaimer}>
        <strong>Disclaimer: </strong>
        {siteContent.productDisclaimer}
      </p>
    </section>
  );
};

export default ProductInformation;
