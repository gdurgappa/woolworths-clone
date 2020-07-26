import React, { useState, useEffect } from "react";
import { allCategories } from "../../constants/allCategories";

const Categories = (props: {}) => {
  const [categories, setCategories] = useState<any>([]);
  const [activeCategory, setActiveCategory] = useState<any>([]);
  const [activeSubCategory, setActiveSubCategory] = useState<any>([]);

  useEffect(() => {
    setCategories(allCategories);
  }, []);

  const handleActiveCategory = (category: any) => {
    setActiveCategory(category);
  };

  return (
    <div>
      {categories.map((cat: any) => (
        <div onClick={() => setActiveCategory(cat.Children)}>
          {cat.Description}
        </div>
      ))}
      <hr />
      {/* <div>breadcrumbs</div>  */}
      {activeCategory && (
        <>
          <div>
            {activeCategory.map((cat: any) => {
              return (
                <div onClick={() => setActiveSubCategory(cat.Children)}>
                  {cat.Description}
                </div>
              );
            })}
          </div>
          <hr />
          {activeSubCategory.map((cat: any) => {
            return (
              // <div onClick={() => setActiveSubCategory(cat.Children)}>
              <div>{cat.Description}</div>
            );
          })}
        </>
      )}
    </div>
  );
};

export default Categories;
