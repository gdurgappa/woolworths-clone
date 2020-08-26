import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import { makeStyles } from "@material-ui/core/styles";
import React from "react";
import { Link } from "react-router-dom";
import AddToCartButton from "../../ProductList/AddToCartButton";
import { HomePageCardProps } from "../AnimatedCard";

const useStyles = makeStyles({
  cardRoot: {
    margin: "auto 4px",
    borderRadius: "6px",
    padding: "15px 15px 20px 15px",
    textAlign: "center",
    WebkitBoxShadow: "0px 4px 8px 0px rgba(58, 71, 78, 0.1)",
    boxShadow: "0px 4px 8px 0px rgba(58, 71, 78, 0.1)",
    WebkitTransition: "all .75s ease-out",
    transition: "all .75s ease-out",
  },
  cardContainer: {
    display: "flex",
    flexDirection: "column",
    height: "430px",
    width: "280px",
  },
  cardContent: {
    padding: 0,
  },
  headerImgContainer: {
    borderRadius: "6px",
    display: "flex",
    WebkitBoxAlign: "center",
    MsFlexAlign: "center",
    alignItems: "center",
    height: "80px",
    overflow: "hidden",
    background: (props: { background: string }) => props.background,
    "& img": {
      padding: "5px",
      width: "80px",
      height: "80px",
    },
    "& div": {
      padding: "5px",
      width: "80px",
      height: "80px",
    },
    "& span": {
      color: "#3a474e",
      marginLeft: "10px",
    },
  },
  title: {
    display: "block",
    fontSize: "14px",
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

  cardActionButtonsContainer: {
    display: "flex",
    alignItems: "center",
    margin: "10px 20px",
    textAlign: "center",
    flexDirection: "column",
    padding: 0,
  },
});

const headingStyleMapping = (headerType: string) => {
  const headerBackgroundObj: { [key: string]: any } = {
    halfPrice: {
      background: "#ffda00",
    },
    freshSpecial: {
      background:
        '#ffda00 url("https://cdn0.woolworths.media/content/homepage/fresh-wood-700x70-2.jpg") no-repeat left center',
    },
  };
  return headerBackgroundObj[headerType];
};

const ExploreWeeksSpecialCard = ({
  description,
  headerImg,
  image,
  title,
  headerType = "",
}: HomePageCardProps) => {
  const classes = useStyles(headingStyleMapping(headerType));

  return (
    <div className={classes.cardContainer}>
      <Card className={classes.cardRoot}>
        {headerImg ? (
          <div className={classes.headerImgContainer}>
            <img alt={description} src={headerImg} />
            <span>{title}</span>
          </div>
        ) : (
          <div
            style={{
              background: "#fff",
              border: "1px solid #d6d6d6",
              overflow: "hidden",
            }}
            className={classes.headerImgContainer}
          >
            <div
              style={{
                background: "#e6007e",
                display: "flex",
                textAlign: "center",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "18px",
                color: "#fff",
              }}
            >
              New
            </div>
            <span>{title}</span>
          </div>
        )}
        <img alt={description} src={image} />

        <CardContent className={classes.cardContent}>
          <Link className={classes.title} to={"#"}>
            {description}
          </Link>
        </CardContent>
        <CardActions className={classes.cardActionButtonsContainer}>
          <AddToCartButton />
        </CardActions>
      </Card>
    </div>
  );
};

export default ExploreWeeksSpecialCard;
