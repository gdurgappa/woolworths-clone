import {
  AggregationsResultType,
  AggregationType,
  SearchProductsReducerType,
} from "../../types/product";

const initialState: SearchProductsReducerType = {
  aggregatedProductsResult: {
    ProductCount: 0,
    SpecialProductCount: 0,
    SuggestedTerm: 0,
    Total: 0,
  },
  searchProductsResultsList: [],
  TotalRecordCount: 0,
  SuggestedTerm: "",
  Aggregations: [],
};

export default function searchProductsReducer(
  state: SearchProductsReducerType = initialState,
  action: any
) {
  switch (action.type) {
    case "PRODUCTS_SEARCH_RESULTS_SUCCESS":
      return {
        ...state,
        searchProductsResultsList: action.payload.Products,
        TotalRecordCount: action.payload.SearchResultsCount,
        SuggestedTerm: action.payload.SuggestedTerm,
        Aggregations: getSearchCategoriesAndCount(action.payload.Aggregations),
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
  if (obj && obj !== undefined) {
    return obj.Results.filter(
      (cat: AggregationsResultType) => cat.ExtraOutputFields.nodelevel === 1
    );
  } else {
    return [];
  }
};
