import { makeStyles } from "@material-ui/core/styles";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import CategoriesDialog from "./CategoryDialog/CategoriesDialog";
import { Category } from "../../types/category";
import { RootState } from "../../store/store";

const useStyles = makeStyles(() => ({
  root: {
    display: "flex",
    alignItems: "center",
    backgroundColor: "#178841",
    height: "50px",
    width: "100%",
  },
  category: {
    display: "flex",
    alignItems: "center",
    fontSize: "14px",
    color: "#fff",
    height: "50px",
    padding: "0 15px",
    lineHeight: "1.2",
    cursor: "pointer",
    fontWeight: 400,
    "&:hover": {
      backgroundColor: "#126c34",
    },
  },
  specialCategory: {
    color: "#3a474e",
    backgroundColor: "#ffda00",
    "&:hover": {
      backgroundColor: "#f7d300",
    },
  },
}));
const Categories = () => {
  const classes = useStyles();
  // const [categories, setCategories] = useState<Category[]>([]);
  const [activeCategory, setActiveCategory] = useState<Category>();
  const [activeSubCategory, setActiveSubCategory] = useState<Category | null>();
  const [open, setOpen] = React.useState<boolean>(false);

  const handleCategoryClick = (cat: Category) => {
    setActiveCategory(cat);
    setActiveSubCategory(null);
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

  useEffect(() => {
    dispatch({ type: "CATEGORIES_REQUESTED" });
    // setCategories(allCategories);
  }, []);

  return (
    <div className={classes.root}>
      {categoriesList.map((cat: Category) => (
        <div
          key={cat.NodeId}
          className={[
            classes.category,
            cat.Description === "Specials" && classes.specialCategory,
          ].join(" ")}
          onClick={() => handleCategoryClick(cat)}
        >
          {cat.Description}
        </div>
      ))}
      {activeCategory && (
        <CategoriesDialog
          open={open}
          activeCategory={activeCategory}
          activeSubCategory={activeSubCategory}
          setActiveSubCategory={setActiveSubCategory}
          handleClose={handleClose}
        />
      )}
    </div>
  );
};

export default Categories;

const variables = {
  "-sliderHeightXxs": "350px",
  "-sliderHeightXs": "350px",
  "-sliderHeightSm": "350px",
  "-sliderHeightMd": "350px",
  "-sliderHeightLg": "350px",
  "-sliderSlideDefaultBg": "#f5f5f5",
  "-sliderIndicatorsColor": "#126c34",
  "-lightGreen": "#a5c84d",
  "-midGreen": "#178841",
  "-darkGreen": "#126c34",
  "-midGreenDarker": "#126c34",
  "-darkerGreen": "#0d3e23",
  "-charcoalGray": "#3a474e",
  "-arrowColor": "#178841",
  "-sectionBgLight": "#f5f5f5",
  "-sectionBgDark": "#EEEEEE",
  "-sectionWelcomeLg": "32px",
  "-sectionPaddingLg": "70px",
  "-sectionPaddingMd": "35px",
  "-sectionPaddingSm": "15px",
  "-infoBlue": "#0074BC",
  "-warningYellow": "#fffbe5",
  "-fontSizeSm": "18px",
  "-fontSizeMd": "22px",
  "-fontSizeLg": "24px",
  "-contentMaxWidth": "1200px",
};
