import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Dialog from "@material-ui/core/Dialog";
import makeStyles from "@material-ui/core/styles/makeStyles";
import { styled } from "@material-ui/core/styles";
import CloseIcon from "@material-ui/icons/Close";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";

const useStyles = makeStyles((theme) => ({
  root: {
    position: "relative",
  },
  paper: {
    position: "absolute",
    width: "100%",
    left: "0",
    top: "155px",
    background: "#fff",
    maxHeight: "calc(95vh - 150px)",
    margin: 0,
    maxWidth: "100%",
  },
  dialogHeader: {
    height: "110px",
    color: "#3a474e",
    borderBottom: "dotted",
    padding: "0 70px",
    display: "flex",
    WebkitBoxPack: "justify",
    justifyContent: "space-between",
    WebkitBoxAlign: "center",
    alignItems: "center",
  },
  dialogLeftNavsContainer: {
    display: "flex",
  },
  dialogContentNavLink: {
    color: "#178841",
    textDecoration: "none",
  },
  dialoagContentBanner: {
    padding: "40px 10px",
    display: "flex",
    width: "100%",
  },
  dialoagContentNavs: {
    minWidth: 200,
    margin: 40,
  },
  dialogLeftNav: {
    padding: "40px 0 40px 70px",
    background: "#eee",
    WebkitBoxFlex: 0,
    // flex: "0 0 290px",
  },
  categoryNavUl: {
    minWidth: "200px",
  },
  categoryItemActive: {
    backgroundColor: "#3a474e",
    color: "#fff",
  },
  categoryItem: {
    backgroundColor: "#fff",
    color: "#178841",
    position: "relative",
    display: "flex",
    WebkitBoxAlign: "center",
    alignItems: "center",
    minHeight: "44px",
    width: "calc(100% - 20px)",
    marginBottom: "1px",
    padding: "5px 20px",
    cursor: "pointer",
  },
  subCategoryContainer: {},
  subCategoryItem: {},
}));
const CategoriesDialog = ({
  activeCategory,
  activeSubCategory,
  setActiveSubCategory,
  handleClose,
  open,
}: any) => {
  const classes = useStyles();

  useEffect(() => {
    //https://www.woolworths.com.au/apis/ui/banner?CategoryId=1_ACA2FC2&IsSpecialRoot=false
  }, []);

  return (
    <Dialog
      onClose={handleClose}
      aria-labelledby="customized-dialog-title"
      open={open}
      classes={{ root: classes.root, paper: classes.paper }}
    >
      <div className={classes.dialogHeader}>
        <h2>{activeCategory.Description}</h2>
        <div>
          Close <CloseIcon />
        </div>
      </div>
      <div className={classes.dialogLeftNavsContainer}>
        <nav className={classes.dialogLeftNav}>
          <ul className={classes.categoryNavUl}>
            {activeCategory.Children.map((cat: any) => {
              return (
                <li
                  className={classes.categoryItem}
                  key={cat.NodeId}
                  onClick={() => setActiveSubCategory(cat)}
                >
                  <span> {cat.Description}</span>
                  <ChevronRightIcon />
                </li>
              );
            })}
          </ul>
        </nav>
        <div className={classes.dialoagContentNavs}>
          <nav>
            <ul>
              {activeSubCategory && (
                <li>
                  <Link
                    className={classes.dialogContentNavLink}
                    to={`/shop/browse/${activeCategory.UrlFriendlyName}/${activeSubCategory.UrlFriendlyName}`}
                  >
                    <span>{"Show All " + activeSubCategory.Description}</span>
                    <ChevronRightIcon />
                  </Link>
                </li>
              )}
              <hr />
              {activeSubCategory &&
                activeSubCategory.Children.map((cat: any) => {
                  return (
                    <li onClick={() => handleClose(false)}>
                      <Link
                        className={classes.dialogContentNavLink}
                        key={activeCategory.NodeId}
                        to={`/shop/browse/${activeCategory.UrlFriendlyName}/${activeSubCategory.UrlFriendlyName}/${cat.UrlFriendlyName}`}
                        // to={`/shop/browse/${activeCategory.UrlFriendlyName}/${activeSubCategory.UrlFriendlyName}/${cat.UrlFriendlyName}/${cat.NodeId}`}
                      >
                        <span> {cat.Description}</span>
                        <ChevronRightIcon />
                      </Link>
                    </li>
                  );
                })}
            </ul>
          </nav>
        </div>
        <div className={classes.dialoagContentBanner}>banner</div>
      </div>
    </Dialog>
  );
};

export default CategoriesDialog;
