import React from "react";

const MenuItem = (props) => {
  const { title, price, desc } = props.meal;
  return (
    <div className="menu-item">
      <h3 className="meal-name">{title}</h3>
      <span className="meal-price">{"$" + price}</span>
      <p className="meal-desc">{desc}</p>
    </div>
  );
};

export default MenuItem;
