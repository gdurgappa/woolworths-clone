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
import ExploreWeeksSpecialCard from "./HomeCookingCard";
import LatestFromWoolworthsCard from "./HomeCookingCard";
import MoreFromWoolworthsCard from "./HomeCookingCard";
import HomeCookingCard from "./HomeCookingCard";

const useStyles = makeStyles((theme) => ({
  root: {
    alignItems: "center",
    display: "flex",
    height: "64px",
  },
}));

const HomeCooking = ({}: any) => {
  const classes = useStyles();
  const [homeCookingList, setHomeCookingList] = useState([]);
  useEffect(() => {
    const items: any = [];
    db.collection("cooking")
      .get()
      .then(({ docs }) => {
        docs.forEach((doc) => {
          items.push(doc.data());
        });
        setHomeCookingList(items);
      });
  }, []);

  return (
    <>
      <h2> Home cooking</h2>
      <span>
        Discover +6,000 delicious recipe ideas and meal inspirations for the
        whole family, from breakfast to dinner, we have it covered. See this
        week's featured categories:
      </span>
      {homeCookingList.map((card, index) => {
        return <HomeCookingCard key={index} {...card} />;
      })}
    </>
  );
};

export default HomeCooking;
