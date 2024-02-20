import React from "react";
import OrdersList from "../OrdersList";
import menu from "../data";

const BreakFast = () => {
  const breakFastItems = menu.filter((item) => item.category === "breakfast");

  return (
    <div>
      <OrdersList menu={breakFastItems} />
    </div>
  );
};

export default BreakFast;
