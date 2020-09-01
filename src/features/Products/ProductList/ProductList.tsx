import { makeStyles } from "@material-ui/core/styles";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { Helmet } from "react-helmet";
import { getUrlParamsToFetchProductsNew } from "../../../utils/commonHelper";
import ProductListLeftPanel from "./ProdcutListLeftPanel";
import ProductListContent from "./ProductListContent";
import { RootState } from "../../../store/store";
import { CategoryReducerType } from "../../../types/category";
import { FetchProductsReqBody } from "../../../types/product";
import { useState } from "react";
import { useActiveScreensize } from "../../../shared/hooks/useActiveScreensize";

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

  const screenSize = useActiveScreensize();

  const [title, setTitle] = useState<string>("Loading...");
  const { category, subCategorySelected, subCategory } = params;
  const dispatch = useDispatch();

  const { categoryMappedId, urlMappedId }: CategoryReducerType = useSelector<
    RootState,
    CategoryReducerType
  >((state) => state.category);

  useEffect(() => {
    if (Object.keys(urlMappedId).length) {
      const urlParams = getUrlParamsToFetchProductsNew(params, urlMappedId);
      console.log("urlParams", urlParams);
      console.log("urlMappedId", urlMappedId);
      setTitle(
        urlMappedId[urlParams.url.replace("/shop/browse/", "")].Description
      );
      const body: FetchProductsReqBody = {
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
  }, [params, urlMappedId]);

  return (
    <div className={classes.pageContainer}>
      <Helmet>
        <title>{`${title} | Woolworth`}</title>
      </Helmet>
      {screenSize === "lg" && (
        <ProductListLeftPanel
          {...{ category, subCategorySelected, subCategory }}
        />
      )}
      <ProductListContent params={params} categoryMappedId={categoryMappedId} />
    </div>
  );
}

export default ProductList;
