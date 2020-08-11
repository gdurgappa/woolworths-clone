import React, { useState, useEffect } from "react";
import WzIcon from "../../components/WzIcon";
import ViewCartButton from "../../components/CartSection/ViewCartButton";

const CartSection = (props: {}) => {
  return (
    <div>
      <WzIcon />
      <p>Your Cart $12.30</p>
      <ViewCartButton />
    </div>
  );
};

export default CartSection;
