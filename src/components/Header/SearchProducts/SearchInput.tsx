import Autocomplete from "@material-ui/lab/Autocomplete";
import { makeStyles } from "@material-ui/styles";
import React, { useState, ChangeEvent } from "react";

const useStyles = makeStyles(() => ({
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
  onOptionSelect: (event: React.ChangeEvent, value: Suggestion | null) => void;
}
// todo put it in common place
export interface Suggestion {
  title: string;
  value: string;
}

const SearchInput = ({
  requestSuggestions,
  suggestions,
  searchTerm,
  setSearchTerm,
  onOptionSelect,
}: SearchInputProps) => {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  // const handleEnterPress = (e: ChangeEvent<HTMLInputElement>) => {
  const handleEnterPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    e.keyCode === 13 &&
      onOptionSelect(e as any, {
        title: (e.target as HTMLInputElement).value,
        value: (e.target as HTMLInputElement).value,
      });
    setOpen(false);
  };
  const handleOptionSelect = (
    e: ChangeEvent<{}>,
    selection: Suggestion | null
  ) => {
    onOptionSelect(e, selection);
    setOpen(false);
  };
  return (
    <Autocomplete
      id="combo-box-demo"
      open={open}
      options={suggestions}
      openOnFocus={searchTerm.length > 0}
      getOptionLabel={(option: Suggestion) => option.title}
      onChange={handleOptionSelect}
      className={classes.autoCompleteRoot}
      onBlur={() => setOpen(false)}
      onFocus={() => setOpen(searchTerm.length > 0)}
      renderInput={(params) => (
        <div ref={params.InputProps.ref}>
          <input
            type="text"
            {...params.inputProps}
            className={classes.textField}
            onChange={(e) => {
              setOpen(searchTerm.length > 0);
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
