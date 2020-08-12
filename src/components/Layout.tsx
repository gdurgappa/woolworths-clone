import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import { Box } from "@material-ui/core";
import Home from "./Home";
import Categories from "../modules/Categories/Categories";
import Routes from "../modules/Routes/Routes";
import Header from "../modules/Header/Header";
import TopNavLinks from "./TopNav/TopNavLinks";
import AnnouncementBanner from "./AnnouncementBanner";
import { topNavLinks } from "../constants/menus";
import TopNavLink from "./TopNav/TopNavLink";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    padding: 0,
    margin: 0,
  },
  topLinks: {
    background: "gray",
  },
  mainLinks: {
    background: "lightblue",
  },
  categories: {
    background: "yellow",
  },
  bannerAd: {
    background: "lightgreen",
  },
  carousal: {
    background: "orange",
  },
  leftPanel: {
    background: "#ccc",
  },
  mainPanel: {
    background: "green",
  },
  rightPanel: {
    background: "red",
  },
  homeContaier: {
    background: "violet",
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
}));

const Layout = (props: {}) => {
  const classes = useStyles();
  return (
    <Grid className={classes.root} container spacing={0}>
      <Grid item xs={12} className={classes.topLinks}>
        <TopNavLinks />
      </Grid>
      <Grid item xs={12} className={classes.mainLinks}>
        <Header />
      </Grid>
      <Grid item xs={12} className={classes.categories}>
        <Categories />
      </Grid>
      <Grid item xs={12} className={classes.mainLinks}>
        <AnnouncementBanner content="Due to temporary supply disruptions in our network some products may be unavailable, and you may experience higher than usual out of stocks in your order. We apologise for any inconvenience caused." />
      </Grid>

      <Grid container>
        <Grid item xs={1} className={classes.leftPanel}>
          <>left panel</>
        </Grid>
        <Grid item xs={10} className={classes.mainPanel}>
          <Routes />
        </Grid>
        <Grid item xs={1} className={classes.rightPanel}>
          <Paper>right panel</Paper>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Layout;
