import React, { useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import ExploreThisWeeksSpecial from "../../components/Home/ExploreWeeksSpecial/ExploreThisWeeksSpecial";
import LatestFromWoolworths from "../../components/Home/LatestFromWoolworths/LatestFromWoolworths";
import ShoppingOnline from "../../components/Home/ShoppingOnline/ShoppingOnline";
import MoreFromWoolworths from "../../components/Home/MoreFromWoolworths/MoreFromWoolworths";
import HomeCooking from "../../components/Home/HomeCooking/HomeCooking";
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
    background: "yellow",
  },
  bannerAd: {
    background: "lightgreen",
  },
  weekSpecialSection: {
    background: "orange",
  },
  latestSection: {
    background: "#ccc",
  },
  homecookingSection: {
    background: "green",
  },
  footer: {
    background: "red",
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
        {/* <MainCarousel /> */}
        main carousel
      </Grid>

      <Grid item xs={12} className={classes.welcomeSection}>
        welcomeSection
      </Grid>
      <Grid item xs={12} className={classes.weekSpecialSection}>
        {/* <ExploreThisWeeksSpecial /> */}
      </Grid>
      <Grid item xs={12} className={classes.latestSection}>
        {/* <LatestFromWoolworths /> */}
      </Grid>
      <Grid item xs={12} className={classes.homecookingSection}>
        <HomeCooking />
      </Grid>
      <Grid item xs={12} className={classes.homecookingSection}>
        {/* <ShoppingOnline /> */}
      </Grid>

      <Grid item xs={12} className={classes.footer}>
        <MoreFromWoolworths />
      </Grid>
    </Grid>
  );
};

export default Home;
