import React, { useState, useEffect } from "react";
import SearchInput from "../../components/Header/SearchProducts/SearchInput";
import * as api from "../../api/request";
import { GET_SUGGESTIONS_URL } from "../../api/urls";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router";
import { makeStyles } from "@material-ui/core/styles";
import CloseIcon from "@material-ui/icons/Close";
import SearchIcon from "@material-ui/icons/Search";

const useStyles = makeStyles((theme) => ({
  container: {
    height: "40px",
    display: "flex",
    background: "#fff",
    borderRadius: "20px",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    position: "relative",
  },
  searchRoot: {},
  iconsContainer: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    position: "absolute",
    right: 0,
  },
  closeIcon: {
    height: "25px",
    width: "25px",
    border: "none",
    background: "0 0",
    color: "#616c71",
    cursor: "pointer",
    padding: "10px",
  },
  searchIcon: {
    color: "#fff",
    width: "25px",
    height: "25px",
    margin: "0px 3px 0px 0px",
    borderRadius: "50%",
    backgroundColor: "#178841",
    padding: "5px",
  },
}));
const SearchProducts = (props: {}) => {
  const classes = useStyles();
  const [suggestions, setSuggestions] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const history = useHistory();
  const getSuggestions = async (searchKey: any) => {
    const apiSuggestions = await api.get(
      GET_SUGGESTIONS_URL + `?Key=${searchKey}`
    );
    setSuggestions(
      apiSuggestions.SearchSuggestion.map((s: any) => ({ title: s, value: s }))
    );
  };

  const onOptionSelect = (event: any, value: any) => {
    history.push({
      pathname: "/shop/search/products",
      search: "?searchTerm=" + value.title,
    });
  };

  return (
    <div className={classes.container}>
      <SearchInput
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        suggestions={suggestions}
        getSuggestions={getSuggestions}
        onOptionSelect={onOptionSelect}
      />
      <div className={classes.iconsContainer}>
        <CloseIcon className={classes.closeIcon} />
        <SearchIcon className={classes.searchIcon} />
      </div>
    </div>
  );
};

export default SearchProducts;
