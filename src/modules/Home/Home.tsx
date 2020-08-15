import React, { useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
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
        weekSpecialSection
      </Grid>
      <Grid item xs={12} className={classes.latestSection}>
        latestSection
      </Grid>
      <Grid item xs={12} className={classes.homecookingSection}>
        homecookingSection
      </Grid>

      <Grid item xs={12} className={classes.footer}>
        homecookingSection
      </Grid>
    </Grid>
  );
};

export default Home;
