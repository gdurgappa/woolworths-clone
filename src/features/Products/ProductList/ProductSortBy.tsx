import { makeStyles } from "@material-ui/core/styles";
import KeyboardArrowDownIcon from "@material-ui/icons/KeyboardArrowDown";
import React from "react";
import { Link } from "react-router-dom";

const useStyles = makeStyles(() => ({
  root: {},
  sortByContainer: {
    display: "flex",
    MsFlexPack: "justify",
    MsFlexAlign: "center",
    alignItems: "center",
    marginTop: "64px",
    marginBottom: "20px",
  },
  sortByText: {
    fontSize: "16px",
    display: "inline-block",
    paddingRight: "10px",
  },
  sortByTypeLink: {
    fontSize: "17px",
    color: "#178841",
  },
  sortByIconDown: {
    color: "#178841",
  },
}));
const ProductSortBy = () => {
  const classes = useStyles();
  return (
    <div className={classes.sortByContainer}>
      <span className={classes.sortByText}>Sort by</span>
      <Link to="#" className={classes.sortByTypeLink}>
        Relevence
      </Link>
      <KeyboardArrowDownIcon className={classes.sortByIconDown} />
      <span className={classes.sortByIconDown}></span>
    </div>
  );
};

export default ProductSortBy;
