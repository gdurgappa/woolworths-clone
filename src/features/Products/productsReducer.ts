import { ProductReducerType, ProductsListType } from "../../types/product";
import { IAction } from "../../types/commonTypes";

const initialState: ProductReducerType = {
  filteredProducts: [],
  loading: false,
  TotalRecordCount: 0,
};

//todo: providing type 2 times
export default function productsReducer(
  state: ProductReducerType = initialState,
  action: IAction<ProductsListType>
) {
  switch (action.type) {
    case "PRODUCTS_LIST_SUCCESS":
      return {
        ...state,
        filteredProducts: action.payload.products,
        TotalRecordCount: action.payload.TotalRecordCount,
      };
    case "DECREMENT":
      return state;
    default:
      return state;
  }
}
