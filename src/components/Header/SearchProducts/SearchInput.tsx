import React, { useState, useEffect } from "react";
import { TextField } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import Autocomplete from "@material-ui/lab/Autocomplete";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    alignItems: "center",
    height: "70px",
  },
  autoCompleteRoot: {
    width: "100%",
  },
  textField: {
    borderRadius: "20px",
    border: "none",
    outline: "0",
    // width: "100%",
    height: "40px",
    lineHeight: "1.15",
    fontSize: "16px",
    fontFamily: "Helvetica,Arial,sans-serif",
    padding: "0px 60px 0px 10px",
    width: "calc(100% - 83px)",
    // padding: "0 40px 0 16px",
  },
}));
const SearchInput = ({
  getSuggestions,
  suggestions,
  searchTerm,
  setSearchTerm,
  onOptionSelect,
}: any) => {
  const classes = useStyles();
  return (
    <Autocomplete
      id="combo-box-demo"
      options={suggestions}
      getOptionLabel={(option: any) => option.title}
      onChange={onOptionSelect}
      className={classes.autoCompleteRoot}
      renderInput={(params) => (
        <div ref={params.InputProps.ref}>
          <input
            type="text"
            {...params.inputProps}
            className={classes.textField}
            onChange={(e) => {
              setSearchTerm(e.target.value);
              getSuggestions(e.target.value);
            }}
            value={searchTerm}
            placeholder="Search products & recipies"
          />
        </div>
        // <TextField
        //   {...params}
        //   label="Search for product and recipies"
        //   // variant="outlined"
        //   onChange={(e) => {
        //     setSearchTerm(e.target.value);
        //     getSuggestions(e.target.value);
        //   }}
        //   value={searchTerm}
        // />
      )}
    />
  );
};

export default SearchInput;
