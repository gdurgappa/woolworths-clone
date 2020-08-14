import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import { Link } from "react-router-dom";
import { getUrlParamsToFetchProducts } from "../../utils/commonHelper";

const useStyles = makeStyles((theme) => ({
  breadCrumbContainer: {
    alignItems: "center",
    display: "flex",
    height: "64px",
  },
  breadCrumbItemCheveron: {
    margin: "0 8px",
  },
  breadCrumbItemUl: {
    display: "flex",
    marginBottom: 0,
  },
  breadCrumbItemLi: {
    font: "14px Fresh Sans,Helvetica,Arial,sans-serif",
    alignItems: "center",
    display: "flex",
  },
  breadCrumbItemLink: {
    color: "#178841",
  },
}));
const BreadCrumbs = ({ params, categoryMappedId }: any) => {
  const classes = useStyles();
  const { category, subCategory, subCategorySelected } = params;
  return (
    <div className={classes.breadCrumbContainer}>
      {Object.keys(categoryMappedId).length && (
        <ul className={classes.breadCrumbItemUl}>
          <li className={classes.breadCrumbItemLi}>
            <Link className={classes.breadCrumbItemLink} to={"/"}>
              Home
            </Link>
          </li>
          {category && (
            <li className={classes.breadCrumbItemLi}>
              <ChevronRightIcon className={classes.breadCrumbItemCheveron} />
              <Link
                className={classes.breadCrumbItemLink}
                to={
                  getUrlParamsToFetchProducts({ category }, categoryMappedId)
                    .url
                }
              >
                {categoryMappedId[category].Description}
              </Link>
            </li>
          )}
          {subCategory && (
            <li className={classes.breadCrumbItemLi}>
              <ChevronRightIcon className={classes.breadCrumbItemCheveron} />
              <Link
                className={classes.breadCrumbItemLink}
                to={
                  getUrlParamsToFetchProducts(
                    { category, subCategory },
                    categoryMappedId
                  ).url
                }
              >
                {categoryMappedId[subCategory].Description}
              </Link>
            </li>
          )}
          {subCategorySelected && (
            <li className={classes.breadCrumbItemLi}>
              <ChevronRightIcon className={classes.breadCrumbItemCheveron} />
              <span
                className={classes.breadCrumbItemLink}
                style={{ color: "#3a474e" }}
              >
                {categoryMappedId[subCategorySelected].Description}
              </span>
            </li>
          )}
        </ul>
      )}
    </div>
  );
};

export default BreadCrumbs;
