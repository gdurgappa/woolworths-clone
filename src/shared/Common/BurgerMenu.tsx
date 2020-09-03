import { makeStyles } from "@material-ui/core/styles";
import HamBurgerMenu from "@material-ui/icons/Menu";
import React from "react";
const useStyles = makeStyles((theme) => ({
  root: {
    color: "white",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
    padding: "0px 10px",
    borderRight: "1px dotted #126c34",
    cursor: "pointer",
    "& svg": {
      width: "30px",
      height: "20px",
      paddingBottom: "5px",
    },
  },
  "& p": {},

  menuText: {},
}));
const BurgerMenu = ({ menuText }: { menuText?: string }) => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <HamBurgerMenu />
      {menuText && <p>{menuText}</p>}
    </div>
  );
};

export default BurgerMenu;
