import React, { useState, useEffect } from "react";
import Review from "../../components/Product/Review";

const Reviews = ({ stockCode }: any) => {
  const [reviewsData, setReviewsData] = useState<any>({});
  const [page, setPage] = useState(1);
  const {
    Reviews: reviews,
    TotalCount: totalCount,
    PageNumber: pageNumber,
  } = reviewsData;
  useEffect(() => {
    fetch(
      `https://www.woolworths.com.au/apis/ui/Product/Review?stockcode=${stockCode}&pageNumber=${page}&pageSize=10&sortType=Latest`
    )
      .then((res: any) => res.json())
      .then((res: any) => {
        setReviewsData(res);
      });
  }, []);
  return (
    <div>
      <h1>Reviews {totalCount}</h1>
      <h2>Sort by: Latest</h2>
      {reviews &&
        reviews.length &&
        reviews.map((review: any) => <Review review={review} />)}
    </div>
  );
};

export default Reviews;
