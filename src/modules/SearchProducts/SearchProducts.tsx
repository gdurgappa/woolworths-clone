import { makeStyles } from "@material-ui/core/styles";
import CloseIcon from "@material-ui/icons/Close";
import SearchIcon from "@material-ui/icons/Search";
import React, { useState } from "react";
import { useHistory } from "react-router";
import * as api from "../../api/request";
import { GET_SUGGESTIONS_URL } from "../../api/urls";
import SearchInput, {
  Suggestion,
} from "../../components/Header/SearchProducts/SearchInput";

const useStyles = makeStyles(() => ({
  container: {
    height: "40px",
    display: "flex",
    flex: 1,
    background: "#fff",
    borderRadius: "20px",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    position: "relative",
    margin: "0 11px 0 5px",
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
    color: (isSearching) => (isSearching ? "#fff" : "#616c71"),
    width: "25px",
    height: "25px",
    margin: "0px 3px 0px 0px",
    borderRadius: "50%",
    cursor: "pointer",
    backgroundColor: (isSearching) => (isSearching ? "#178841" : "transparent"),
    padding: "5px",
  },
}));

const SearchProducts = () => {
  const [suggestions, setSuggestions] = useState<Suggestion[]>([]);
  const [searchTerm, setSearchTerm] = useState<string>("");
  const classes = useStyles(searchTerm.length > 0);
  const history = useHistory();

  const requestSuggestions = async (searchKey: string) => {
    const apiSuggestions = await api.get<{ SearchSuggestion: string[] }>(
      GET_SUGGESTIONS_URL + `?Key=${searchKey}`
    );
    setSuggestions(
      apiSuggestions.SearchSuggestion.map((s: string) => ({
        title: s,
        value: s,
      }))
    );
  };

  const onOptionSelect = (value: Suggestion | null) => {
    if (value) {
      history.push({
        pathname: "/shop/search/products",
        search: "?searchTerm=" + value.title,
      });
    }
  };

  return (
    <div className={classes.container}>
      <SearchInput
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        suggestions={suggestions}
        requestSuggestions={requestSuggestions}
        onOptionSelect={onOptionSelect}
      />
      <div className={classes.iconsContainer}>
        {searchTerm.length > 0 && (
          <CloseIcon
            onClick={() => setSearchTerm("")}
            className={classes.closeIcon}
          />
        )}

        <SearchIcon
          onClick={() =>
            onOptionSelect({ title: searchTerm, value: searchTerm })
          }
          className={classes.searchIcon}
        />
      </div>
    </div>
  );
};

export default SearchProducts;
