import { CategoryMappedId, UrlMappedId } from "../types/category";
import { UrlParams } from "../types/commonTypes";

export const getUrlParamsToFetchProducts = (
  params: UrlParams,
  categoryMappedId: CategoryMappedId
) => {
  const { category, subCategorySelected, subCategory } = params;
  if (subCategorySelected) {
    return {
      url: `/shop/browse/${category}/${subCategory}/${subCategorySelected}`,
      categoryId: categoryMappedId[subCategorySelected].NodeId.replace(
        "_BUNDLES",
        ""
      ),
      formatObject: `{"name":"${categoryMappedId[subCategorySelected].Description}"}`,
      isBundle: categoryMappedId[subCategorySelected].IsBundle,
    };
  } else if (subCategory) {
    return {
      url: `/shop/browse/${category}/${subCategory}`,
      categoryId: categoryMappedId[subCategory].NodeId.replace("_BUNDLES", ""),
      formatObject: `{"name":"${categoryMappedId[subCategory].Description}"}`,
      isBundle: categoryMappedId[subCategory].IsBundle,
    };
  } else if (category) {
    return {
      url: `/shop/browse/${category}`,
      categoryId: categoryMappedId[category].NodeId.replace("_BUNDLES", ""),
      formatObject: `{"name":"${categoryMappedId[category].Description}"}`,
      isBundle: categoryMappedId[category].IsBundle,
    };
  }

  return { url: "", categoryId: "" };
};
// rename to getRequestBodyToFetchProducts
export const getUrlParamsToFetchProductsNew = (
  params: UrlParams,
  urlMappedId: UrlMappedId
) => {
  const { category, subCategorySelected, subCategory } = params;
  if (subCategorySelected) {
    const url = [category, subCategory, subCategorySelected].join("/");
    return {
      url: `/shop/browse/${url}`,
      categoryId: urlMappedId[url].NodeId.replace("_BUNDLES", ""),
      formatObject: `{"name":"${urlMappedId[url].Description}"}`,
      isBundle: urlMappedId[url].IsBundle,
      isSpecial: urlMappedId[url].IsSpecial,
    };
  } else if (subCategory) {
    const url = [category, subCategory].join("/");
    return {
      url: `/shop/browse/${url}`,
      categoryId: urlMappedId[url].NodeId.replace("_BUNDLES", ""),
      formatObject: `{"name":"${urlMappedId[url].Description}"}`,
      isBundle: urlMappedId[url].IsBundle,
      isSpecial: urlMappedId[url].IsSpecial,
    };
  } else if (category) {
    return {
      url: `/shop/browse/${category}`,
      categoryId: urlMappedId[category].NodeId.replace("_BUNDLES", ""),
      formatObject: `{"name":"${urlMappedId[category].Description}"}`,
      isBundle: urlMappedId[category].IsBundle,
      isSpecial: urlMappedId[category].IsSpecial,
    };
  }

  return {
    url: "",
    categoryId: "",
    formatObject: "",
    isBundle: false,
    isSpecial: false,
  };
};

export const getProductPriceInDollarsAndCents = (price: number) => {
  const formatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "AUD",
  });

  const splitPrice = "" + formatter.format(price); /* $2,500.00 */
  return {
    dollarAmount: splitPrice.split(".")[0].replace("A$", ""),
    cents: splitPrice.split(".")[1],
  };
};
