export const getUrlParamsToFetchProducts = (
  params: any,
  categoryMappedId: any
) => {
  const { category, subCategorySelected, subCategory } = params;
  if (subCategorySelected) {
    return {
      url: `/shop/browse/${category}/${subCategory}/${subCategorySelected}`,
      categoryId: categoryMappedId[subCategorySelected],
    };
  } else if (subCategory) {
    return {
      url: `/shop/browse/${category}/${subCategory}/`,
      categoryId: categoryMappedId[subCategory],
    };
  } else if (category) {
    return {
      url: `/shop/browse/${category}/`,
      categoryId: categoryMappedId[category],
    };
  }

  return null;
};
