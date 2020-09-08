import {
  AggregationsResultType,
  AggregationType,
  SearchProductsReducerType,
  SearchProductsReponseType,
  AggregatedProductsResult,
} from "../../types/product";
import { IAction } from "../../types/commonTypes";

export const initialSearchProductsState: SearchProductsReducerType = {
  aggregatedProductsResult: {
    ProductCount: 0,
    SpecialProductCount: 0,
    SuggestedTerm: 0,
    Total: 0,
    ArticleCount: 0,
    RecipeCount: 0,
  },
  searchProductsResultsList: [],
  TotalRecordCount: 0,
  SuggestedTerm: "",
  Aggregations: [],
  loading: true,
};

export default function searchProductsReducer(
  state: SearchProductsReducerType = initialSearchProductsState,
  action: IAction<SearchProductsReponseType | AggregatedProductsResult>
) {
  switch (action.type) {
    case "PRODUCTS_SEARCH_INIT":
      return {
        ...initialSearchProductsState,
        loading: true,
      };
    case "PRODUCTS_SEARCH_RESULTS_SUCCESS":
      console.log("PRODUCTS_SEARCH_RESULTS_SUCCESS loading");
      const payload = action.payload as SearchProductsReponseType;
      return {
        ...state,
        searchProductsResultsList: payload.Products,
        TotalRecordCount: payload.SearchResultsCount,
        SuggestedTerm: payload.SuggestedTerm,
        Aggregations: getSearchCategoriesAndCount(payload.Aggregations),
        loading: false,
      };
    case "PRODUCTS_SEARCH_AGGREGATED_RESULTS_SUCCESS":
      console.log("PRODUCTS_SEARCH_AGGREGATED_RESULTS_SUCCESS");
      return {
        ...state,
        aggregatedProductsResult: action.payload,
        loading: false,
      };
    default:
      return state;
  }
}

// todo: check undefined
const getSearchCategoriesAndCount = (
  aggregations: AggregationType[]
): AggregationsResultType[] => {
  const obj: AggregationType | undefined = aggregations.find(
    (aggr: AggregationType) => aggr.Name === "Category"
  );
  if (!obj) {
    return [];
  } else {
    // return obj[0].Results.filter(
    return obj.Results.filter(
      (cat: AggregationsResultType) => cat.ExtraOutputFields.nodelevel === 1
    );
  }
};
