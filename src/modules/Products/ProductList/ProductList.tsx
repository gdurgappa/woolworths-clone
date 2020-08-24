import { makeStyles } from "@material-ui/core/styles";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";

import { getUrlParamsToFetchProductsNew } from "../../../utils/commonHelper";
import ProductListLeftPanel from "./ProdcutListLeftPanel";
import ProductListContent from "./ProductListContent";

const useStyles = makeStyles(() => ({
  pageContainer: {
    display: "flex",
    width: "100%",
  },
}));

//  todo: common types
export type UrlParamsType = {
  category: string;
  subCategory: string;
  subCategorySelected: string;
};

interface Category {
  categoryMappedId: string;
}
function ProductList() {
  const classes = useStyles();

  const params = useParams<UrlParamsType>();
  const { category, subCategorySelected, subCategory } = params;
  const dispatch = useDispatch();

  const { categoryMappedId, urlMappedId }: any = useSelector<any>(
    (state) => state.category
  );

  useEffect(() => {
    if (Object.keys(categoryMappedId).length) {
      const urlParams = getUrlParamsToFetchProductsNew(params, urlMappedId);
      const body = {
        ...urlParams,
        pageNumber: 1,
        pageSize: 15, //  todo: move it to config
        sortType: "TraderRelevance",
        location: urlParams?.url,
        isMobile: false,
        filters: null,
      };
      dispatch({ type: "GET_PRODUCT_LIST", payload: body });
    }
  }, [params, categoryMappedId]);

  return (
    <div className={classes.pageContainer}>
      <ProductListLeftPanel
        {...{ category, subCategorySelected, subCategory }}
      />
      <ProductListContent params={params} categoryMappedId={categoryMappedId} />
    </div>
  );
}

export default ProductList;
