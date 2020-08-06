import React, { useState, useEffect } from "react";

const RatingSummary = ({ rating }: any) => {
  return rating ? (
    <div>
      Average Rating Start {rating.Average}
      <div>
        <a>{rating.RatingCount} Ratings</a>
      </div>
    </div>
  ) : null;
};

export default RatingSummary;
