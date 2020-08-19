import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import { getUrlParamsToFetchProducts } from "../../../utils/commonHelper";
// todo: gives error http://localhost:8080/shop/browse/meat-seafood-deli/fruit/plums-apricots
const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  leftPanel: {},
  leftPanelHeadingContainer: {
    display: "flex",
    alignItems: "center",
  },
  leftPanelHeadingLink: {
    display: "flex",
    color: "#3a474e",
    alignItems: "center",
    textDecoration: "none",
    "&:hover": {
      textDecoration: "underline",
    },
  },
  leftPanelHeadingCheveron: {
    textAlign: "center",
    width: "30px",
    height: "30px",
    marginLeft: "10px",
  },
  leftPanelHeadingText: {
    margin: "10px 10px",
    fontSize: "22px",
  },
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
    "&:hover": {
      backgroundColor: "#dedfdc",
    },
  },
}));
const ProductListLeftPanel = ({
  category,
  subCategorySelected,
  subCategory,
}: any) => {
  const [leftPanelItems, setLeftPanelItems] = useState([]);
  const categoriesList: any = useSelector<any>(
    (state) => state.category.allCategories
  );
  const categoryMappedId: any = useSelector<any>(
    (state) => state.category.categoryMappedId
  );
  useEffect(() => {
    if (categoriesList.length) {
      let identifiedCategory: any = { Children: [] };
      if (category) {
        identifiedCategory = categoriesList.find(
          (cat: any) => cat.UrlFriendlyName === category
        );

        if (subCategory) {
          identifiedCategory = identifiedCategory.Children.find(
            (cat: any) => cat.UrlFriendlyName === subCategory
          );
        }
      }

      setLeftPanelItems(
        identifiedCategory.Children.map(
          ({ Description, UrlFriendlyName, NodeId }: any) => ({
            Description,
            UrlFriendlyName,
            NodeId,
          })
        )
      );
    }
  }, [category, subCategorySelected, subCategory, categoriesList]);
  const classes = useStyles();

  return (
    <nav className={classes.leftPanelNav}>
      {leftPanelItems.length && (
        <div className={classes.leftPanelHeadingContainer}>
          <Link
            className={classes.leftPanelHeadingLink}
            to={
              getUrlParamsToFetchProducts(
                {
                  category,
                  subCategorySelected: null,
                  subCategory: null,
                },
                categoryMappedId
              ).url
            }
          >
            {subCategory && <ChevronLeftIcon />}
            <h3 className={classes.leftPanelHeadingText}>
              {Object.keys(categoryMappedId).length &&
                ((subCategory && categoryMappedId[subCategory].Description) ||
                  categoryMappedId[category].Description)}
            </h3>
          </Link>
        </div>
      )}
      <ul className={classes.leftPanelUl}>
        {leftPanelItems.map((item: any) => {
          return (
            <li key={item.NodeId} className={classes.leftPanelLi}>
              <Link
                to={
                  getUrlParamsToFetchProducts(
                    subCategory
                      ? {
                          category,
                          subCategory,
                          subCategorySelected: item.UrlFriendlyName,
                        }
                      : {
                          category,
                          subCategory: item.UrlFriendlyName,
                        },
                    categoryMappedId
                  ).url
                }
                className={classes.leftPanelLink}
              >
                {item.Description} <ChevronRightIcon />
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default ProductListLeftPanel;
