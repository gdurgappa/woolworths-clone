export const getUrlParamsToFetchProducts = (
  params: any,
  categoryMappedId: any
) => {
  const { category, subCategorySelected, subCategory } = params;
  if (subCategorySelected) {
    return {
      url: `/shop/browse/${category}/${subCategory}/${subCategorySelected}`,
      categoryId: categoryMappedId[subCategorySelected].NodeId,
    };
  } else if (subCategory) {
    return {
      url: `/shop/browse/${category}/${subCategory}/`,
      categoryId: categoryMappedId[subCategory].NodeId,
    };
  } else if (category) {
    return {
      url: `/shop/browse/${category}/`,
      categoryId: categoryMappedId[category].NodeId,
    };
  }

  return { url: "", categoryId: "" };
};

export const getProductPriceInDollarsAndCents = (price: any) => {
  var formatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "AUD",
  });

  const splitPrice = "" + formatter.format(price); /* $2,500.00 */
  return {
    dollarAmount: splitPrice.split(".")[0].replace("A$", ""),
    cents: splitPrice.split(".")[1],
  };
};
