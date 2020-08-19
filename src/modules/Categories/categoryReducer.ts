const initialState = {
  allCategories: [],
  categoryMappedId: {},
};

export default function categoryReducer(state = initialState, action: any) {
  switch (action.type) {
    case "CATEGORIES_LIST":
      const result = getConsolidatedCategories(action.payload);
      return { ...state, allCategories: result, categoryMappedId };
    case "DECREMENT":
      return state;
    default:
      return state;
  }
}

const categoryMappedId: any = {};
const getConsolidatedCategories = (categories: any) => {
  const res =
    categories &&
    categories.map((first: any) => {
      const consolidatedCategories = getData(first);
      consolidatedCategories["Children"] = first.Children.map((second: any) => {
        const consolidatedCategories = getData(second);
        consolidatedCategories["Children"] = second.Children.map(
          (third: any) => {
            return getData(third);
          }
        );
        return consolidatedCategories;
      });
      return consolidatedCategories;
    });
  return res;
};

const getData = (obj: any) => {
  const {
    NodeId,
    Description,
    UrlFriendlyName,
    Children,
    ProductCount,
    DisplayOrder,
  } = obj;
  categoryMappedId[UrlFriendlyName] = {
    NodeId,
    Description,
    ProductCount,
    DisplayOrder,
  };
  return { NodeId, Description, UrlFriendlyName, Children, DisplayOrder };
};
