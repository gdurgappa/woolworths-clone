import React, { useState, useEffect } from "react";
import { allCategories } from "../../constants/allCategories";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

const Categories = (props: {}) => {
  const [categories, setCategories] = useState<any>([]);
  const [activeCategory, setActiveCategory] = useState<any>();
  const [activeSubCategory, setActiveSubCategory] = useState<any>();

  const dispatch = useDispatch();
  const categoriesList: any = useSelector<any>(
    (state) => state.category.allCategories
  );
  const categoryMappedId = useSelector<any>(
    (state) => state.category.categoryMappedId
  );

  useEffect(() => {
    dispatch({ type: "CATEGORIES_REQUESTED" });
    setCategories(allCategories);
  }, []);

  const handleActiveCategory = (category: any) => {
    setActiveCategory(category);
  };

  return (
    <div>
      {categoriesList.map((cat: any) => (
        <div key={cat.NodeId} onClick={() => setActiveCategory(cat)}>
          {cat.Description}
        </div>
      ))}
      <hr />
      {/* <div>breadcrumbs</div>  */}
      {activeCategory && (
        <>
          <div>
            {activeCategory.Children.map((cat: any) => {
              return (
                <div key={cat.NodeId} onClick={() => setActiveSubCategory(cat)}>
                  {cat.Description}
                </div>
              );
            })}
          </div>
          <hr />
          {activeSubCategory && (
            <Link
              to={`/shop/browse/${activeCategory.UrlFriendlyName}/${activeSubCategory.UrlFriendlyName}`}
            >
              <div>{"Show All " + activeSubCategory.Description}</div>
            </Link>
          )}
          {activeSubCategory &&
            activeSubCategory.Children.map((cat: any) => {
              return (
                // <div onClick={() => setActiveSubCategory(cat.Children)}>
                //shop/browse/fruit-veg/fruit/organic-fruit
                <Link
                  key={activeCategory.NodeId}
                  to={`/shop/browse/${activeCategory.UrlFriendlyName}/${activeSubCategory.UrlFriendlyName}/${cat.UrlFriendlyName}`}
                  // to={`/shop/browse/${activeCategory.UrlFriendlyName}/${activeSubCategory.UrlFriendlyName}/${cat.UrlFriendlyName}/${cat.NodeId}`}
                >
                  <div>{cat.Description}</div>
                </Link>
              );
            })}
        </>
      )}
    </div>
  );
};

export default Categories;
