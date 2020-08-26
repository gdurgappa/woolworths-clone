import { ProductReducerType } from "../../types/product";

const initialState: ProductReducerType = {
  filteredProducts: [],
  loading: false,
  TotalRecordCount: 0,
};

//todo: providing type 2 times
export default function productsReducer(
  state: ProductReducerType = initialState,
  action: any
) {
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
