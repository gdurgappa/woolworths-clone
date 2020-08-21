const initialState = {
  allCategories: [],
  categoryMappedId: {},
  urlMappedId: {},
};

export default function categoryReducer(state = initialState, action: any) {
  switch (action.type) {
    case "CATEGORIES_LIST":
      const result = getConsolidatedCategories(action.payload);
      return { ...state, allCategories: result, categoryMappedId, urlMappedId };
    case "DECREMENT":
      return state;
    default:
      return state;
  }
}

const categoryMappedId: any = {};
const urlMappedId: any = {};
const getConsolidatedCategories = (categories: any) => {
  let url = "";
  const res =
    categories &&
    categories.map((first: any) => {
      url = first.UrlFriendlyName;
      const consolidatedCategories = getData(first, url);
      // urlMappedId[
      //   consolidatedCategories.UrlFriendlyName
      // ] = consolidatedCategories;
      consolidatedCategories["Children"] = first.Children.map((second: any) => {
        url = `${first.UrlFriendlyName}/${second.UrlFriendlyName}`;
        const consolidatedCategories = getData(second, url);
        // urlMappedId[
        //   `${first.UrlFriendlyName}/${second.UrlFriendlyName}`
        // ] = consolidatedCategories;
        consolidatedCategories["Children"] = second.Children.map(
          (third: any) => {
            url = `${first.UrlFriendlyName}/${second.UrlFriendlyName}/${third.UrlFriendlyName}`;
            const consolidatedCategories = getData(third, url);
            // urlMappedId[
            //   `${first.UrlFriendlyName}/${second.UrlFriendlyName}/${third.UrlFriendlyName}`
            // ] = consolidatedCategories;
            return consolidatedCategories;
          }
        );
        return consolidatedCategories;
      });
      return consolidatedCategories;
    });
  return res;
};

const getData = (obj: any, url: string) => {
  const {
    NodeId,
    Description,
    UrlFriendlyName,
    Children,
    ProductCount,
    DisplayOrder,
    IsBundle,
    IsSpecial,
  } = obj;
  categoryMappedId[UrlFriendlyName] = {
    NodeId,
    Description,
    ProductCount,
    DisplayOrder,
    IsBundle,
    IsSpecial,
  };
  urlMappedId[url] = categoryMappedId[UrlFriendlyName];
  return {
    NodeId,
    Description,
    UrlFriendlyName,
    Children,
    DisplayOrder,
    IsBundle,
    IsSpecial,
  };
};
