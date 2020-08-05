const initialState = {};

export default function categoryReducer(state = initialState, action: any) {
  switch (action.type) {
    case "INCREMENT":
      return state;
    case "DECREMENT":
      return state;
    default:
      return state;
  }
}
