import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { Link } from "react-router-dom";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import { Chip } from "@material-ui/core";
import Product from "./Product";
import ProductJson from "./Product.json";

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  chipRoot: {
    display: "flex",
    padding: 20,
    justifyContent: "center",
    flexWrap: "wrap",
  },
});

/**
 *
 * configure redux
 * store categories
 * compute active categoriy in prodDetails component
 * make api call and get products for the category
 * render random 10 producgts for -- also viewed section
 */

const ProductDetails = (props: {}) => {
  //   const [product, setProductDetails] = useState<any>([]);
  const [ProductDetails, setProductDetails] = useState<any>({});
  const params: any = useParams();
  const classes = useStyles();

  const getProductDetailss = () => {
    fetch(
      `https://www.woolworths.com.au/apis/ui/product/detail/${params.Stockcode}`
    )
      .then((res: any) => res.json())
      .then((res: any) => {
        console.log("product detail", res.Product);
        setProductDetails(res.Product);
      });
  };
  const getAlsoViewedItemsProductList = () => {
    const body = JSON.stringify({
      //   categoryId: "1-A90F8053",
      categoryId: params.nodeId,
      pageNumber: 1,
      pageSize: 36,
      sortType: "TraderRelevance",
      url: `/shop/browse/${params.category}/${params.subCategory}/${params.subCategorySelected}`,
      location: `/shop/browse/${params.category}/${params.subCategory}/${params.subCategorySelected}`,
      formatObject: '{"name":"Organic Fruit"}',
      isSpecial: false,
      isBundle: false,
      isMobile: false,
      filters: null,
    });
    // fetch("https://www.woolworths.com.au/apis/ui/browse/category", {
    //   method: "post",

    //   body,
    //   headers: {
    //     Accept: "application/json",
    //     "Content-Type": "application/json",
    //     mode: "no-cors",
    //   },
    // })
    //   .then((res: any) => res.json())
    //   .then((res: any) => {
    //     console.log("res", res.Bundles);
    //     setProductDetailssList(res.Bundles);
    //   });
  };
  const getAlsoBroughtItemsProductList = () => {};
  useEffect(() => {
    getProductDetailss();
    //   // console.log("ProductJson", ProductJson);
    //   // setProductDetails(ProductJson.Product);
    //   fetch(
    //     `https://www.woolworths.com.au/apis/ui/product/detail/${params.Stockcode}`
    //   )
    //     .then((res: any) => res.json())
    //     .then((res: any) => {
    //       console.log("product detail", res.Product);
    //       // setProductDetails(res.Product);
    //     });
  }, []);

  return (
    <>
      <Card className={classes.root}>
        <CardMedia
          component="img"
          alt="Contemplative Reptile"
          height="140"
          image={ProductDetails.MediumImageFile}
          title="Contemplative Reptile"
        />
      </Card>
      <Card className={classes.root}>
        <CardActionArea>
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              {ProductDetails.Description}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              {ProductDetails.InstorePrice}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              {ProductDetails.CupString}
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button size="small" color="primary">
            Save to List
          </Button>
          <Button size="small" color="primary">
            Add to Card
          </Button>
        </CardActions>
      </Card>
      <Chip icon={<LocationOnIcon />} label="Check Stock In out stores" />
      <h2>Product Details</h2>
      <div
        dangerouslySetInnerHTML={{
          __html:
            ProductDetails.AdditionalAttributes &&
            ProductDetails.AdditionalAttributes.description,
        }}
      />
      <div>
        {ProductDetails.CountryOfOriginLabel &&
          ProductDetails.CountryOfOriginLabel.Disclaimer}
      </div>
    </>
  );
};

export default ProductDetails;
