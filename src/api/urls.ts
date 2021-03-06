export const EXPRESS_API_URL =
  "https://vigilant-goldstine-7114ff.netlify.app/.netlify/functions/api/getDataFromWoolyApi";
export const GET_ALL_CATEGORIES_URL = `https://www.woolworths.com.au/apis/ui/PiesCategoriesWithSpecials`;
export const GET_PRODUCTS_URL = `https://www.woolworths.com.au/apis/ui/browse/category`;
export const GET_SUGGESTIONS_URL = `https://www.woolworths.com.au/apis/ui/Search/suggestion`;
export const GET_PRODUCTS_SEARCH_URL = `https://www.woolworths.com.au/apis/ui/Search/products`;
export const GET_AGGREGATED_SEARCH_PRODUCTS_RESULT_URL = `https://www.woolworths.com.au/apis/ui/v2/Search/count`;
export const GET_DYNAMIC_CONTENT_URL = `https://www.woolworths.com.au/Shop/DynamicContent2Panel?scheduleKey=`;
export const GET_PRODUCT_DETAIL_URL = `https://www.woolworths.com.au/apis/ui/product/detail/`;
export const GET_CATEGORY_DIALOG_BANNER_URL = (nodeId: string) =>
  `https://www.woolworths.com.au/apis/ui/banner?CategoryId=${nodeId}&IsSpecialRoot=false`;
