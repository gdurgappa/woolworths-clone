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

interface SearchInputProps {
  requestSuggestions: (val: string) => void;
  // suggestions: Array<Suggestion>;
  suggestions: Suggestion[];
  searchTerm: string;
  setSearchTerm: (val: string) => void;
  onOptionSelect: (
    event: React.ChangeEvent<{}>,
    value: Suggestion | null
  ) => void;
}
// todo put it in common place
export interface Suggestion {
  title: string;
  value: string;
}
// todo: suggestion should close after enter key
const SearchInput = ({
  requestSuggestions,
  suggestions,
  searchTerm,
  setSearchTerm,
  onOptionSelect,
}: SearchInputProps) => {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const handleEnterPress = (e: any) => {
    e.keyCode === 13 &&
      onOptionSelect(e, {
        title: e.target.value,
        value: e.target.value,
      });
    setOpen(false);
  };
  return (
    <Autocomplete
      id="combo-box-demo"
      open={open}
      options={suggestions}
      openOnFocus
      getOptionLabel={(option: any) => option.title}
      onChange={onOptionSelect}
      className={classes.autoCompleteRoot}
      onBlur={() => (setOpen(false)}
      onFocus={() => (setOpen(true)}
      renderInput={(params) => (
        <div ref={params.InputProps.ref}>
          <input
            type="text"
            {...params.inputProps}
            className={classes.textField}
            onChange={(e) => {
              setOpen(true);
              setSearchTerm(e.target.value);
              requestSuggestions(e.target.value);
            }}
            onKeyDown={handleEnterPress}
            value={searchTerm}
            placeholder="Search products & recipies"
          />
        </div>
      )}
    />
  );
};

export default SearchInput;
