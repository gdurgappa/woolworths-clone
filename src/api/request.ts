import axios from "axios";
import {
  ProductType,
  ProductsListType,
  ProductsApiBundleData,
} from "../types/product";
axios.defaults.headers.common["authority"] = "www.woolworths.com.au";
axios.defaults.headers.common["scheme"] = "https";

export const get = async <T>(url: string): Promise<T> => {
  const response = await axios.get(url);
  return response.data;
};

// export const get = async (url: any) => {
//   const initialResponse = await fetch(url);
//   const response = await initialResponse.json();
//   return JSON.parse(response.contents);
// };

export const post = async <Body, T>(url: string, body: Body): Promise<T> => {
  const response = await axios.post(url, body);
  return response.data;
};

export const fetchProducts = async <Body>(
  url: string,
  body: Body
): Promise<ProductsListType> => {
  const response = await axios.post(url, body);
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
// export const post = async (url: any, body: any) => {
//   const initialResponse = await fetch(url, {
//     method: "POST",
//     body: JSON.stringify(body),
//     headers: {
//       "Access-Control-Request-Headers": "x-requested-with",
//     },
//     mode: "cors",
//   });
//   const response = await initialResponse.json();
//   return JSON.parse(response.contents);
// };
