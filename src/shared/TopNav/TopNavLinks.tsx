import { makeStyles } from "@material-ui/core/styles";
import React from "react";
import { topNavLinks } from "../../constants/menus";
import TopNavLink from "./TopNavLink";

const useStyles = makeStyles(() => ({
  root: {
    background: "#125430",
    borderBottom: "2px solid #126c34",
    display: "flex",
    height: "30px",
    WebkitBoxPack: "center",
    justifyContent: "center",
    WebkitBoxAlign: "center",
    alignItems: "center",
    marginBottom: "0",
  },
  topLinks: {
    background: "gray",
  },
}));

const TopNavLinks = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      {topNavLinks.map((nav) => {
        return (
          <TopNavLink
            key={nav.name}
            isActive={nav.name === "Shopping"}
            nav={nav}
          />
        );
      })}
    </div>
  );
};

export default TopNavLinks;
