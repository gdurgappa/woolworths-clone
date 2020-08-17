import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { Link } from "react-router-dom";
import AddToCartButton from "../../ProductList/AddToCartButton";

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
    margin: "10px 20px",
    textAlign: "center",
    flexDirection: "column",
    padding: 0,
  },
});

interface LatestFromWoolworthsCardProps {
  description: string;
  link: string;
  headerImg: string;
  image: string;
  headerText: string;
}
const ShoppingOnlineCard = ({
  description,
  headerImg,
  link,
  image,
  title,
}: any) => {
  const classes = useStyles();

  return (
    <Card className={classes.productContainer}>
      <CardActionArea>
        <CardMedia
          classes={{ media: classes.image }}
          component="img"
          alt={description}
          height="140"
          image={image}
          title={description}
        />

        <CardContent className={classes.cardContentRoot}>
          <Link className={classes.title} to={"#"}>
            {title}
          </Link>
        </CardContent>
      </CardActionArea>
      <CardActions className={classes.cardActionButtonsContainer}>
        <AddToCartButton onClickCallback={() => {}} />
      </CardActions>
    </Card>
  );
};

export default ShoppingOnlineCard;
