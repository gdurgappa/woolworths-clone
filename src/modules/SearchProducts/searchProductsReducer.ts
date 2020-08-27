import {
  AggregationsResultType,
  AggregationType,
  SearchProductsReducerType,
  SearchProductsReponseType,
  AggregatedProductsResult,
} from "../../types/product";
import { IAction } from "../../types/commonTypes";

const initialState: SearchProductsReducerType = {
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
};

export default function searchProductsReducer(
  state: SearchProductsReducerType = initialState,
  action: IAction<SearchProductsReponseType | AggregatedProductsResult>
) {
  switch (action.type) {
    case "PRODUCTS_SEARCH_RESULTS_SUCCESS":
      const payload = action.payload as SearchProductsReponseType;
      return {
        ...state,
        searchProductsResultsList: payload.Products,
        TotalRecordCount: payload.SearchResultsCount,
        SuggestedTerm: payload.SuggestedTerm,
        Aggregations: getSearchCategoriesAndCount(payload.Aggregations),
      };
    case "PRODUCTS_SEARCH_AGGREGATED_RESULTS_SUCCESS":
      return { ...state, aggregatedProductsResult: action.payload };
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
