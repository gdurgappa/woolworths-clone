import { makeStyles } from "@material-ui/core/styles";
import SearchIconButton from "@material-ui/icons/Search";
import React, { useState, useEffect } from "react";
import SearchProducts from "./SearchProducts";
import { useRef } from "react";
import useClickOutside from "../../shared/hooks/useClickOutside";

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
  const ref = useRef<any>();
  const isClickedOutside = useClickOutside(ref);
  useEffect(() => {
    if (isClickedOutside) {
      setShowSearchInput(false);
    }
  }, [isClickedOutside]);
  return (
    <div
      className={classes.root}
      // onClick={() => setShowSearchInput((prev) => !prev)}
      ref={ref}
    >
      <SearchIconButton onClick={() => setShowSearchInput((prev) => !prev)} />
      {showSearchInput && (
        <div className={classes.searchProductsContainer}>
          <SearchProducts />
        </div>
      )}
    </div>
  );
};

export default SearchIcon;
