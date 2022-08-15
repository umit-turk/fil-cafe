import React, { useEffect, useState } from "react";
import Menu from "./Menu";
import Categories from "./Categories";
import items from "./data";

const allCategories = [...new Set(items.map((item) => item.category))];

const App = () => {
  const [menuItems, setMenuItems] = useState(items);
  const [activeCategory, setActiveCategory] = useState("");
  const [categories, setCategories] = useState(allCategories);

  useEffect(() =>{
   let kahveler = items.filter((elm,index) => elm.category == "Kahveler")
   setMenuItems(kahveler)
  },[])

  const filterItems = (category) => {
    setActiveCategory(category)
    if(category === "Kahveler") {
     let Kahveler = items.filter((elm) => elm.category === "Kahveler")
      setMenuItems(Kahveler);
      return
    }
    const newItems = items.filter((item) => item.category === category);
    setMenuItems(newItems);
  }

  return (
    <main>
      <section className="menu section">
        <div className="title">
         {/*  <img src={logo} alt="logo" className="logo" /> */}
          <h2>Menu</h2>
          <div className="underline"></div>
        </div>
        <Categories
          categories={categories}
          activeCategory={activeCategory}
          filterItems={filterItems}
        />
        <Menu items={menuItems} />
      </section>
    </main>
  );
};

export default App;
