import { makeStyles } from "@material-ui/core/styles";
import React from "react";
import { Link as CustomLink } from "react-router-dom";

const useStyles = makeStyles(() => ({
  breadCrumbItemLink: {
    color: "#178841",
  },
}));

interface LinkProps {
  linkName: string;
  to: string;
  rootClassName: string;
  children: string;
}
const Link = ({ linkName, to, rootClassName, children }: LinkProps) => {
  const classes = useStyles();
  return (
    <CustomLink to={to} className={rootClassName || classes.breadCrumbItemLink}>
      {children || linkName}
    </CustomLink>
  );
};

export default Link;
