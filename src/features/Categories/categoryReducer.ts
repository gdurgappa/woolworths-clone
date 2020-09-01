import {
  CategoryMappedId,
  UrlMappedId,
  Category,
  CategoryReducerType,
} from "../../types/category";
import { IAction } from "../../types/commonTypes";

const initialState: CategoryReducerType = {
  allCategories: [],
  categoryMappedId: {},
  urlMappedId: {},
};

export default function categoryReducer(
  state: CategoryReducerType = initialState,
  action: IAction<Category[]>
): CategoryReducerType {
  switch (action.type) {
    case "CATEGORIES_LIST":
      const result = flattenCategories(action.payload);
      return { ...state, allCategories: result, categoryMappedId, urlMappedId };
    case "DECREMENT":
      return state;
    default:
      return state;
  }
}

const categoryMappedId: CategoryMappedId = {};
const urlMappedId: UrlMappedId = {};
const flattenCategories = (categories: Category[]) => {
  let url = "";
  const res =
    categories &&
    categories.map((first: Category) => {
      url = first.UrlFriendlyName;
      const consolidatedCategories = getData(first, url);
      consolidatedCategories.Children = first.Children.map(
        (second: Category) => {
          url = `${first.UrlFriendlyName}/${second.UrlFriendlyName}`;
          const consolidatedCategories = getData(second, url);
          consolidatedCategories.Children = second.Children.map(
            (third: Category) => {
              url = `${first.UrlFriendlyName}/${second.UrlFriendlyName}/${third.UrlFriendlyName}`;
              const consolidatedCategories = getData(third, url);
              return consolidatedCategories;
            }
          );
          return consolidatedCategories;
        }
      );
      return consolidatedCategories;
    });
  return res;
};

// todo: move this inside the above fun
const getData = (obj: Category, url: string): Category => {
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
    ProductCount,
  };
};
