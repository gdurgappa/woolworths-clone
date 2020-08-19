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
import AddToCartButton from "../ProductList/AddToCartButton";
import Cheveron from "../Common/Cheveron";
import ButtonWithIcon from "../Common/ButtonWithIcon";

const useStyles = makeStyles((theme) => ({
  cardRoot: {
    margin: "auto 4px",
    borderRadius: "6px",
    padding: "15px 15px 20px 15px",
    textAlign: "center",
    WebkitBoxShadow: "0px 4px 8px 0px rgba(58, 71, 78, 0.1)",
    boxShadow: "0px 4px 8px 0px rgba(58, 71, 78, 0.1)",
    WebkitTransition: "all .75s ease-out",
    // transition: "all .75s ease-out",
    display: "flex",
    flexDirection: "column",
    // height: "430px",
    width: "32%",
    minHeight: "220px",
    background: (props: any) => (props ? `url(${props.image}) no-repeat` : ""),
    backgroundSize: "cover !important",
    backgroundPosition: "center",
    position: "relative",
    transition: "all .35s ease-out",
    "&:hover": {
      "&>div": {
        transform: "translateY(60px)",
      },
      "& #actionButton": {
        opacity: 1,
      },
    },
  },
  cardContainer: {},
  cardContent: {
    position: "absolute",
    display: "flex",
    alignItems: "start",
    flexDirection: "column",
    borderRadius: "4px",
    width: "100%",
    left: 0,
    right: 0,
    bottom: 0,
    padding: "0px 25px",
    transition: "all .35s ease-out",
    height: "100%",
    transform: "translateY(170px)",
    cursor: "pointer",
    background:
      "linear-gradient(to bottom, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.5) 16%, rgba(0, 0, 0, 0.51) 17%, rgba(0, 0, 0, 0.66) 37%, rgba(0, 0, 0, 0.7) 43%)",
    // transition: "all .75s ease-out",
    // "&:hover": {
    //   transform: "translateY(-100px)",
    // },
  },
  title: {
    marginTop: "16px",
    fontSize: "20px",
    marginBottom: "16px",
    position: "relative",
    maxWidth: "320px",
    color: "#fff",
    textDecoration: "none",
    textAlign: "left",
  },

  cardActionButtonsContainer: {
    display: "flex",
    alignItems: "center",
    // margin: "10px 20px",
    textAlign: "center",
    flexDirection: "column",
    padding: 0,
  },
}));

interface LatestFromWoolworthsCardProps {
  description: string;
  link: string;
  headerImg: string;
  image: string;
  headerText: string;
}
const AnimatedCard = ({ description, link, image, title }: any) => {
  const classes = useStyles({ image });

  return (
    <Card className={classes.cardRoot}>
      <div className={classes.cardContent}>
        <Link className={classes.title} to={"#"}>
          <h4>{title}</h4>
        </Link>
        <CardActions className={classes.cardActionButtonsContainer}>
          <ButtonWithIcon />
        </CardActions>
      </div>
    </Card>
  );
};

export default AnimatedCard;
