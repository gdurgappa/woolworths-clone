import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import { makeStyles } from "@material-ui/core/styles";
import React from "react";
import ReactPlaceholder from "react-placeholder";
import { Link } from "react-router-dom";
import SaveToList from "../../components/Common/SaveToList";
import AddToCartButton from "../../components/ProductList/AddToCartButton";
import ProductPrice from "../../components/ProductList/ProductPrice";
import { Product } from "../../types/product";

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  productContainer: {
    display: "flex",
    flexDirection: "column",
    // display: "inline-flex",
    width: "220px",
    height: "480px",
    margin: "0 10px 20px",
    verticalAlign: "top",
    position: "relative",
    background: "#fff",
    boxShadow: "0 0 1px rgba(0,0,0,.3)",
    outline: "none",
    border: (props: any) => props && props.BorderColor && "2px solid",
    borderColor: (props: any) =>
      props && props.BorderColor && props.BorderColor,
  },
  titleAndPriceContainer: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    height: "145px",
  },
  cardContentRoot: {
    padding: 0,
  },
  image: { width: "150px", height: "150px", margin: "22px auto 18px" },
  title: {
    display: "block",
    fontSize: "14px",
    // fontFamily: "Fresh Sans,Helvetica,Arial,sans-serif",
    color: "#3a474e",
    margin: "0 20px",
    lineHeight: "1.42857143",
    cursor: "pointer",
    textDecoration: "none",
    height: "40px",
    marginBottom: "10px",
    overflow: "hidden",
    "&:hover": {
      textDecoration: "underline",
    },
  },
  specialImageTag: {
    width: "60px",
    height: "60px",
    position: "absolute",
    top: "60px",
    left: "10px",
  },
  cardActionButtonsContainer: {
    display: "flex",
    alignItems: "center",
    margin: "30px 20px 0px 20px",
    textAlign: "center",
    flexDirection: "column",
    padding: 0,
  },
});

const Product = (props: Product) => {
  const {
    Description,
    CupString,
    InstoreHasCupPrice,
    InstorePrice,
    MediumImageFile,
    UrlFriendlyName,
    Stockcode,
    ImageTag,
    HeaderTag,
    Name,
    HideWasSavedPrice,
    InstoreWasPrice,
  } = props;

  const classes = useStyles(HeaderTag || {});
  return (
    <ReactPlaceholder
      ready={true}
      // showLoadingAnimation
      // ready={products.length > 0}
      type="rect"
      className={classes.productContainer}
      style={{ width: "500px", height: "500px", background: "red" }}
      // customPlaceholder={<ProductListSkeleton />}
    >
      <Card className={classes.productContainer}>
        {HeaderTag && (
          <div
            style={{
              backgroundColor: HeaderTag.BackgroundColor,
              color: HeaderTag.TextColor,
              textAlign: "center",
              width: "100%",
              textTransform: "uppercase",
              padding: "4px 0px",
              fontSize: "14px",
            }}
            dangerouslySetInnerHTML={{
              __html: HeaderTag.Content && HeaderTag.Content,
            }}
          />
        )}
        <CardActionArea>
          {/* <ReactPlaceholder
          ready={false}
          showLoadingAnimation
          // ready={products.length > 0}
          type="rect"
          className={classes.productContainer}
          style={{
            zIndex: 1,
            width: "100px",
            height: "100px",
            background: "blue",
          }}
          // customPlaceholder={<ProductListSkeleton />}
        > */}
          <CardMedia
            classes={{ media: classes.image }}
            component="img"
            alt={Description}
            height="140"
            image={MediumImageFile}
            title={Description}
          />
          {ImageTag && ImageTag.TagContent && (
            <img
              className={classes.specialImageTag}
              src={`https://woolworths.com.au/${ImageTag.TagContent}`}
            />
          )}
          {/* </ReactPlaceholder> */}
          <div className={classes.titleAndPriceContainer}>
            <CardContent className={classes.cardContentRoot}>
              <Link
                className={classes.title}
                to={`/shop/productdetails/${Stockcode}/${UrlFriendlyName}`}
              >
                {Name}
              </Link>
            </CardContent>
            <ProductPrice
              {...{
                CupString,
                InstorePrice,
                InstoreHasCupPrice,
                HideWasSavedPrice,
                InstoreWasPrice,
              }}
            />
          </div>
        </CardActionArea>
        <CardActions className={classes.cardActionButtonsContainer}>
          <AddToCartButton onClickCallback={() => {}} />
          <SaveToList
            containerOverrideStyle={{ width: "100%", justifyContent: "center" }}
          />
          {/* <Button className={classes.root} size="small" color="primary">
          Save to List
        </Button> */}
        </CardActions>
      </Card>
    </ReactPlaceholder>
  );
};

export default Product;
