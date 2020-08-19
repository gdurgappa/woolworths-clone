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
import { db } from "../../../App";
import ExploreWeeksSpecialCard from "./ShoppingOnlineCard";
import LatestFromWoolworthsCard from "./ShoppingOnlineCard";

const useStyles = makeStyles((theme) => ({
  root: {
    alignItems: "center",
    display: "flex",
    height: "64px",
  },
}));

const ShoppingOnline = ({}: any) => {
  const classes = useStyles();
  const [shoppingOnlineList, setShoppingOnlineList] = useState([]);
  useEffect(() => {
    const items: any = [];
    db.collection("shopOnline")
      .get()
      .then(({ docs }) => {
        docs.forEach((doc) => {
          items.push(doc.data());
        });
        setShoppingOnlineList(items);
      });
  }, []);

  return (
    <>
      {shoppingOnlineList.map((card, index) => {
        return <LatestFromWoolworthsCard key={index} {...card} />;
      })}
    </>
  );
};

export default ShoppingOnline;
