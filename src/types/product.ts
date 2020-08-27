//extends { [key:string]: value: string }
export interface ProductsApiBundleData {
  Products: ProductType[];
  Name: string;
}
export interface ProductsListType {
  products: ProductType[];
  TotalRecordCount: number;
}

export interface ProductsApiBundleExtraData {
  AdditionalAttribute: string;
  PiesProductDepartmentNodeId: string;
  description: string;
  TagContent: string;
  BackgroundColor: string;
  BorderColor: string;
  Content: string;
  Promotion: string;
  TagLink: string;
  TextColor: string;
}
export interface ProductType extends ProductsApiBundleExtraData {
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
  RatingCount: number;
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

export interface SearchProductsReponseType {
  Products: ProductType[];
  SearchResultsCount: number;
  SuggestedTerm: string;
  Aggregations: AggregationType[];
}

export interface AggregatedProductsResult {
  ProductCount: number;
  SpecialProductCount: number;
  SuggestedTerm: number;
  Total: number;
  ArticleCount: number;
  RecipeCount: number;
}

export interface AggregationType {
  Name: string;
  Results: AggregationsResultType[];
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

export interface SearchProductsReqBody {
  Filters: string[];
  IsSpecial: boolean;
  Location: string;
  PageNumber: number;
  PageSize: number;
  SearchTerm: string;
  SortType: string;
}

export interface ProductPriceType {
  CupString: string;
  InstorePrice: number;
  InstoreHasCupPrice?: boolean;
  HideWasSavedPrice?: boolean;
  InstoreWasPrice?: number;
}
