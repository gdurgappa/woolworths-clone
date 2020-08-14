import React, { useState, useEffect } from "react";
import { allCategories } from "../../constants/allCategories";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";
import CategoriesDialog from "./CategoriesDialog";

const useStyles = makeStyles((theme) => ({
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
}));
const Categories = (props: {}) => {
  const classes = useStyles();
  const [categories, setCategories] = useState<any>([]);
  const [activeCategory, setActiveCategory] = useState<any>();
  const [activeSubCategory, setActiveSubCategory] = useState<any>();
  const [open, setOpen] = React.useState(false);

  const handleCategoryClick = (cat: any) => {
    setActiveCategory(cat);
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  const dispatch = useDispatch();
  const categoriesList: any = useSelector<any>(
    (state) => state.category.allCategories
  );

  useEffect(() => {
    dispatch({ type: "CATEGORIES_REQUESTED" });
    setCategories(allCategories);
  }, []);

  return (
    <div className={classes.root}>
      {categoriesList.map((cat: any) => (
        <div
          className={classes.category}
          key={cat.NodeId}
          onClick={() => handleCategoryClick(cat)}
        >
          {cat.Description}
        </div>
      ))}
      <hr />
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
