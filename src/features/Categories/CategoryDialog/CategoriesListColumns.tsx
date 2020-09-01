import Dialog from "@material-ui/core/Dialog";
import makeStyles from "@material-ui/core/styles/makeStyles";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import React from "react";
import { Link } from "react-router-dom";
import Cheveron from "../../../shared/Common/Cheveron";
import { Category } from "../../../types/category";

const useStyles = makeStyles(() => ({
  root: {
    position: "relative",
  },
  paper: {
    position: "absolute",
    width: "100%",
    left: "0",
    top: "120px",
    background: "#fff",
    color: "#178841",
    maxHeight: "calc(95vh - 150px)",
    margin: 0,
    maxWidth: "100%",
  },
  dialogLeftNavsContainer: {
    display: "flex",
  },
  categorySubCategoryContainer: {
    display: "flex",
    flexDirection: "column",
    width: "100%",
  },
  dialogContentNavLink: {
    textDecoration: "none",
    display: "flex",
    alignItems: "center",
    width: "100%",
    minHeight: "44px",
  },
  dialoagContentNavs: {
    // minWidth: 200,
    // margin: 40,
  },
  dialogLeftNav: {
    width: "100%",
  },
  categoryNavUl: {
    minWidth: "200px",
  },
  categoryItemActive: {
    backgroundColor: "#3a474e",
    color: "#fff",
  },
  categoryItem: {
    position: "relative",
    display: "flex",
    alignItems: "center",
    minHeight: "44px",
    marginBottom: "1px",
    cursor: "pointer",
    borderBottom: "1px solid #dedfdc;",
    "&:hover": {
      backgroundColor: "#dedfdc",
    },
    "& span": {
      padding: "5px 20px",
    },
    "& a": {
      textDecoration: "none",
      color: "inherit",
    },
    "& svg": {
      position: "absolute",
      right: 10,
      fontSize: "25px",
    },
  },
  activeSubCategoryLink: {
    backgroundColor: "#3a474e",
    color: "#fff",
    width: "100%",
  },
  //todo: repeated style
  specialCategory: {
    color: "#3a474e",
    backgroundColor: "#ffda00",
    "&:hover": {
      backgroundColor: "#f7d300",
    },
  },
  categoryDescription: {
    color: "black",
    borderBottom: "3px dotted #dedfdc",
    borderTop: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "start",
    height: "44px",
    cursor: "pointer",
    "& span": { padding: 0 },
    "& svg": {
      position: "relative",
      right: "0",
      fontSize: "30px",
      color: "#3a474e",
      paddingLeft: "5px",
    },
  },
}));

interface CategoriesDialogProps {
  categoriesList: Category[];
  activeCategory: Category | undefined;
  activeSubCategory?: Category | undefined;
  setActiveSubCategory: (arg: Category | undefined) => void;
  handleClose: () => void;
  setActiveCategory: (arg: Category | undefined) => void;
  open: boolean;
}

