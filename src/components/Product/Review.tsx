import React from "react";

const Review = ({ review }: any) => {
  const {
    Rating: rating,
    Body: body,
    Member: member,
    CreatedDate: createdDate,
    Source: source,
  } = review;
  return (
    <div>
      <p>{rating}</p>
      <p>{member}</p>
      <p>{body}</p>
      <p>
        {createdDate} - Sourced from Woolworths customers through - {source}
      </p>
    </div>
  );
};

export default Review;
