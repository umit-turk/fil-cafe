import React from "react";

const Categories = ({ categories, filterItems, activeCategory }) => {
  return (
    <div className=" horizontal-scroll-wrapper">
      {categories.map((category, index) => {
        let styles = {
          widthBtn: { width: category.length > 8 ? 160 : 90 },
        };
        return (
          <button
            type="button"
            style={styles.width}
            className={`${
              activeCategory === category ? "filter-btn active" : "filter-btn"
            }`}
            key={index}
            onClick={() => filterItems(category)}
          >
            {category}
          </button>
        );
      })}
    </div>
  );
};

export default Categories;
