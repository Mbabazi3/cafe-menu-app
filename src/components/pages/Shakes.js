import React from "react";
import menu from "../data";
import OrdersList from "../OrdersList";

const Shakes = () => {
  const shakes = menu.filter((item) => item.category === "shakes");
  return (
    <div>
      <OrdersList menu={shakes} />
    </div>
  );
};

export default Shakes;
