import { makeStyles } from "@material-ui/core/styles";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import React from "react";
import { Link } from "react-router-dom";
import { ThumbnailsImage } from "./CategoriesDialog";
const useStyles = makeStyles(() => ({
  initialContentContainer: {
    alignItems: "start",
    display: "flex",
    margin: "40px",
  },
  shoppingCartContainer: {
    textAlign: "center",
    fontSize: "14px",
    maxWidth: "200px",
    marginRight: "50px",
    "& svg": {
      color: "#eee",
      width: "100%",
      height: "100%",
    },
  },
  bannerThumbnailContainer: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    "& a": {
      margin: "0px 20px",
    },
  },
}));
const CategoryDialogInitialContent = ({
  categoryBannerThumbnails,
}: {
  categoryBannerThumbnails: ThumbnailsImage[];
}) => {
  const classes = useStyles();
  return (
    <div className={classes.initialContentContainer}>
      <div className={classes.shoppingCartContainer}>
        <ShoppingCartIcon />
        <span>Select from the categories on the left.</span>
      </div>
      <div className={classes.bannerThumbnailContainer}>
        {categoryBannerThumbnails.map((ban: ThumbnailsImage, index: number) => {
          return (
            <Link key={index} to={"#"}>
              <img src={ban.Image} />
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default CategoryDialogInitialContent;
