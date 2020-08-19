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
import { db } from "../../App";
import ExploreWeeksSpecialCard from "./AnimatedCard";
import AnimatedCard from "./AnimatedCard";

const useStyles = makeStyles((theme) => ({
  sectionContainer: {
    // background: "#fff",
    maxWidth: "1200px",
    margin: "0 auto",
  },
  contentContainer: {
    display: "flex",
    alignItems: "start",
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
    width: "100%",
    // height: "450px",
  },
  heading: {
    fontSize: "28px",
    marginBottom: "16px",
  },
}));

const AnimatedCardsList = ({
  sectionType,
  sectionHeading,
  sectionStyle,
  contentStyle,
}: any) => {
  const classes = useStyles();
  const [animatedCardDetails, setAnimatedCardDetails] = useState([]);
  useEffect(() => {
    const items: any = [];
    db.collection(sectionType)
      .get()
      .then(({ docs }) => {
        docs.forEach((doc) => {
          items.push(doc.data());
        });
        setAnimatedCardDetails(items);
      });
  }, []);
  return (
    <section style={sectionStyle} className={classes.sectionContainer}>
      <div className={classes.contentContainer}>
        <h1 className={classes.heading}>{sectionHeading}</h1>
        <div className={classes.cardsContainer}>
          {animatedCardDetails.map((card, index) => {
            return <AnimatedCard key={index} {...card} />;
          })}
        </div>
      </div>
    </section>
  );
};

export default AnimatedCardsList;