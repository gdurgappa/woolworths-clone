import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Paper,
  Card,
  CardMedia,
  CardContent,
  CardHeader,
  Button,
  CardActions,
} from "@material-ui/core";
import { Chip } from "@material-ui/core";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import RatingSummary from "./RatingSummary";
import ProductPrice from "../../../components/ProductList/ProductPrice";
import AddToCartButton from "../../../components/ProductList/AddToCartButton";
import SaveToList from "../../../components/Common/SaveToList";
import Cheveron from "../../../components/Common/Cheveron";
import Link from "../../../components/Common/Link";
import Magnifier from "react-magnifier";
import ReactImageMagnify from "react-image-magnify";
import { useHistory } from "react-router-dom";
/*
Product.HeaderTag: {BackgroundColor: "#c20016", BorderColor: "#c20016", TextColor: "#fff",…}
BackgroundColor: "#c20016"
BorderColor: "#c20016"
Content: "Low price <span class="u-semibold">always</span>"
Promotion: "LowPrice"
TagLink: null
TextColor: "#fff"

DetailsImagePaths: ["https://cdn0.woolworths.media/content/wowproductimages/large/961095.jpg",…]
0: "https://cdn0.woolworths.media/content/wowproductimages/large/961095.jpg"
1: "https://cdn0.woolworths.media/content/wowproductimages/large/961095_2.jpg"
2: "https://cdn0.woolworths.media/content/wowproductimages/large/961095_3.jpg"
3: "https://cdn0.woolworths.media/content/wowproductimages/large/961095_4.jpg"
4: "https://cdn0.woolworths.media/content/wowproductimages/large/961095_5.jpg"
5: "https://cdn0.woolworths.media/content/wowproductimages/large/961095_6.jpg"

*/

const useStyles = makeStyles((theme) => ({
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
  // mainDisplayContainer: {
  //   display: "flex",
  //   justifyContent: "space-evenly",
  // },
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
    // "& .magnifier-image": {
    //   width: "220px",
    //   height: "220px",
    // },
  },
  image: {
    // height: "auto",
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
    cursor: "pointer",
    "& button": {
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
const ProductMainDisplay = ({ productDetails }: any) => {
  const classes = useStyles();
  const [currentImage, setCurrentImage] = useState({
    medium: null,
    large: null,
  });
  const history = useHistory();
  useEffect(() => {
    setCurrentImage({
      medium: productDetails.Product.MediumImageFile,
      large: productDetails.Product.LargeImageFile,
    });
  }, []);
  console.log("productDetails", productDetails);
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
                  // src: productDetails.Product.MediumImageFile,
                },
                largeImage: {
                  src: currentImage.large,
                  // src: productDetails.Product.LargeImageFile,
                  width: 1200,
                  height: 1800,
                },
                lensStyle: {
                  // background: "hsla(0, 0%, 100%, .3)",
                  background: 0,
                  // border: "1px solid #ccc",//not working
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
                            onClick={(e: any) =>
                              setCurrentImage({
                                medium: e.target
                                  .getAttribute("src")
                                  .replace("large", "medium"),
                                large: e.target.getAttribute("src"),
                              })
                            }
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
                {productDetails.Product.Description}
              </h1>
              <ProductPrice
                InstorePrice={productDetails.Product.InstorePrice}
                CupString={productDetails.Product.CupString}
              />
              <CardActions className={classes.cardActionButtonsContainer}>
                <SaveToList
                  linkOverrideStyle={{
                    width: "134px",
                    height: "36px",
                  }}
                />
                <AddToCartButton
                  rootDivOverrideStyle={{ width: "134px", height: "36px" }}
                  onClickCallback={() => {}}
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
