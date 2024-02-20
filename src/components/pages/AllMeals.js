import React from "react";
import OrdersList from "../OrdersList";
import menu from "../data";

const AllMeals = () => {
  console.log(menu);
  return (
    <div>
      <OrdersList menu={menu} />
    </div>
  );
};

export default AllMeals;
