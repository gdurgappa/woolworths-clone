export interface Product {
  Name: string;
  Description: string;
  CupString: string;
  InstorePrice: number;
  MediumImageFile: string;
  UrlFriendlyName: string;
  Stockcode: number;
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
