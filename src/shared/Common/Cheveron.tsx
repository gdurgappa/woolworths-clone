import { makeStyles } from "@material-ui/core/styles";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import ExpandLessIcon from "@material-ui/icons/ExpandLess";
import React from "react";
const useStyles = makeStyles(() => ({
  cheveron: {
    color: "#178841",
  },
}));
type CheveronsProps = {
  cheveronType: string;
  rootClassName?: string;
};
type CheveronsType = {
  left: React.ReactSVG;
  right: React.ReactSVG;
};
// todo: implement code splitting

const cheverons: any = {
  left: ChevronLeftIcon,
  right: ChevronRightIcon,
  up: ExpandLessIcon,
  down: ExpandMoreIcon,
};
const Cheveron = ({ cheveronType, rootClassName }: CheveronsProps) => {
  const classes = useStyles();
  const Chev = cheverons[cheveronType];
  return <Chev className={rootClassName || classes.cheveron} />;
};

export default Cheveron;
