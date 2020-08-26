import { Card, CardActions, Chip } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import React, { useEffect, useState } from "react";
import ReactImageMagnify from "react-image-magnify";
import { useHistory } from "react-router-dom";
import Cheveron from "../../../components/Common/Cheveron";
import SaveToList from "../../../components/Common/SaveToList";
import AddToCartButton from "../../../components/ProductList/AddToCartButton";
import ProductPrice from "../../../components/ProductList/ProductPrice";
import RatingSummary from "./RatingSummary";
import { ProductDetailsType } from "../../../types/product";

const useStyles = makeStyles(() => ({
  root: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    background: "#fff",
  },
  sectionWrapper: {
    width: "100%",
    maxWidth: "940px",
    marginLeft: "20px",
    marginRight: "20px",
  },
  mainDisplayContainer: {
    position: "relative",
    width: "100%",
    maxWidth: "1000px",
    margin: "0 auto",
    padding: "16px",
    display: "flex",
    WebkitBoxAlign: "center",
    alignItems: "center",
    WebkitBoxPack: "justify",
    justifyContent: "space-between",
  },
  displaySummaryContainer: {
    display: "flex",
    flexDirection: "column",
    flex: "0 1 50%",
    margin: "20px",
    position: "relative",
    alignItems: "center",
  },
  displaySummarySection: {
    border: "none",
    paddingTop: "49px",
  },
  imagesArea: {
    position: "relative",
    WebkitBoxFlex: 0,
    flex: "0 1 50%",
    padding: "16px",
  },
  imageContainer: {
    position: "relative",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
    margin: "20px",
    marginBottom: "24px",
    width: "100%",
    "& .magnifying-glass": {
      border: "1px solid black",
    },
  },
  image: {
    width: "220px",
    height: "220px",
  },
  detailImagesContainer: {
    listStyle: "none",
    marginBottom: "20px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexWrap: "wrap",
  },
  detailImage: {
    display: "inline-block",
    margin: "0 4px 8px",
    cursor: "pointer",

    "& img": {
      display: "inline-block",
      width: "70px",
      height: "70px",
      overflow: "hidden",
      fontSize: 0,
      border: "1px solid #dedfdc",
      padding: 0,
    },
  },
  backLinkContainer: {
    width: "100%",
    maxWidth: "1000px",
    margin: "0 auto",
    padding: "16px",
    display: "flex",
    alignItems: "center",
    color: "#178841",
    "& button": {
      cursor: "pointer",
      color: "#178841",
      background: 0,
    },
    "&:hover": {
      textDecoration: "underline",
    },
  },
  productImageAndCardContainer: {},
  productImageCardRoot: {},
  cardHeading: {
    padding: "20px 20px 0",
    minHeight: "90px",
    fontSize: "22px",
    fontWeight: 500,
  },
  productImageCardImageRoot: {},
  productMainCardRoot: {
    //border: '2px solid rgb(194, 0, 22)',
    paddingTop: "25px",
    border: "none",
    position: "relative",
    margin: "20px",
    maxWidth: "340px",
    borderRadius: 0,
  },
  cardActionButtonsContainer: {
    display: "flex",
    MsFlexPack: "justify",
    justifyContent: "center",
    padding: "0 20px 30px",
    MsFlexAlign: "center",
    alignItems: "center",
  },
  checkStockContainer: {
    width: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    height: "54px",
    maxWidth: "340px",
    marginBottom: "16px",
    border: "1px solid #e0e0e0",
    textAlign: "center",
    verticalAlign: "middle",
    lineHeight: "40px",
    margin: "0",
    background: 0,
    cursor: "pointer",
    "& div": {
      background: 0,
      borderRadius: "0",
      color: "#178841",
    },
    "&:hover": {
      backgroundColor: "#e0e0e0",
      textDecoration: "none",
    },
  },
}));

