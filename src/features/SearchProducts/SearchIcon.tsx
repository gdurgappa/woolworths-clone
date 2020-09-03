import { makeStyles } from "@material-ui/core/styles";
import SearchIconButton from "@material-ui/icons/Search";
import React, { useState } from "react";
import SearchProducts from "./SearchProducts";

const useStyles = makeStyles(() => ({
  root: {
    height: "30px",
    width: "30px",
    margin: "0px 3px 0px 0px",
    borderRadius: "50%",
    cursor: "pointer",
    padding: "5px",
    backgroundColor: (props: { showSearchInput: boolean }) =>
      props.showSearchInput ? "#178841" : "#fff",
    color: (props: { showSearchInput: boolean }) =>
      props.showSearchInput ? "#fff" : "#178841",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  searchProductsContainer: {
    position: "absolute",
    top: "60px",
    left: 0,
    right: 0,
  },
}));

const SearchIcon = () => {
  const [showSearchInput, setShowSearchInput] = useState<boolean>(false);
  const classes = useStyles({ showSearchInput });
  return (
    <div
      className={classes.root}
      onClick={() => setShowSearchInput((prev) => !prev)}
    >
      <SearchIconButton />
      {showSearchInput && (
        <div className={classes.searchProductsContainer}>
          <SearchProducts />
        </div>
      )}
    </div>
  );
};

export default SearchIcon;
