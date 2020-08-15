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
      };
    case "PRODUCTS_SEARCH_AGGREGATED_RESULTS_SUCCESS":
      return { ...state, aggregatedProductsResult: action.payload };
    default:
      return state;
  }
}
