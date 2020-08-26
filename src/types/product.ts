import { Action } from "redux";

export interface ProductType {
  Name: string;
  Description: string;
  CupString: string;
  InstorePrice: number;
  MediumImageFile: string;
  LargeImageFile: string;
  UrlFriendlyName: string;
  Stockcode: number;
  FullDescription: string;
  Rating: RatingType;
  AdditionalAttributes: {
    PiesProductDepartmentNodeId: string;
    description: string;
    sapcategoryname: string;
  };
  ImageTag: {
    TagContent: string;
  };
  HeaderTag: {
    BackgroundColor: string;
    BorderColor: string;
    Content: string;
    Promotion: string;
    TagLink: string;
    TextColor: string;
  };
  HideWasSavedPrice: boolean;
  InstoreWasPrice: number;
  InstoreHasCupPrice: boolean;
}

export interface RatingType {
  RatingCount: string;
  Average: number;
}
export interface CountryOfOriginLabelType {
  AltText: string;
  SvgImageFile: string;
}

export interface NutritionValues {
  "Avg Qty Per Serving": string;
  "Avg Qty Per 100g": string;
}

export interface NutritionalInformationType {
  Name: string;
  Values: NutritionValues;
  ServingSize: string;
  ServingsPerPack: string;
}

export interface ProductDetailsType {
  Product: ProductType;
  DetailsImagePaths: string[];
  CountryOfOriginLabel: CountryOfOriginLabelType;
  AdditionalAttributes: { ingredients: string; allergencontains: string };
  NutritionalInformation: NutritionalInformationType[];
}

export interface ProductReducerType {
  filteredProducts: ProductType[];
  loading: boolean;
  TotalRecordCount: number;
}

export interface SearchProductsReducerType {
  aggregatedProductsResult: AggregatedProductsResult;
  searchProductsResultsList: ProductType[];
  TotalRecordCount: number;
  SuggestedTerm: string;
  Aggregations: AggregationsResultType[];
}

export interface AggregatedProductsResult {
  ProductCount: number;
  SpecialProductCount: number;
  SuggestedTerm: number;
  Total: number;
}

export interface AggregationType {
  Name: string;
  Results?: AggregationType[];
}

export interface AggregationsResultType {
  Count: number;
  ExtraOutputFields: {
    description: string;
    nodelevel: number;
    displayorder: number;
    parentnodeid: string;
  };
  Name: string;
}

export interface FetchProductsReqBody {
  categoryId: string;
  pageNumber: number;
  pageSize: number;
  sortType: string;
  url: string;
  location: string;
  formatObject: string;
  isSpecial: boolean;
  isBundle: boolean;
  isMobile: boolean;
  filters?: boolean | null;
}

export interface ProductPriceType {
  CupString: number;
  InstorePrice: number;
  InstoreHasCupPrice: boolean;
  HideWasSavedPrice: number;
  InstoreWasPrice: number;
}

export interface IAction<T> extends Action<string> {
  type: string;
  payload: T;
}
