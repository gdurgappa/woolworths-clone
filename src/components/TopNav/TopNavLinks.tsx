import React, { useState, useEffect } from "react";
import { topNavLinks } from "../../constants/menus";
import TopNavLink from "./TopNavLink";
import { makeStyles } from "@material-ui/core/styles";
const useStyles = makeStyles((theme) => ({
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
const TopNavLinks = (props: {}) => {
  const [isActive, setIsActive] = useState(false);
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