const CategoriesListColumns = ({
  categoriesList,
  activeCategory,
  activeSubCategory,
  setActiveCategory,
  setActiveSubCategory,
  handleClose,
  open,
}: CategoriesDialogProps) => {
  const classes = useStyles();

  return (
    <Dialog
      onClose={() => {
        handleClose();
        setActiveCategory(undefined);
      }}
      aria-labelledby="customized-dialog-title"
      open={open}
      classes={{ root: classes.root, paper: classes.paper }}
    >
      <div className={classes.dialogLeftNavsContainer}>
        {!activeCategory && (
          <nav className={classes.dialogLeftNav}>
            <ul className={classes.categoryNavUl}>
              {categoriesList.map((cat: Category) => {
                return (
                  <li
                    key={cat.NodeId}
                    className={[
                      classes.categoryItem,
                      cat.Description === "Specials" && classes.specialCategory,
                    ].join(" ")}
                    onClick={() => setActiveCategory(cat)}
                  >
                    <span> {cat.Description}</span>
                    <ChevronRightIcon />
                  </li>
                );
              })}
            </ul>
          </nav>
        )}
        {activeCategory && !activeSubCategory && (
          <div className={classes.categorySubCategoryContainer}>
            <div
              className={[
                classes.categoryDescription,
                classes.categoryItem,
              ].join(" ")}
              onClick={() => setActiveCategory(undefined)}
            >
              <Cheveron cheveronType="left" />
              <span>{activeCategory.Description}</span>
            </div>
            <nav className={classes.dialogLeftNav}>
              <ul className={classes.categoryNavUl}>
                {activeCategory.Children.filter(
                  (cat: Category) => cat.DisplayOrder === -1
                ).map((cat: Category) => {
                  return (
                    <li
                      className={classes.categoryItem}
                      key={cat.NodeId}
                      onClick={handleClose}
                    >
                      <Link
                        className={classes.dialogContentNavLink}
                        to={`/shop/browse/${activeCategory.UrlFriendlyName}/${cat.UrlFriendlyName}`}
                      >
                        <ChevronRightIcon />
                        <span>{cat.Description}</span>
                      </Link>
                    </li>
                  );
                })}
                <li className={classes.categoryItem} onClick={handleClose}>
                  <Link
                    className={classes.dialogContentNavLink}
                    to={`/shop/browse/${activeCategory.UrlFriendlyName}`}
                  >
                    <span>{"Show All " + activeCategory.Description}</span>
                    <ChevronRightIcon />
                  </Link>
                </li>
                {activeCategory.Children.filter(
                  (cat: Category) => cat.DisplayOrder !== -1
                ).map((cat: Category) => {
                  return (
                    <li
                      key={cat.NodeId}
                      className={classes.categoryItem}
                      onClick={() => setActiveSubCategory(cat)}
                    >
                      <span> {cat.Description}</span>
                      <ChevronRightIcon />
                    </li>
                  );
                })}
              </ul>
            </nav>
          </div>
        )}

        {activeSubCategory && activeCategory && (
          <div className={classes.categorySubCategoryContainer}>
            <div
              className={[
                classes.categoryDescription,
                classes.categoryItem,
              ].join(" ")}
              onClick={() => setActiveSubCategory(undefined)}
            >
              <Cheveron cheveronType="left" />
              <span>{activeSubCategory.Description}</span>
            </div>
            <nav className={classes.dialogLeftNav}>
              <ul className={classes.categoryNavUl}>
                <li className={classes.categoryItem} onClick={handleClose}>
                  <Link
                    className={classes.dialogContentNavLink}
                    to={`/shop/browse/${activeCategory.UrlFriendlyName}/${activeSubCategory.UrlFriendlyName}`}
                  >
                    <span>{"Show All " + activeSubCategory.Description}</span>
                    <ChevronRightIcon />
                  </Link>
                </li>
                {activeSubCategory.Children.filter(
                  (cat: Category) => cat.IsBundle
                ).map((cat: Category) => {
                  return (
                    <li
                      className={classes.categoryItem}
                      key={cat.NodeId}
                      onClick={handleClose}
                    >
                      <Link
                        className={classes.dialogContentNavLink}
                        to={`/shop/browse/${activeCategory.UrlFriendlyName}/${activeSubCategory.UrlFriendlyName}/${cat.UrlFriendlyName}`}
                        // to={`/shop/browse/${activeCategory.UrlFriendlyName}/${activeSubCategory.UrlFriendlyName}/${cat.UrlFriendlyName}/${cat.NodeId}`}
                      >
                        <span> {cat.Description}</span>
                        <ChevronRightIcon />
                      </Link>
                    </li>
                  );
                })}
                {activeSubCategory.Children.filter(
                  (cat: Category) => !cat.IsBundle
                ).map((cat: Category) => {
                  return (
                    <li
                      className={classes.categoryItem}
                      key={cat.NodeId}
                      onClick={handleClose}
                    >
                      <Link
                        className={classes.dialogContentNavLink}
                        to={`/shop/browse/${activeCategory.UrlFriendlyName}/${activeSubCategory.UrlFriendlyName}/${cat.UrlFriendlyName}`}
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
        )}
      </div>
    </Dialog>
  );
};

export default CategoriesListColumns;
