import { Button } from "@material-ui/core";
import React from "react";

interface ViewCartButtonProps {
  name: string;
  buttonStyle: string;
}
const ViewCartButton = ({ name, buttonStyle }: ViewCartButtonProps) => {
  return <Button className={buttonStyle}>{name}</Button>;
};

export default ViewCartButton;
