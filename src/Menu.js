import React from "react";

const Menu = ({ items }) => {
  console.log(items,"1")
  return (
    <div className="section-center">
      {items.map((item) => {
        const { id, title, img, desc, price,   } = item;
        console.log(item,2)
        return (
          <article key={id} className="menu-item">
            <img src={img} alt={title} className="photo" />
            <div className="item-info">
              <header>
                <h4>{title}</h4>
                <h4 className="price">{price}tl</h4>
              </header>
              <p className="item-text">{item?.types ? item?.types.map((elm,i) => elm)  : null}</p>
            </div>
          </article>
        );
      })}
    </div>
  );
};

export default Menu;
