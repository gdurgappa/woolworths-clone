import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const TopNavs = (props: {}) => {
  return (
    <div>
      <a>Shopping</a>
      <a>Stores</a>
      <a>Insurance</a>
      <a>Mobile</a>
      <a>Credit Cards</a>
      <a>Everyday Rewards</a>
      <a>Gift Cards</a>
    </div>
  );
};

export default TopNavs;