interface ProductMainDisplayProps {
  productDetails: ProductDetailsType;
}
const ProductMainDisplay = ({ productDetails }: ProductMainDisplayProps) => {
  //todo: https://www.woolworths.com.au/shop/productdetails/95889/nobby-s-peanuts-salted
  // label , prodcut list ... price dropped etc. h1 is missing in product category search
  const classes = useStyles();
  const [currentImage, setCurrentImage] = useState({
    medium: "",
    large: "",
  });
  const history = useHistory();
  useEffect(() => {
    setCurrentImage({
      medium: productDetails.Product.MediumImageFile,
      large: productDetails.Product.LargeImageFile,
    });
  }, []);

  return (
    <section className={classes.root}>
      <div
        onClick={() => history.goBack()}
        className={classes.backLinkContainer}
      >
        <Cheveron cheveronType="left" />
        <button>Back</button>
        {/* <Link to="#">Back</Link> */}
      </div>
      <div className={classes.mainDisplayContainer}>
        <div className={classes.imagesArea}>
          <section className={classes.imageContainer}>
            <ReactImageMagnify
              {...{
                smallImage: {
                  alt: "Wristwatch by Ted Baker London",
                  isFluidWidth: true,
                  src: currentImage.medium,
                },
                largeImage: {
                  src: currentImage.large,
                  width: 1200,
                  height: 1800,
                },
                lensStyle: {
                  background: 0,
                },
                enlargedImageContainerStyle: {
                  zIndex: 2,
                  border: "4px solid gray",
                },
                enlargedImageContainerDimensions: {
                  width: "150%",
                  height: "150%",
                },
              }}
            />
            {productDetails.DetailsImagePaths.length > 1 && (
              <div>
                <ul className={classes.detailImagesContainer}>
                  {productDetails.DetailsImagePaths.map(
                    (img: string, index: number) => {
                      return (
                        <li key={index} className={classes.detailImage}>
                          <img
                            onClick={(
                              e: React.MouseEvent<HTMLImageElement, MouseEvent>
                            ) => {
                              const targetAttribute =
                                (e.target as HTMLImageElement).getAttribute(
                                  "src"
                                ) || "";
                              setCurrentImage({
                                medium: targetAttribute.replace(
                                  "large",
                                  "medium"
                                ),
                                large: targetAttribute,
                              });
                            }}
                            src={img}
                          />
                        </li>
                      );
                    }
                  )}
                </ul>
              </div>
            )}
          </section>
        </div>

        <div className={classes.displaySummaryContainer}>
          <section className={classes.displaySummarySection}>
            <Card
              className={classes.productMainCardRoot}
              style={{
                position: "relative",
                border: "2px solid",
                borderColor:
                  productDetails.Product.HeaderTag &&
                  productDetails.Product.HeaderTag.BorderColor &&
                  productDetails.Product.HeaderTag.BorderColor,
              }}
            >
              {productDetails.Product.HeaderTag && (
                <div
                  style={{
                    backgroundColor:
                      productDetails.Product.HeaderTag.BackgroundColor,
                    color: productDetails.Product.HeaderTag.TextColor,
                    textAlign: "center",
                    top: "0",
                    position: "absolute",
                    width: "100%",
                    textTransform: "uppercase",
                    padding: "5px 0px",
                    fontSize: "14px",
                  }}
                  dangerouslySetInnerHTML={{
                    __html:
                      productDetails.Product.HeaderTag.Content &&
                      productDetails.Product.HeaderTag.Content,
                  }}
                />
              )}
              <h1 className={classes.cardHeading}>
                {productDetails.Product.FullDescription}
              </h1>
              <ProductPrice
                InstorePrice={productDetails.Product.InstorePrice}
                CupString={productDetails.Product.CupString}
              />
              <CardActions className={classes.cardActionButtonsContainer}>
                <SaveToList />
                <AddToCartButton
                  rootDivOverrideStyle={{ width: "134px", height: "36px" }}
                />
              </CardActions>
            </Card>
          </section>
          <div className={classes.checkStockContainer}>
            <Chip icon={<LocationOnIcon />} label="Check Stock In out stores" />
            <Cheveron cheveronType="right" />
          </div>
          {productDetails.Product.Rating.RatingCount > 0 && (
            <RatingSummary rating={productDetails.Product.Rating} />
          )}
        </div>
      </div>
    </section>
  );
};

export default ProductMainDisplay;
