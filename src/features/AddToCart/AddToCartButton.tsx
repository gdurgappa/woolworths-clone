import { Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import React from "react";

const useStyles = makeStyles(() => ({
  root: {
    display: "flex",
    alignItems: "center",
    verticalAlign: "middle",
    justifyContent: "center",
    margin: 0,
    background: "#178841",
    borderRadius: "36px",
    cursor: "pointer",
    WebkitUserSelect: "none",
    MozUserSelect: "none",
    MsUserSelect: "none",
    userSelect: "none",
    borderColor: "#178841",
    textTransform: "none",
    height: "40px",
    marginBottom: "5px",
    width: "100%",
    "&:hover": {
      backgroundColor: "#1d6b18",
      borderColor: "#1d6b18",
      color: "#fff",
    },
  },
  buttonRoot: {
    // fontFamily: "Fresh Sans,Helvetica,Arial,sans-serif",
    fontSize: "14px",
    fontWeight: 500,
    textAlign: "center",
    color: "#fff",
    padding: 0,
    lineHeight: 2,
    textTransform: "none",
    "&:hover": {
      backgroundColor: "#1d6b18",
      borderColor: "#1d6b18",
      color: "#fff",
    },
  },
  buttonLabel: {},
  cartIcon: {
    width: "20px",
    height: "20px",
    paddingLeft: "5px",
    color: "#fff",
  },
}));
interface AddToCartButtonProps {
  rootDivOverrideStyle?: React.CSSProperties;
  title?: string;
  renderIcon?: React.ElementType;
}

const AddToCartButton = ({
  rootDivOverrideStyle,
  title = "Add to cart",
  renderIcon: Icon,
}: AddToCartButtonProps) => {
  const classes = useStyles();
  return (
    <div style={rootDivOverrideStyle} className={classes.root}>
      <Button
        classes={{ root: classes.buttonRoot, label: classes.buttonLabel }}
      >
        {title}
      </Button>
      {Icon ? Icon : <ShoppingCartIcon className={classes.cartIcon} />}
    </div>
  );
};

export default AddToCartButton;
