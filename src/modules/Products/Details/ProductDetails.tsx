import { makeStyles } from "@material-ui/core/styles";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import PeopleAlsoViewedProducts from "./PeopleAlsoViewedProducts";
import ProductInformation from "./ProductInformation";
import ProductMainDisplay from "./ProductMainDisplay";
import { UrlParams } from "../../../types/commonTypes";
import { GET_PRODUCT_DETAIL_URL } from "../../../api/urls";
import { get } from "../../../api/request";
import { ProductDetailsType } from "../../../types/product";

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

const ProductDetails = () => {
  const [productDetails, setProductDetails] = useState<ProductDetailsType>();
  const params: UrlParams = useParams();
  const classes = useStyles();

  const getProductDetails = async () => {
    // todo: use a hook
    const res = await get<ProductDetailsType>(
      `${GET_PRODUCT_DETAIL_URL}${params.Stockcode}`
    );
    setProductDetails(res);
  };
  useEffect(() => {
    getProductDetails();
  }, []);
  console.log("productDetails", productDetails);
  return productDetails ? (
    <div className={classes.root}>
      <ProductMainDisplay productDetails={productDetails} />
      <ProductInformation productDetails={productDetails} />
      <PeopleAlsoViewedProducts
        categoryId={
          productDetails.Product.AdditionalAttributes
            .PiesProductDepartmentNodeId
        }
        categoryName={
          productDetails.Product.AdditionalAttributes.sapcategoryname
        }
      />
    </div>
  ) : (
    <></>
    // todo: check
  );
};

export default ProductDetails;
