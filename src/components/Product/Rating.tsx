import React, { useState, useEffect } from "react";

//Y92831981 - B
const Rating = ({ rating }: any) => {
  const {
    RatingCount: ratingCount,
    OneStarCount: oneStarCount,
    TwoStarCount: twoStarCount,
    ThreeStarCount: threeStarCount,
    FourStarCount: fourStarCount,
    FiveStarCount: fiveStarCount,
    Average: average,
  } = rating;
  return (
    <div>
      <h1>Rating {ratingCount}</h1>
      <p>average star - {average}</p>
      <p>{fiveStarCount}</p>
      <p>{fourStarCount}</p>
      <p>{threeStarCount}</p>
      <p>{twoStarCount}</p>
      <p>{oneStarCount}</p>
    </div>
  );
};

export default Rating;
