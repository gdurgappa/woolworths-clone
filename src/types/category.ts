export interface CategoryMapping {
  NodeId: string;
  Description: string;
  ProductCount: number;
  DisplayOrder: number;
  IsBundle: boolean;
  IsSpecial: boolean;
}

export interface CategoryMappedId {
  [key: string]: CategoryMapping;
}
export interface UrlMappedId {
  [key: string]: CategoryMapping;
}

export interface Category extends CategoryMapping {
  UrlFriendlyName: string;
  Children: Category[];
}

export interface CategoryReducerType {
  allCategories: Category[];
  categoryMappedId: CategoryMappedId;
  urlMappedId: UrlMappedId;
}

export interface LeftPanelCategoryType {
  Description: string;
  UrlFriendlyName: string;
  NodeId: string;
}
