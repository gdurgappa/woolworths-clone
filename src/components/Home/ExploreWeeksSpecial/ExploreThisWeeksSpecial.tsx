import { makeStyles } from "@material-ui/core/styles";
import React from "react";
import * as homepageData from "../../../constants/firestoreData/homePageData";
import ExploreWeeksSpecialCard from "./ExploreWeeksSpecialCard";

const useStyles = makeStyles(() => ({
  sectionContainer: {
    background: "#fff",
    width: "100%",
  },
  contentContainer: {
    display: "flex",
    alignItems: "start",
    justifyContent: "center",
    flexDirection: "column",
    padding: "70px 0",
    width: "100%",
    maxWidth: "1200px",
    margin: "0 auto",
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

const ExploreThisWeeksSpecial = () => {
  const classes = useStyles();

  const exploreWeeksSpecialList = homepageData.exploreThisWeekSpecials;
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
