import { makeStyles } from "@material-ui/core/styles";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { NavLink as Link } from "react-router-dom";
import { RootState } from "../../../store/store";
import {
  CategoryMappedId,
  Category,
  LeftPanelCategoryType,
} from "../../../types/category";
import { UrlParams } from "../../../types/commonTypes";
import { getUrlParamsToFetchProducts } from "../../../utils/commonHelper";
// todo: gives error http://localhost:8080/shop/browse/meat-seafood-deli/fruit/plums-apricots
const useStyles = makeStyles(() => ({
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
    minHeight: "100%",
    backgroundColor: "#fff",
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

//todo: error
// interface ProductListLeftPanelProps extends UrlParams{}

const ProductListLeftPanel = ({
  category,
  subCategorySelected,
  subCategory,
}: UrlParams) => {
  const [leftPanelItems, setLeftPanelItems] = useState<LeftPanelCategoryType[]>(
    []
  );
  const categoriesList = useSelector(
    (state: RootState) => state.category.allCategories
  );
  const categoryMappedId = useSelector<RootState, CategoryMappedId>(
    (state) => state.category.categoryMappedId
  );
  useEffect(() => {
    if (categoriesList.length) {
      let identifiedCategory: Category | undefined;
      if (category) {
        identifiedCategory = categoriesList.find(
          (cat) => cat.UrlFriendlyName === category
        );

        if (subCategory && identifiedCategory) {
          identifiedCategory = identifiedCategory.Children.find(
            (cat) => cat.UrlFriendlyName === subCategory
          );
        }
      }

      if (identifiedCategory) {
        setLeftPanelItems(
          identifiedCategory.Children.map(
            ({ Description, UrlFriendlyName, NodeId }) => ({
              Description,
              UrlFriendlyName,
              NodeId,
            })
          )
        );
      }
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
                  subCategorySelected: "",
                  subCategory: "",
                },
                categoryMappedId
              ).url
            }
          >
            {subCategory && <ChevronLeftIcon />}
            <h3 className={classes.leftPanelHeadingText}>
              {Object.keys(categoryMappedId).length &&
                category &&
                ((subCategory && categoryMappedId[subCategory].Description) ||
                  categoryMappedId[category].Description)}
            </h3>
          </Link>
        </div>
      )}
      <ul className={classes.leftPanelUl}>
        {Object.keys(categoryMappedId).length && (
          <li className={classes.leftPanelLi}>
            <Link
              activeClassName="activeCategoryLink"
              exact
              to={
                getUrlParamsToFetchProducts(
                  {
                    category,
                    subCategory,
                  },
                  categoryMappedId
                ).url
              }
              className={classes.leftPanelLink}
            >
              Show All <ChevronRightIcon />
            </Link>
          </li>
        )}
        {leftPanelItems.map((item: LeftPanelCategoryType) => {
          return (
            <li key={item.NodeId} className={classes.leftPanelLi}>
              <Link
                activeClassName="activeCategoryLink"
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
