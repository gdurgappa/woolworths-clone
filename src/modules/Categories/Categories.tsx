import React, { useState, useEffect } from "react";
import { allCategories } from "../../constants/allCategories";
import { Link } from "react-router-dom";

const Categories = (props: {}) => {
  const [categories, setCategories] = useState<any>([]);
  const [activeCategory, setActiveCategory] = useState<any>();
  const [activeSubCategory, setActiveSubCategory] = useState<any>();

  useEffect(() => {
    setCategories(allCategories);
  }, []);

  const handleActiveCategory = (category: any) => {
    setActiveCategory(category);
  };

  return (
    <div>
      {categories.map((cat: any) => (
        <div onClick={() => setActiveCategory(cat)}>{cat.Description}</div>
      ))}
      <hr />
      {/* <div>breadcrumbs</div>  */}
      {activeCategory && (
        <>
          <div>
            {activeCategory.Children.map((cat: any) => {
              return (
                <div onClick={() => setActiveSubCategory(cat)}>
                  {cat.Description}
                </div>
              );
            })}
          </div>
          <hr />
          {activeSubCategory &&
            activeSubCategory.Children.map((cat: any) => {
              return (
                // <div onClick={() => setActiveSubCategory(cat.Children)}>
                //shop/browse/fruit-veg/fruit/organic-fruit
                <Link
                  to={`/shop/browse/${activeCategory.UrlFriendlyName}/${activeSubCategory.UrlFriendlyName}/${cat.UrlFriendlyName}/${cat.NodeId}`}
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
