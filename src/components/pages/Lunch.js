import React from "react";
import OrdersList from "../OrdersList";
import menu from "../data";

const Lunch = () => {
  const lunchMeals = menu.filter((item) => item.category === "lunch");
  return (
    <div>
      <OrdersList menu={lunchMeals} />
    </div>
  );
};

export default Lunch;
