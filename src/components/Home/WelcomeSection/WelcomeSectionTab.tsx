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
  cardContainer: {
    display: "inline-block",
    position: "relative",
    verticalAlign: "middle",
    WebkitBoxShadow: "2px 2px 5px rgba(0, 0, 0, 0.25)",
    boxShadow: "2px 2px 5px rgba(0, 0, 0, 0.25)",
    borderRadius: "4px",
    background: "#fff",
    margin: "0 8px",
    width: "180px",
    WebkitAnimation: "slideIn 350ms backwards",
    animation: "slideIn 350ms backwards",
    transition: "box-shadow 350ms ease-out, border 350ms ease-out",
    border: "1px solid transparent",
    "&:hover": {
      boxShadow: "4px 4px 8px rgba(0, 0, 0, 0.3)",
      border: "1px solid #178841",
    },
  },
  tab: {
    padding: 0,
  },

  imageContainer: {
    display: "flex",
    alignItems: "center",
    "& figure": {
      width: "64px",
      height: "64px",
      backgroundSize: "36px 54px",
      backgroundRepeat: "no-repeat",
    },
    // backgroundImage:
    //   "url(https://cdn0.woolworths.media/content/news-portal/newsroom-icon-ceo-updates.svg)",
    // backgroundPosition: "center center",
    margin: "0",
    padding: "0",
  },
  title: {
    fontSize: "14px",
    lineHeight: "20px",
    marginBottom: 0,
    color: "#178841",
    textAlign: "left",
    textDecoration: "none",
  },
  newLabel: {
    right: "10px",
    position: "absolute",
    width: "75px",
    lineHeight: "20px",
    fontSize: "12px",
    textAlign: "center",
    top: "-9px",
    borderRadius: "4px",
    color: "rgb(255, 255, 255)",
    backgroundColor: "rgb(230, 0, 126)",
  },
});

const WelcomeSectionTab = ({ description, image, new: newLabel }: any) => {
  const classes = useStyles();

  return (
    <li className={classes.cardContainer}>
      <Link className={classes.imageContainer} to="#">
        <div dangerouslySetInnerHTML={{ __html: image }} />
        <h3 className={classes.title}>{description}</h3>
      </Link>
      {newLabel && <div className={classes.newLabel}>NEW</div>}
    </li>
  );
};

export default WelcomeSectionTab;
