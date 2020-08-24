import { makeStyles } from "@material-ui/core/styles";
import React from "react";
import {
  cooking,
  latestFromWoolworth,
  moreFromWoolworth,
  shopOnline,
} from "../../constants/firestoreData/homePageData";
import ButtonWithIcon from "../Common/ButtonWithIcon";
import AnimatedCard from "./AnimatedCard";

const useStyles = makeStyles(() => ({
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
  recipieIntro: {
    width: "100%",
    maxWidth: "600px",
    position: "relative",
    margin: "auto",
    marginBottom: "35px",
    textAlign: "center",
    "& p": {
      fontFamily: "'Fresh Sans Regular', Helvetica, Arial, sans-serif",
      fontSize: "16px",
      lineHeight: "24px",
      marginBottom: "20px",
    },
  },
}));
interface AnimatedCardsListPropType {
  sectionType: string;
  sectionHeading: string;
  sectionStyle?: string; //todo: object of style
  contentStyle?: string;
  buttonStyle?: string;
  introPara1?: string;
  introPara2?: string;
}
const AnimatedCardsList = ({
  sectionType,
  sectionHeading,
  sectionStyle,
  contentStyle,
  buttonStyle,
  introPara1,
  introPara2,
}: AnimatedCardsListPropType) => {
  const classes = useStyles();

  const dataMapping: any = {
    shopOnline,
    moreFromWoolworth,
    latestFromWoolworth,
    cooking,
  };
  const animatedCardDetails = dataMapping[sectionType];
  return (
    <section style={sectionStyle} className={classes.sectionContainer}>
      <div style={contentStyle} className={classes.contentContainer}>
        <h1 className={classes.heading}>{sectionHeading}</h1>
        {sectionType === "cooking" && (
          <div className={classes.recipieIntro}>
            <p>{introPara1}</p>
            <p>{introPara2}</p>
          </div>
        )}
        <div className={classes.cardsContainer}>
          {animatedCardDetails.map((card, index) => {
            return <AnimatedCard key={index} {...card} />;
          })}
        </div>
      </div>
      {sectionType === "cooking" && (
        <ButtonWithIcon
          rootDivOverrideStyle={buttonStyle}
          title="Explore all recipes"
        />
      )}
    </section>
  );
};

export default AnimatedCardsList;
