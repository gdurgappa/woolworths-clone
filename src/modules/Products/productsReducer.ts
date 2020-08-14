const initialState = {
  filteredProducts: [],
  loading: false,
  TotalRecordCount: 0,
};

export default function productsReducer(state = initialState, action: any) {
  switch (action.type) {
    case "PRODUCTS_LIST_SUCCESS":
      return {
        ...state,
        filteredProducts: action.payload.Bundles,
        TotalRecordCount: action.payload.TotalRecordCount,
      };
    case "DECREMENT":
      return state;
    default:
      return state;
  }
}
