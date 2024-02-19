import React from "react";
import classes from "./styles/OrdersList.module.css";
import Order from "./Order";

const OrdersList = () => {
  return (
    <ul className={classes.orders}>
      <Order />
      <Order />
      <Order />
      <Order />
      <Order />
      <Order />
      <Order />
      <Order />
    </ul>
  );
};

export default OrdersList;
