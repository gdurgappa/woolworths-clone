import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";
import Cheveron from "../../components/Common/Cheveron";

const useStyles = makeStyles((theme) => ({
  leftPanelNav: {
    boxShadow: "0 0 5px rgba(0,0,0,.15)",
    height: "100wh",
    backgroundColor: "#fff",
    // fontFamily: "Fresh Sans,Helvetica,Arial,sans-serif",
    width: "220px",
    flex: "0 0 220px",
  },
  leftPanelUl: {},
  leftPanelLi: {
    width: "100%",
    display: "flex",
    alignItems: "center",
  },
  leftPanelLink: {
    color: "#178841",
    display: "flex",
    fontSize: "15px",
    minHeight: "44px",
    textTransform: "capitalize",
    padding: "5px 20px",
    width: "100%",
    alignItems: "center",
    textDecoration: "none",
    backgroundColor: "#fff",
    "&:hover": {
      backgroundColor: "#dedfdc",
    },
  },
  specialLink: {
    backgroundColor: "#ffda00",
  },
  searchTermText: {
    cursor: "default",
    "&:hover": {
      background: 0,
    },
  },
  selected: {
    backgroundColor: "#3a474e",
    color: "#fff",
    "&:hover": {
      background: 0,
    },
  },
}));
//background-color: #3a474e; -- is active color: #fff;
//background-color: #ffda00; color: #3a474e; -- all special
const ProductSearchLeftPanel = ({ productSearchCount, aggregations }: any) => {
  const classes = useStyles();
  const [activeLink, setActiveLink] = useState("All Products");
  return (
    <nav className={classes.leftPanelNav}>
      <ul className={classes.leftPanelUl}>
        <li className={classes.leftPanelLi}>
          <Link
            className={[classes.leftPanelLink, classes.searchTermText].join(
              " "
            )}
            to={"#"}
          >
            <span>Search: search term</span>
            <Cheveron cheveronType="right" />
          </Link>
        </li>
        <li
          className={classes.leftPanelLi}
          onClick={() => setActiveLink("All Products")}
        >
          <Link
            className={[
              classes.leftPanelLink,
              activeLink === "All Products" && classes.selected,
            ].join(" ")}
            to={"#"}
          >
            <span>All Products({productSearchCount.ProductCount})</span>
            <Cheveron cheveronType="right" />
          </Link>
        </li>
        <li
          className={classes.leftPanelLi}
          onClick={() => setActiveLink("All Specials")}
        >
          <Link
            className={[
              classes.leftPanelLink,
              classes.specialLink,
              activeLink === "All Specials" && classes.selected,
            ].join(" ")}
            to={"#"}
          >
            <span>All Specials({productSearchCount.SpecialProductCount})</span>
            <Cheveron cheveronType="right" />
          </Link>
        </li>
        <li
          className={classes.leftPanelLi}
          onClick={() => setActiveLink("All Recipes")}
        >
          <Link
            className={[
              classes.leftPanelLink,
              activeLink === "All Recipes" && classes.selected,
            ].join(" ")}
            to={"#"}
          >
            <span>All Recipies({productSearchCount.RecipeCount})</span>
            <Cheveron cheveronType="right" />
          </Link>
        </li>
        <li
          className={classes.leftPanelLi}
          onClick={() => setActiveLink("Articles")}
        >
          <Link
            className={[
              classes.leftPanelLink,
              activeLink === "Articles" && classes.selected,
            ].join(" ")}
            to={"#"}
          >
            <span>Articles({productSearchCount.ArticleCount})</span>
            <Cheveron cheveronType="right" />
          </Link>
        </li>
        {aggregations.map((aggr: any, index: any) => (
          <li
            className={classes.leftPanelLi}
            onClick={() => setActiveLink(aggr.Name)}
          >
            <Link
              className={[
                classes.leftPanelLink,
                activeLink === aggr.Name && classes.selected,
              ].join(" ")}
              key={index}
              to={"#"}
            >
              <span>
                {aggr.ExtraOutputFields.description} ({aggr.Count})
              </span>

              <Cheveron cheveronType="right" />
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default ProductSearchLeftPanel;
