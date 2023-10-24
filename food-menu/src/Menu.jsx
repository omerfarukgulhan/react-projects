import MenuItem from "./MenuItem";

const Menu = (props) => {
  return (
    <div className="menu-container">
      {props.meals.map((meal) => {
        return <MenuItem key={meal.id} meal={meal}/>;
      })}
    </div>
  );
};

export default Menu;
