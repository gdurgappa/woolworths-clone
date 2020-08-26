import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import React from "react";
import ExploreThisWeeksSpecial from "../../components/Home/ExploreWeeksSpecial/ExploreThisWeeksSpecial";
import WelcomeSectionTabs from "../../components/Home/WelcomeSection/WelcomeSectionTabs";
import MainCarousel from "./MainCarousel";
import HomepageCardsList from "../../components/Home/AnimatedCardsList";

const useStyles = makeStyles(() => ({
  root: {
    flexGrow: 1,
  },
  homecookingSection: {
    background: "#fff",
  },
  footer: {
    fontFamily: '"Fresh Sans Md",Helvetica,Arial,sans-serif',
    height: "50px",
    textAlign: "center",
    lineHeight: "50px",
    background: "silver",
    display: "inline-block",
    width: "100%",
    fontSize: "12px",
  },
}));

const Home = () => {
  const classes = useStyles();

  return (
    <Grid container spacing={3}>
      <Grid item xs={12}>
        <MainCarousel />
      </Grid>
      <Grid item xs={12}>
        <WelcomeSectionTabs />
      </Grid>
      <Grid item xs={12}>
        <ExploreThisWeeksSpecial />
      </Grid>
      <Grid item xs={12}>
        <HomepageCardsList
          sectionType="latestFromWoolworth"
          sectionHeading="Check out the latest from Woolworths"
        />
      </Grid>
      <Grid item xs={12} className={classes.homecookingSection}>
        <HomepageCardsList
          sectionType="cooking"
          sectionStyle={{ background: "#fff" }}
          contentStyle={{ alignItems: "center" }}
          sectionHeading="Home cooking"
          introPara1="Discover +6,000 delicious recipes and fresh ideas for the whole family. From breakfast to dinner, snacks and dessert, we have every meal covered."
          introPara2="See this week's featured recipes:"
          buttonStyle={{ margin: "0 auto", maxWidth: "140px" }}
        />
      </Grid>
      <Grid item xs={12} className={classes.homecookingSection}>
        <HomepageCardsList
          sectionType="shopOnline"
          sectionHeading="Shop Online"
          sectionStyle={{ background: "#fff" }}
        />
      </Grid>
      <Grid item xs={12}>
        <HomepageCardsList
          sectionType="moreFromWoolworth"
          sectionHeading="More from woolworths"
          buttonStyle={{ maxWidth: "200px", overflow: "hidden" }}
        />
      </Grid>
      <Grid item xs={12} className={classes.footer}>
        <div>Woolworths clone - showcase project only</div>
      </Grid>
    </Grid>
  );
};

export default Home;
