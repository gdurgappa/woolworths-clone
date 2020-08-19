const initialState = {
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
  state = initialState,
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

const getSearchCategoriesAndCount = (aggregations: any) =>
  aggregations
    .find((aggr: any) => aggr.Name === "Category")
    .Results.filter((cat: any) => cat.ExtraOutputFields.nodelevel === 1);
