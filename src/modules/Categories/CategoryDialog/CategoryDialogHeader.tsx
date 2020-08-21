import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import CloseIcon from "@material-ui/icons/Close";
const useStyles = makeStyles((theme) => ({
  dialogHeaderContainer: {
    minHeight: "110px",
    color: "#3a474e",
    borderBottom: "dotted",
    padding: "0 70px",
    display: "flex",
    WebkitBoxPack: "justify",
    justifyContent: "space-between",
    WebkitBoxAlign: "center",
    alignItems: "center",
  },
  dialogHeaderH2: {
    margin: 0,
    display: "flex",
    WebkitBoxAlign: "center",
    alignItems: "center",

    fontSize: "28px",
    lineHeight: "32px",
    "&>div": {
      width: "50px",
      height: "50px",
      border: "3px solid #3a474e",
      borderRadius: "50%",
      padding: "10px",
      display: "flex",
      WebkitBoxAlign: "center",
      alignItems: "center",
      WebkitBoxPack: "center",
      justifyContent: "center",
      marginRight: "20px",
    },
  },
  "& img": {
    width: "100%",
    height: "100%",
  },
  titleAndBreadcrumbContainer: {
    display: "flex",
    WebkitBoxAlign: "center",
    alignItems: "center",
    justifyContent: "center",
    "& nav": {
      display: "flex",
      WebkitBoxPack: "end",
      justifyContent: "flex-end",
      paddingLeft: "25px",
    },
  },
  breadCrumb: {
    display: "inline-block",
    "& a": {
      color: "#178841",
      textDecoration: "none",
      fontSize: "18px",
      padding: "0 0 0 20px",
      display: "flex",
      verticalAlign: "center",
      alignItems: "center",
      "&:hover": {
        textDecoration: "underline",
      },
    },
  },
  closeButton: {
    display: "flex",
    WebkitBoxAlign: "center",
    alignItems: "center",
    justifyContent: "center",
    cursor: "pointer",
    fontSize: "16px",
    color: "#3a474e",
    paddingLeft: "10px",
    background: "transparent",
    "& svg": {
      fontSize: "20px",
    },
  },
}));
const CategoryDialogHeader = ({
  activeCategory,
  categoryIcon,
  handleClose,
}: any) => {
  const classes = useStyles();
  return (
    <div className={classes.dialogHeaderContainer}>
      <div className={classes.titleAndBreadcrumbContainer}>
        <h2 className={classes.dialogHeaderH2}>
          {categoryIcon && (
            <div>
              <img src={categoryIcon} alt={activeCategory.Description} />
            </div>
          )}
          {activeCategory.Description}
        </h2>
        <nav>
          <ul>
            {activeCategory.Children.filter(
              (cat: any) => cat.DisplayOrder === -1
            ).map((cat: any) => {
              return (
                <li
                  className={classes.breadCrumb}
                  key={cat.NodeId}
                  onClick={() => handleClose(false)}
                >
                  <Link
                    to={`/shop/browse/${activeCategory.UrlFriendlyName}/${cat.UrlFriendlyName}`}
                  >
                    <span>{cat.Description}</span>
                    <ChevronRightIcon />
                  </Link>
                </li>
              );
            })}
            <li
              className={classes.breadCrumb}
              onClick={() => handleClose(false)}
            >
              <Link to={`/shop/browse/${activeCategory.UrlFriendlyName}`}>
                <span>{"Show All " + activeCategory.Description}</span>
                <ChevronRightIcon />
              </Link>
            </li>
          </ul>
        </nav>
      </div>
      <button
        className={classes.closeButton}
        onClick={() => handleClose(false)}
      >
        Close <CloseIcon />
      </button>
    </div>
  );
};

export default CategoryDialogHeader;
