import { makeStyles } from "@material-ui/core/styles";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import CategoriesDialog from "./CategoryDialog/CategoriesDialog";
import { Category, CategoryReducerType } from "../../types/category";
import { RootState } from "../../store/store";
import { useActiveScreensize } from "../../shared/hooks/useActiveScreensize";
import CategoriesRow from "./CategoriesListRow";
import ButtonWithIcon from "../../shared/Common/ButtonWithIcon";
import CategoriesListColumns from "./CategoryDialog/CategoriesListColumns";
import { useParams, matchPath, useLocation } from "react-router";
import { UrlParamsType } from "../Products/ProductList/ProductList";
import { getUrlParamsToFetchProducts } from "../../utils/commonHelper";

const Categories = () => {
  // const [categories, setCategories] = useState<Category[]>([]);
  const [activeCategory, setActiveCategory] = useState<Category>();
  const [activeSubCategory, setActiveSubCategory] = useState<Category>();
  const [open, setOpen] = React.useState<boolean>(false);
  const [browseCategoryButtonTitle, setBrowseCategoryButtonTitle] = useState<
    string | undefined
  >("");
  // const [open, setopen] = useState(initialState)
  const screenSize = useActiveScreensize();

  const handleCategoryClick = (cat: Category) => {
    setActiveCategory(cat);
    setActiveSubCategory(undefined);
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  const dispatch = useDispatch();
  // todo: check this
  const categoriesList: Category[] = useSelector(
    (state: RootState) => state.category.allCategories
  );

  const { categoryMappedId }: CategoryReducerType = useSelector<
    RootState,
    CategoryReducerType
  >((state) => state.category);
  const location = useLocation();

  useEffect(() => {
    dispatch({ type: "CATEGORIES_REQUESTED" });
    // setCategories(allCategories);
  }, []);

  useEffect(() => {
    const match = matchPath(location.pathname, {
      path: "/shop/browse/:category/:subCategory?/:subCategorySelected?",
      exact: true,
      strict: false,
    });
    if (
      Object.keys(categoryMappedId).length &&
      match &&
      match.params.category
    ) {
      const title = getUrlParamsToFetchProducts(match.params, categoryMappedId)
        .formatObject;

      if (title) {
        setBrowseCategoryButtonTitle(JSON.parse(title as string).name);
      } else {
        setBrowseCategoryButtonTitle("");
      }
    } else {
      setBrowseCategoryButtonTitle("");
    }
  }, [location, categoryMappedId]);

  return (
    <>
      {screenSize === "lg" && (
        <CategoriesRow
          {...{
            categoriesList,
            activeCategory,
            activeSubCategory,
            setActiveSubCategory,
            open,
            handleCategoryClick,
            handleClose,
          }}
        />
      )}
      {screenSize === "sm" && (
        <ButtonWithIcon
          title={
            browseCategoryButtonTitle
              ? `Browsing ${browseCategoryButtonTitle}`
              : "Browse Groceries"
          }
          cheveronType="down"
          onClickCallback={() => setOpen((prev) => !prev)}
        />
      )}
      {screenSize === "sm" && (
        <CategoriesListColumns
          {...{
            categoriesList,
            activeCategory,
            activeSubCategory,
            setActiveSubCategory,
            setActiveCategory,
            open,
            handleCategoryClick,
            handleClose,
          }}
        />
      )}
    </>
  );
};

export default Categories;

// const variables = {
//   "-sliderHeightXxs": "350px",
//   "-sliderHeightXs": "350px",
//   "-sliderHeightSm": "350px",
//   "-sliderHeightMd": "350px",
//   "-sliderHeightLg": "350px",
//   "-sliderSlideDefaultBg": "#f5f5f5",
//   "-sliderIndicatorsColor": "#126c34",
//   "-lightGreen": "#a5c84d",
//   "-midGreen": "#178841",
//   "-darkGreen": "#126c34",
//   "-midGreenDarker": "#126c34",
//   "-darkerGreen": "#0d3e23",
//   "-charcoalGray": "#3a474e",
//   "-arrowColor": "#178841",
//   "-sectionBgLight": "#f5f5f5",
//   "-sectionBgDark": "#EEEEEE",
//   "-sectionWelcomeLg": "32px",
//   "-sectionPaddingLg": "70px",
//   "-sectionPaddingMd": "35px",
//   "-sectionPaddingSm": "15px",
//   "-infoBlue": "#0074BC",
//   "-warningYellow": "#fffbe5",
//   "-fontSizeSm": "18px",
//   "-fontSizeMd": "22px",
//   "-fontSizeLg": "24px",
//   "-contentMaxWidth": "1200px",
// };
