import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import { makeStyles } from "@material-ui/core/styles";
import React from "react";
import { Link } from "react-router-dom";
import ButtonWithIcon from "../../shared/Common/ButtonWithIcon";
import { useActiveScreensize } from "../../shared/hooks/useActiveScreensize";
//todo remove all Webkit stuff
const useStyles = makeStyles((theme) => ({
  cardRoot: {
    margin: "auto 4px",
    borderRadius: "6px",
    padding: "15px 15px 20px 15px",
    textAlign: "center",
    WebkitBoxShadow: "0px 4px 8px 0px rgba(58, 71, 78, 0.1)",
    boxShadow: "0px 4px 8px 0px rgba(58, 71, 78, 0.1)",
    WebkitTransition: "all .75s ease-out",
    // transition: "all .75s ease-out",
    display: "flex",
    flexDirection: "column",
    // height: "430px",
    width: "32%",
    minHeight: "220px",
    background: (props: { image: string }) =>
      props ? `url(${props.image}) no-repeat` : "",
    backgroundSize: "cover !important",
    backgroundPosition: "center",
    position: "relative",
    transition: "all .35s ease-out",
    [theme.breakpoints.up("lg")]: {
      "&:hover": {
        "&>div": {
          transform: "translateY(60px)",
        },
        "& #actionButton": {
          opacity: 1,
        },
        "& #description": {
          opacity: 1,
        },
      },
    },
    [theme.breakpoints.down("xs")]: {
      width: "100%",
      margin: "10px 0px",
    },
  },
  cardContainer: {},
  cardContent: {
    position: "absolute",
    display: "flex",
    alignItems: "start",
    flexDirection: "column",
    borderRadius: "4px",
    width: "100%",
    left: 0,
    right: 0,
    bottom: 0,
    padding: "0px 25px",
    transition: "all .35s ease-out",
    height: "100%",
    transform: "translateY(185px)",
    [theme.breakpoints.down("xs")]: {
      transform: "translateY(110px)",
    },
    cursor: "pointer",
    background:
      "linear-gradient(to bottom, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.5) 16%, rgba(0, 0, 0, 0.51) 17%, rgba(0, 0, 0, 0.66) 37%, rgba(0, 0, 0, 0.7) 43%)",
    "& p": {
      marginBottom: "15px",
      fontFamily: "Helvetica",
      color: "#fff",
      textAlign: "left",
      fontSize: "14px",
      opacity: 0,
    },
  },
  title: {
    marginTop: "16px",
    fontSize: "20px",
    marginBottom: "16px",
    position: "relative",
    maxWidth: "320px",
    color: "#fff",
    textDecoration: "none",
    textAlign: "left",
  },

  cardActionButtonsContainer: {
    display: "flex",
    alignItems: "center",
    // margin: "10px 20px",
    textAlign: "center",
    flexDirection: "column",
    padding: 0,
  },
}));

export interface CardProps {
  title: string;
  buttonText?: string;
  description?: string;
  link?: string;
  headerImg?: string;
  image?: string;
  headerText?: string;
  headerType?: string;
  new?: boolean;
}
//todo changename to animated card
const HomepageCard = ({
  description,
  image = "",
  title,
  buttonText = "",
}: CardProps) => {
  const classes = useStyles({ image });
  const screenSize = useActiveScreensize();
  return (
    <Card className={classes.cardRoot}>
      <div className={classes.cardContent}>
        <Link className={classes.title} to={"#"}>
          <h4>{title}</h4>
        </Link>
        {description && <p id="description">{description}</p>}
        <CardActions className={classes.cardActionButtonsContainer}>
          <ButtonWithIcon
            animation={screenSize === "lg" ? true : false}
            title={buttonText}
          />
        </CardActions>
      </div>
    </Card>
  );
};

export default HomepageCard;
