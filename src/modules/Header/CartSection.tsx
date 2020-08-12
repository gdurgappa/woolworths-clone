import React, { useState, useEffect } from "react";
import ViewCartButton from "../../components/CartSection/ViewCartButton";

const CartSection = (props: {}) => {
  return (
    <div>
      <p>Your Cart $12.30</p>
      <ViewCartButton />
    </div>
  );
};

export default CartSection;
