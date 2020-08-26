import { makeStyles } from "@material-ui/core/styles";
import React from "react";
import * as homepageData from "../../../constants/firestoreData/homePageData";
import { WelcomeTab } from "../../../constants/firestoreData/homePageData";
import WelcomeSectionTab from "./WelcomeSectionTab";

const useStyles = makeStyles(() => ({
  sectionContainer: {
    background: "#eee",
    maxWidth: "1200px",
    margin: "0 auto",
    padding: "24px 0 24px 0",
    overflow: "hidden",
  },
  contentContainer: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
    height: "90px",
  },
  cardsContainer: {
    listStyle: "none",
    padding: "10px 0",
  },
  heading: {
    fontSize: "28px",
    marginBottom: "16px",
    color: "#3A474E",
    textAlign: "center",
  },
}));
const WelcomeSectionTabs = () => {
  const classes = useStyles();
  const welcomeTabs = homepageData.welcomeTabs;
  return (
    <section className={classes.sectionContainer}>
      <div className={classes.contentContainer}>
        <h1 className={classes.heading}>Welcome to Woolworths</h1>
        <nav>
          <ul className={classes.cardsContainer}>
            {welcomeTabs.map((card: WelcomeTab, index: number) => {
              return <WelcomeSectionTab key={index} {...card} />;
            })}
          </ul>
        </nav>
      </div>
    </section>
  );
};

export default WelcomeSectionTabs;
