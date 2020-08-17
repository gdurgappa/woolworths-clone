import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
const useStyles = makeStyles((theme) => ({
  cheveron: {
    color: "#178841",
  },
}));

// todo: implement code splitting
const cheverons: any = { left: ChevronLeftIcon, right: ChevronRightIcon };
const Cheveron = ({ cheveronType, rootClassName }: any) => {
  const classes = useStyles();
  const Chev = cheverons[cheveronType];
  return <Chev className={rootClassName || classes.cheveron} />;
};

export default Cheveron;
