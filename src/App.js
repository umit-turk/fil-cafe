import React, { useEffect, useState } from "react";
import Menu from "./Menu";
import Categories from "./Categories";
import items from "./data";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import image from "./instagram.jpg";
import Popup from "reactjs-popup";

import { IconContext } from "react-icons";
const allCategories = [...new Set(items.map((item) => item.category))];

const App = () => {
  const [menuItems, setMenuItems] = useState(items);
  const [activeCategory, setActiveCategory] = useState("");
  const [categories, setCategories] = useState(allCategories);
  const [sideBar, setSideBar] = useState(false);
  const [showCategory, setShowCategory] = useState(false);

  useEffect(() => {
    let kahveler = items.filter((elm, index) => elm.category == "Kahveler");
    setMenuItems(kahveler);
  }, []);

  const filterItems = (category) => {
    setActiveCategory(category);
    if (category === "Kahveler") {
      let Kahveler = items.filter((elm) => elm.category === "Kahveler");
      setMenuItems(Kahveler);
      setShowCategory(false);
      return;
    }
    const newItems = items.filter((item) => item.category === category);
    setMenuItems(newItems);
    setShowCategory(false);
  };

  const showSidebar = () => {
    setSideBar((prev) => !prev);
  };

  const displayCategory = () => {
    setShowCategory((prev) => !prev);
  };

  return (
    <>
      <IconContext.Provider value={{ color: "#000" }}>
        <main className="menu section">
          <div className="navbar">
            <li style={{ marginTop: 20, marginLeft: 20 }}>
              <FaIcons.FaBars
                style={{ width: 22, height: 22 }}
                onClick={showSidebar}
              />
            </li>
          </div>
          <nav className={sideBar ? "nav-menu active" : "nav-menu"}>
            <ul className="nav-menu-items">
              <li className="navbar-toggle">
                <li className="menu-bars" onClick={showSidebar}>
                  <AiIcons.AiOutlineClose />
                </li>
              </li>
              <a
                href="https://www.instagram.com/coffeefil/"
                className="sidebar-item"
              >
                <h4>Instagram</h4>
                <img src={image} alt="" width={30} height="30" />
              </a>
              <Popup
                trigger={<h4 className="sidebar-item">Çalışma saatleri </h4>}
                modal
                closeOnDocumentClick
                contentStyle={{
                  borderRadius: 10,
                  width: "90%",
                  height: "10vh",
                }}
              >
                <div className="working-days">
                  <div>
                  P.tesi, Salı, Çarşamba, Perşembe, Cuma, C.tesi, Pazar <br />{" "}
                  </div>
                  <div
                    className="hour"
                  >
                    10.00 - 01.00
                  </div>
                </div>
              </Popup>
              <Popup
                trigger={
                  <h4 style={{ marginTop: 30 }} className="sidebar-item">
                    İletişim
                  </h4>
                }
                modal
                closeOnDocumentClick
                contentStyle={{
                  borderRadius: 10,
                  width: "90%",
                  height: "10vh",
                }}
              >
                <div style={{marginTop:1}} className="hour">Adres <br />
                <div style={{marginTop:3}} className="working-days">Dumlupınar mahallesi. Gizem caddesi. No:16A <br /> Nilüfer / Bursa</div>
                </div>
              </Popup>
            </ul>
          </nav>
          <section className="menu section">
            <div className="title">
              <h2>Menu</h2>
              <div className="underline"></div>
            </div>

            <div onClick={displayCategory} className="category-title">
              {activeCategory || "Kategoriler"}
              {showCategory ? (
                <span className="arrow">
                  <AiIcons.AiOutlineArrowUp></AiIcons.AiOutlineArrowUp>
                </span>
              ) : (
                <span className="arrow">
                  <AiIcons.AiOutlineArrowDown></AiIcons.AiOutlineArrowDown>
                </span>
              )}
            </div>
            {showCategory && (
              <Categories
                categories={categories}
                activeCategory={activeCategory}
                filterItems={filterItems}
                setShowCategory={setShowCategory}
              />
            )}

            <Menu items={menuItems} />
          </section>
        </main>
      </IconContext.Provider>
    </>
  );
};

export default App;
