import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import React, { useEffect, useState } from "react";
import Categories from "../modules/Categories/Categories";
import Header from "../modules/Header/Header";
import Routes from "../modules/Routes/Routes";
import TopNavLinks from "./TopNav/TopNavLinks";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    padding: 0,
    margin: 0,
  },
  topLinks: {
    background: "gray",
  },
  headerNavItems: {
    position: "sticky",
    top: 0,
    zIndex: 4,
  },
  categories: {
    zIndex: 3,
    position: (props: { isScrollDown: boolean }) =>
      props.isScrollDown ? "static" : "sticky",
    top: (props: { isScrollDown: boolean }) =>
      props.isScrollDown ? "" : "70px",
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
  mainPanel: {},
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

let lastScrollTop = 0;
//todo: scroll issue
const Layout = () => {
  const [isScrollDown, setIsScrollDown] = useState(false);
  const classes = useStyles({ isScrollDown });
  useEffect(() => {
    // document.addEventListener("scroll", callback);
    // return () => {
    //   document.removeEventListener("scroll", callback);
    // };
  }, []);

  // todo: causing re-render..
  const callback = () => {
    const st = window.pageYOffset || document.documentElement.scrollTop;
    if (st > lastScrollTop) {
      // downscroll code
      setIsScrollDown(true);
    } else {
      setIsScrollDown(false);
      // upscroll code
    }
    lastScrollTop = st <= 0 ? 0 : st;
  };
  return (
    <>
      <div className="main-appz">
        <Grid className={classes.root} container spacing={0}>
          <Grid item xs={12} className={classes.topLinks}>
            <TopNavLinks />
          </Grid>
          <Grid item xs={12} className={classes.headerNavItems}>
            <Header />
          </Grid>
          <Grid item xs={12} className={classes.categories}>
            <Categories />
          </Grid>
          <Grid item xs={12}>
            {/* <AnnouncementBanner content="Due to temporary supply disruptions in our network some products may be unavailable, and you may experience higher than usual out of stocks in your order. We apologise for any inconvenience caused." /> */}
          </Grid>

          <Grid container>
            {/* <Grid item xs={1} className={classes.leftPanel}>
          <>left panel</>
        </Grid> */}
            <Grid item xs={12} className={classes.mainPanel}>
              <Routes />
            </Grid>
            {/* <Grid item xs={1} className={classes.rightPanel}>
              <Paper>right panel</Paper>
            </Grid> */}
          </Grid>
        </Grid>
      </div>
      {/* <div className="small-window-dialog">'sorry'</div> */}
    </>
  );
};

export default Layout;
