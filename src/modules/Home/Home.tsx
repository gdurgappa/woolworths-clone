import React, { useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import ExploreThisWeeksSpecial from "../../components/Home/ExploreWeeksSpecial/ExploreThisWeeksSpecial";
import LatestFromWoolworths from "../../components/Home/LatestFromWoolworths/LatestFromWoolworths";
import ShoppingOnline from "../../components/Home/ShoppingOnline/ShoppingOnline";
import MoreFromWoolworths from "../../components/Home/MoreFromWoolworths/MoreFromWoolworths";
import HomeCooking from "../../components/Home/HomeCooking/HomeCooking";
import { db } from "../../App";
import AnimatedCardsList from "../../components/Home/AnimatedCardsList";
import WelcomeSectionTabs from "../../components/Home/WelcomeSection/WelcomeSectionTabs";
import MainCarousel from "./MainCarousel";
// import MainCarousel from "./MainCarousel";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  bannerContainer: {
    background: "gray",
  },
  mainCarousal: {
    background: "lightblue",
  },
  welcomeSection: {
    // background: "yellow",
    // width: "100%",
  },
  bannerAd: {
    // background: "lightgreen",
  },
  weekSpecialSection: {
    // background: "#fff",
  },
  latestSection: {
    // background: "#ccc",
  },
  homecookingSection: {
    background: "#fff",
  },
  footer: {
    // background: "red",
  },
}));

const Home = (props: {}) => {
  const classes = useStyles();

  return (
    <Grid container spacing={3}>
      <Grid item xs={12} className={classes.bannerContainer}>
        bannerContainer
      </Grid>
      <Grid item xs={12} className={classes.mainCarousal}>
        <MainCarousel />
        main carousel
      </Grid>

      <Grid item xs={12} className={classes.welcomeSection}>
        <WelcomeSectionTabs />
      </Grid>
      <Grid item xs={12} className={classes.weekSpecialSection}>
        <ExploreThisWeeksSpecial />
      </Grid>
      <Grid item xs={12} className={classes.latestSection}>
        <AnimatedCardsList
          sectionType="latestFromWoolworth"
          sectionHeading="Check out the latest from Woolworths"
        />
      </Grid>
      <Grid item xs={12} className={classes.homecookingSection}>
        <AnimatedCardsList
          sectionType="cooking"
          sectionStyle={{ background: "#fff" }}
          contentStyle={{ alignItems: "center" }}
          sectionHeading="Home cooking"
          introPara1="Discover +6,000 delicious recipes and fresh ideas for the whole family. From breakfast to dinner, snacks and dessert, we have every meal covered."
          introPara2="See this week's featured recipes:"
        />
      </Grid>
      <Grid item xs={12} className={classes.homecookingSection}>
        <AnimatedCardsList
          sectionType="shopOnline"
          sectionHeading="Shop Online"
          stctionStyle={{ background: "#fff" }}
        />
      </Grid>

      <Grid item xs={12} className={classes.footer}>
        <AnimatedCardsList
          sectionType="moreFromWoolworth"
          sectionHeading="More from woolworths"
          buttonStyle={{ maxWidth: "200px", overflow: "hidden" }}
        />
      </Grid>
    </Grid>
  );
};

export default Home;
