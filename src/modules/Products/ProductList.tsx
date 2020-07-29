import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Product from "./Product";

function ProductList() {
  const [productsList, setProductsList] = useState([]);
  const params = useParams();
  useEffect(() => {
    const body = JSON.stringify({
      categoryId: "1-A90F8053",
      pageNumber: 1,
      pageSize: 36,
      sortType: "TraderRelevance",
      url: "/shop/browse/fruit-veg/fruit/organic-fruit",
      location: "/shop/browse/fruit-veg/fruit/organic-fruit",
      formatObject: '{"name":"Organic Fruit"}',
      isSpecial: false,
      isBundle: false,
      isMobile: false,
      filters: null,
    });
    fetch("https://www.woolworths.com.au/apis/ui/browse/category", {
      method: "post",

      body,
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        mode: "no-cors",
      },
    })
      .then((res: any) => res.json())
      .then((res: any) => {
        console.log("res", res.Bundles);
        setProductsList(res.Bundles);
      });
  }, []);

  console.log("params", params);
  return (
    <>
      {productsList.map((product: any) => {
        return <Product {...product} />;
      })}
    </>
  );
}

export default ProductList;
