import { makeStyles } from "@material-ui/core/styles";
import React from "react";
import { Category } from "../../types/category";
import CategoriesDialog from "./CategoryDialog/CategoriesDialog";

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

export interface CategoriesProps {
  categoriesList: Category[];
  handleCategoryClick: (arg: Category) => void;
  activeCategory?: Category;
  activeSubCategory?: Category;
  setActiveSubCategory: (arg: Category) => void;
  handleClose: () => void;
  open: boolean;
}

const CategoriesRow = ({
  categoriesList,
  handleCategoryClick,
  activeCategory,
  activeSubCategory,
  setActiveSubCategory,
  handleClose,
  open,
}: CategoriesProps) => {
  const classes = useStyles();
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

export default CategoriesRow;
