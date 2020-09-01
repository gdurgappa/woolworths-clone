import axios from "axios";
import {
  ProductsApiBundleData,
  ProductsListType,
  ProductType,
  SearchProductsReponseType,
} from "../types/product";
import { EXPRESS_API_URL } from "./urls";
axios.defaults.headers.common["authority"] = "www.woolworths.com.au";
axios.defaults.headers.common["scheme"] = "https";

export const get = async <T>(url: string): Promise<T> => {
  // const response = await axios.get(url);
  const response = await axios.post(EXPRESS_API_URL, {
    url,
    body: "",
    method: "get",
  });
  return response.data;
};

// export const get = async (url: any) => {
//   const initialResponse = await fetch(url);
//   const response = await initialResponse.json();
//   return JSON.parse(response.contents);
// };

export const post = async <Body, T>(url: string, body: Body): Promise<T> => {
  const response = await axios.post(EXPRESS_API_URL, {
    url,
    body,
    method: "post",
  });
  return response.data;
};

export const fetchProducts = async <Body>(
  url: string,
  body: Body
): Promise<ProductsListType> => {
  const response = await axios.post(EXPRESS_API_URL, {
    url,
    body,
    method: "post",
  });
  const products: ProductType[] = response.data.Bundles.map(
    (bun: ProductsApiBundleData) => {
      return (({
        Name,
        Description,
        CupString,
        InstorePrice,
        MediumImageFile,
        LargeImageFile,
        UrlFriendlyName,
        Stockcode,
        FullDescription,
        Rating,
        AdditionalAttribute,
        PiesProductDepartmentNodeId,
        description,
        ImageTag,
        TagContent,
        HeaderTag,
        BackgroundColor,
        BorderColor,
        Content,
        Promotion,
        TagLink,
        TextColor,
        HideWasSavedPrice,
        InstoreWasPrice,
        InstoreHasCupPrice,
      }) => ({
        Name,
        Description,
        CupString,
        InstorePrice,
        MediumImageFile,
        LargeImageFile,
        UrlFriendlyName,
        Stockcode,
        FullDescription,
        Rating,
        AdditionalAttribute,
        PiesProductDepartmentNodeId,
        description,
        ImageTag,
        TagContent,
        HeaderTag,
        BackgroundColor,
        BorderColor,
        Content,
        Promotion,
        TagLink,
        TextColor,
        HideWasSavedPrice,
        InstoreWasPrice,
        InstoreHasCupPrice,
      }))(bun.Products[0]);
    }
  );

  return { products, TotalRecordCount: response.data.TotalRecordCount };
};

export const searchProducts = async <Body>(
  url: string,
  body: Body
): Promise<SearchProductsReponseType> => {
  const apiResponse = await axios.post(EXPRESS_API_URL, {
    url,
    body,
    method: "post",
  });
  // return apiResponse.data;
  apiResponse.data.Products = apiResponse.data.Products.map(
    (res: ProductsApiBundleData) => res.Products[0]
  );
  return apiResponse.data;
};
