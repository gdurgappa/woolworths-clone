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
import ExploreWeeksSpecialCard from "./ExploreWeeksSpecialCard";

const useStyles = makeStyles((theme) => ({
  sectionContainer: {
    // background: "#fff",
    maxWidth: "1200px",
    margin: "0 auto",
  },
  contentContainer: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
    padding: "70px 0",
    // width: "100%",
    // maxWidth: "1200px",
  },
  cardsContainer: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    height: "450px",
  },
  heading: {
    fontSize: "28px",
    marginBottom: "16px",
  },
}));
const ExploreThisWeeksSpecial = ({}: any) => {
  const classes = useStyles();
  const [exploreWeeksSpecialList, setExploreWeeksSpecialList] = useState([]);
  useEffect(() => {
    const items: any = [];
    db.collection("exploreWeeksSpecial")
      .get()
      .then(({ docs }) => {
        docs.forEach((doc) => {
          items.push(doc.data());
        });
        setExploreWeeksSpecialList(items);
      });
  }, []);

  return (
    <section className={classes.sectionContainer}>
      <div className={classes.contentContainer}>
        <h1 className={classes.heading}>Explore this week’s specials</h1>
        <div className={classes.cardsContainer}>
          {exploreWeeksSpecialList.reverse().map((card, index) => {
            return <ExploreWeeksSpecialCard key={index} {...card} />;
          })}
        </div>
      </div>
    </section>
  );
};

export default ExploreThisWeeksSpecial;
