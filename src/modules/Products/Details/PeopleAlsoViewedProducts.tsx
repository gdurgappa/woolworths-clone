import React, { useState, useEffect } from "react";
import Product from "../Product";
import Pagination from "@material-ui/lab/Pagination";

const PeopleAlsoViewedProducts = ({ params }: any) => {
  const [productsList, setProductsList] = useState<any>([]);
  const { category, subCategorySelected, subCategory, nodeId } = params;
  const getAlsoViewedItemsProductList = () => {
    const body = JSON.stringify({
      categoryId: "1_ACA2FC2",
      //   categoryId: nodeId,
      pageNumber: 1,
      pageSize: 36,
      sortType: "TraderRelevance",
      url: `/shop/browse/${category}`,
      location: `/shop/browse/${category}`,
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
        setProductsList(res.Bundles);
      });
  };
  const getAlsoBroughtItemsProductList = () => {};
  useEffect(() => {
    getAlsoViewedItemsProductList();
  }, []);
  return (
    <div>
      <>
        {/* xxxx use redux to display h1 - use category.Description  */}
        <h1>'People Who Viewed This Item Also Viewed '</h1>
        {productsList.map((product: any) => {
          // xxxx store categories in redux?
          return (
            <Product
              {...product}
              category={{ category, subCategorySelected, subCategory, nodeId }}
            />
          );
        })}
      </>
    </div>
  );
};

export default PeopleAlsoViewedProducts;
