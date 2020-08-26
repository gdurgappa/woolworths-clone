import Dialog from "@material-ui/core/Dialog";
import makeStyles from "@material-ui/core/styles/makeStyles";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import * as api from "../../../api/request";
import CategoryDialogHeader from "./CategoryDialogHeader";
import CategoryDialogInitialContent from "./CategoryDialogInitialContent";
import { Category } from "../../../types/category";

const useStyles = makeStyles(() => ({
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

  dialogLeftNavsContainer: {
    display: "flex",
  },
  dialogContentNavLink: {
    color: "#178841",
    textDecoration: "none",
    display: "flex",
    alignItems: "center",
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
    maxWidth: "220px",
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
    cursor: "pointer",
    "& span": {
      padding: "5px 20px",
    },
    "& svg": {
      position: "absolute",
      right: 0,
      fontSize: "25px",
    },
  },
  activeSubCategoryLink: {
    backgroundColor: "#3a474e",
    color: "#fff",
    width: "100%",
  },
  subCategoryContainer: {},
  subCategoryItem: {},
}));

interface CategoryBannerThumbnails {
  BannerResponses: ThumbnailsImage[];
}

export interface ThumbnailsImage {
  Image: string;
}
interface CategoriesDialogProps {
  activeCategory: Category;
  activeSubCategory?: Category;
  setActiveSubCategory: (arg: Category) => void;
  handleClose: () => void;
  open: boolean;
}

const CategoriesDialog = ({
  activeCategory,
  activeSubCategory,
  setActiveSubCategory,
  handleClose,
  open,
}: CategoriesDialogProps) => {
  const classes = useStyles();
  const [categoryIcon, setCategoryIcon] = useState("");
  const [categoryBannerThumbnails, setCategoryBetbannerThumbnails] = useState<
    ThumbnailsImage[]
  >([]);
  useEffect(() => {
    activeCategory &&
      import(
        `../../../assets/images/${activeCategory.UrlFriendlyName}.svg`
      ).then((res) => {
        setCategoryIcon(res.default);
      });
    const url = `https://www.woolworths.com.au/apis/ui/banner?CategoryId=${activeCategory.NodeId}&IsSpecialRoot=false`;
    api.get<CategoryBannerThumbnails>(url).then((res) => {
      setCategoryBetbannerThumbnails(res.BannerResponses);
    });
  }, [activeCategory]);
  return (
    <Dialog
      onClose={handleClose}
      aria-labelledby="customized-dialog-title"
      open={open}
      classes={{ root: classes.root, paper: classes.paper }}
    >
      <CategoryDialogHeader
        activeCategory={activeCategory}
        categoryIcon={categoryIcon}
        handleClose={handleClose}
      />
      <div className={classes.dialogLeftNavsContainer}>
        <nav className={classes.dialogLeftNav}>
          <ul className={classes.categoryNavUl}>
            {activeCategory.Children.filter(
              (cat: Category) => cat.DisplayOrder !== -1
            ).map((cat: Category) => {
              return (
                <li
                  key={cat.NodeId}
                  className={[
                    classes.categoryItem,
                    activeSubCategory &&
                      activeSubCategory.UrlFriendlyName ===
                        cat.UrlFriendlyName &&
                      classes.activeSubCategoryLink,
                  ].join(" ")}
                  onClick={() => setActiveSubCategory(cat)}
                >
                  <span> {cat.Description}</span>
                  <ChevronRightIcon />
                </li>
              );
            })}
          </ul>
        </nav>
        {!activeSubCategory && categoryBannerThumbnails && (
          <CategoryDialogInitialContent
            categoryBannerThumbnails={categoryBannerThumbnails}
          />
        )}
        {activeSubCategory && (
          <div className={classes.dialoagContentNavs}>
            <nav>
              <ul>
                <li onClick={handleClose}>
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
                    <li key={cat.NodeId} onClick={handleClose}>
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
                <hr />
                {activeSubCategory.Children.filter(
                  (cat: Category) => !cat.IsBundle
                ).map((cat: Category) => {
                  return (
                    <li key={cat.NodeId} onClick={handleClose}>
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

export default CategoriesDialog;
