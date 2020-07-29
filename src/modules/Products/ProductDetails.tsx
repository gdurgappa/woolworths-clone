import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const ProductDetails = (props: {}) => {
  const [product, setProduct] = useState<any>([]);
  const params: any = useParams();
  console.log("params", params);

  useEffect(() => {
    fetch(
      `https://www.woolworths.com.au/apis/ui/product/detail/${params.Stockcode}`
    )
      .then((res: any) => res.json())
      .then((res: any) => {
        console.log("res", res.Product);
        setProduct(res.Product);
      });
  }, []);
  return <div>{product.Description}</div>;
};

export default ProductDetails;
