import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";

import * as siteContent from "../../../constants/siteContent";
import NutritionalInformation from "../../../components/Product/NutritionalInformation";
import CountryOfOriginLabel from "../../../components/Product/CountryOfOriginLabel";
import AdditionalInfo from "../../../components/Product/AdditionalInfo";
import RatingSummary from "./RatingSummary";
import Reviews from "../Reviews";
import Rating from "../../../components/Product/Rating";
import PeopleAlsoViewedProducts from "./PeopleAlsoViewedProducts";
import ProductMainDisplay from "./ProductMainDisplay";
import ProductInformation from "./ProductInformation";

const useStyles = makeStyles({
  root: {
    display: "flex",
    flexDirection: "column",
    width: "100%",
    height: "100%",
  },
  chipRoot: {
    display: "flex",
    padding: 20,
    justifyContent: "center",
    flexWrap: "wrap",
  },
});

const ProductDetails = (props: {}) => {
  //   const [product, setProductDetails] = useState<any>([]);
  const [productDetails, setProductDetails] = useState<any>(null);
  const params: any = useParams();
  const classes = useStyles();
  console.log("params", params);
  const getProductDetailss = () => {
    // todo: use a hook
    fetch(
      `https://www.woolworths.com.au/apis/ui/product/detail/${params.Stockcode}`
    )
      .then((res: any) => res.json())
      .then((res: any) => {
        setProductDetails(res);
      });
  };
  const getAlsoBroughtItemsProductList = () => {};
  useEffect(() => {
    getProductDetailss();
    //   // setProductDetails(ProductJson.Product);
    //   fetch(
    //     `https://www.woolworths.com.au/apis/ui/product/detail/${params.Stockcode}`
    //   )
    //     .then((res: any) => res.json())
    //     .then((res: any) => {
    //       // setProductDetails(res.Product);
    //     });
  }, []);

  return (
    productDetails && (
      <div className={classes.root}>
        <ProductMainDisplay productDetails={productDetails} />
        <ProductInformation productDetails={productDetails} />
        <h1>Ratings and Reviews</h1>
        {/* render prop? */}
        <Rating rating={productDetails.Product.Rating} />
        <Reviews stockCode={params.Stockcode} />
        <PeopleAlsoViewedProducts
          params={params}
          categoryId={
            productDetails.Product.AdditionalAttributes
              .PiesProductDepartmentNodeId
          }
          categoryName={
            productDetails.Product.AdditionalAttributes.piescategorynamesjson
          }
        />
        <h1>People Who Bought This Item Also Bought</h1>
      </div>
    )
  );
};

export default ProductDetails;
