import React, { useEffect, useState } from "react";
import Menu from "./Menu";
import Categories from "./Categories";
import items from "./data";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faInstagram} from '@fortawesome/free-brands-svg-icons'
import image from './instagram.jpg'


import { IconContext } from "react-icons";
const allCategories = [...new Set(items.map((item) => item.category))];

const App = () => {
  const [menuItems, setMenuItems] = useState(items);
  const [activeCategory, setActiveCategory] = useState("");
  const [categories, setCategories] = useState(allCategories);
  const [sideBar, setSideBar] = useState(false);

  useEffect(() => {
    let kahveler = items.filter((elm, index) => elm.category == "Kahveler");
    setMenuItems(kahveler);
  }, []);

  const filterItems = (category) => {
    setActiveCategory(category);
    if (category === "Kahveler") {
      let Kahveler = items.filter((elm) => elm.category === "Kahveler");
      setMenuItems(Kahveler);
      return;
    }
    const newItems = items.filter((item) => item.category === category);
    setMenuItems(newItems);
  };

  const showSidebar = () => {
    setSideBar((prev) => !prev);
  };

  return (
    <>
      <IconContext.Provider value={{ color: "#000" }}>
        <main className="menu section">
          <div className="navbar">
            <li style={{ marginTop: 20, marginLeft: 20 }}>
              <FaIcons.FaBars style={{width:22, height:22}} onClick={showSidebar} />
            </li>
          </div>
          <nav className={sideBar ? "nav-menu active" : "nav-menu"}>
            <ul className="nav-menu-items" >
              <li className="navbar-toggle">
                <li className="menu-bars" onClick={showSidebar}>
                  <AiIcons.AiOutlineClose />
                </li>
              </li>
              <a href="https://www.instagram.com/coffeefil/" style={{display:"flex", justifyContent:"space-between",marginLeft:20,marginRight:20,alignItems:"center"}}>
                <h4>İnstagram</h4>
                <img src={image} alt="" width={30} height="30" />
              </a>
            </ul>
          </nav>
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
      </IconContext.Provider>
    </>
  );
};

export default App;
