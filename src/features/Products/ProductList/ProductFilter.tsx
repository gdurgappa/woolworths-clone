import { makeStyles } from "@material-ui/core/styles";
import KeyboardArrowDownIcon from "@material-ui/icons/KeyboardArrowDown";
import TuneSharpIcon from "@material-ui/icons/Tune";
import React from "react";
import { Link } from "react-router-dom";
const useStyles = makeStyles(() => ({
  root: {},
  filterSearchContainer: {
    marginBottom: "20px",
    boxShadow: "0 2px 4px 0 rgba(58,71,78,.15)",
    borderRadius: "4px",
    // width: "100%",
    background: "#fff",
    border: "1px solid #fff",
    textAlign: "left",
    padding: "16px",
    margin: "0",
    cursor: "pointer",
    display: "flex",
    alignItems: "center",
    transition: "border .3s",
    "&:hover": {
      border: "1px solid #178841",
      textDecoration: "underline",
    },
  },
  filterIcon: {
    marginRight: "16px",
    backgroundImage: "url(images/daveicons/iconAct-Filters.svg)",
    backgroundSize: "24px",
    width: "24px",
    height: "24px",
  },
  filterSearchText: {
    textDecoration: "none",
    color: "#178841",
  },
  filterCheveronDown: {},
}));
const ProductFilter = () => {
  const classes = useStyles();
  return (
    <div className={classes.filterSearchContainer}>
      <TuneSharpIcon className={classes.filterIcon} />
      <Link to="#" className={classes.filterSearchText}>
        Filter Your search
      </Link>
      <KeyboardArrowDownIcon className={classes.filterCheveronDown} />
    </div>
  );
};

export default ProductFilter;
