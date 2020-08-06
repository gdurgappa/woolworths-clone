import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import { Box } from "@material-ui/core";
import Home from "./Home";
import Categories from "../modules/Categories/Categories";
import Routes from "../modules/Routes/Routes";
import Header from "../modules/Header/Header";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
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
    <Grid container spacing={3}>
      <Grid item xs={12} className={classes.topLinks}>
        <Paper>xs=12</Paper>
      </Grid>
      <Grid item xs={12} className={classes.mainLinks}>
        <Header />
      </Grid>
      <Grid item xs={12} className={classes.categories}>
        <Categories />
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
