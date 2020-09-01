import { makeStyles } from "@material-ui/core/styles";
import Rating from "@material-ui/lab/Rating";
import React from "react";
import { RatingType } from "../../../types/product";
const useStyles = makeStyles({
  ratingContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "start",
    justifyContent: "center",
    maxWidth: "340px",
    width: "100%",
  },
  ratingStarContainer: {
    display: "flex",
  },
  averageRating: {
    color: "#39464e",
    fontSize: "24px",
    fontWeight: 500,
    height: "34px",
    lineHeight: "34px",
    width: "35px",
  },
  totalRating: {
    display: "inline",
    background: 0,
    border: "none",
    fontSize: "16px",
    cursor: "pointer",
    padding: 0,
    color: "#178841",
    textDecoration: "none",
    "&:hover": {
      textDecoration: "underline",
    },
  },
});
const RatingSummary = ({ rating }: { rating: RatingType }) => {
  const classes = useStyles();
  return rating ? (
    <div className={classes.ratingContainer}>
      <div className={classes.ratingStarContainer}>
        <span className={classes.averageRating}>
          {rating.Average.toFixed(1)}
        </span>
        <Rating
          precision={0.5}
          name="simple-controlled"
          value={rating.Average}
        />
      </div>
      <div>
        <button className={classes.totalRating}>
          {rating.RatingCount} Ratings
        </button>
      </div>
    </div>
  ) : null;
};

export default RatingSummary;
