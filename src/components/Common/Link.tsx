import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Link as CustomLink } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  breadCrumbItemLink: {
    color: "#178841",
  },
}));
const Link = ({ linkName, to, rootClassName, children }: any) => {
  const classes = useStyles();
  return (
    <CustomLink to={to} className={rootClassName || classes.breadCrumbItemLink}>
      {children || linkName}
    </CustomLink>
  );
};

export default Link;
