import Menu from "./Menu";
import Categories from "./Categories";
import data from "./data";
import { useState } from "react";

function App() {
  const [menu, setMenu] = useState(data);
  const allCategories = ["all", ...new Set(data.map((menuItem) => menuItem.category))];

  const filterMenu = (category) => {
    if (category === "all") {
      setMenu(data);
      return;
    }
    const newItems = data.filter((meal) => meal.category === category);
    setMenu(newItems);
  };

  return (
    <div className="container">
      <h1 className="title">Menu</h1>
      <Categories categories={allCategories} filter={filterMenu} />
      <Menu meals={menu} />
    </div>
  );
}

export default App;
