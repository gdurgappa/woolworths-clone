const initialState = {
  aggregatedProductsResult: {},
  searchProductsResultsList: [],
  TotalRecordCount: 0,
};

export default function searchProductsReducer(
  state = initialState,
  action: any
) {
  switch (action.type) {
    case "PRODUCTS_SEARCH_RESULTS_SUCCESS":
      return { ...state, searchProductsResultsList: action.payload };
    case "PRODUCTS_SEARCH_AGGREGATED_RESULTS_SUCCESS":
      return { ...state, aggregatedProductsResult: action.payload };
    default:
      return state;
  }
}
