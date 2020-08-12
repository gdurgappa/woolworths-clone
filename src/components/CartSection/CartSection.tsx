import React, { useState, useEffect } from "react";
import ViewCartTotal from "./ViewCartTotal";
import ViewCartButton from "./ViewCartButton";

const CartSection = (props: {}) => {
  return (
    <div>
      <ViewCartTotal />
      <ViewCartButton />
    </div>
  );
};

export default CartSection;
