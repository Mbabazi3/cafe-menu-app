import React from "react";
import classes from "./styles/OrdersList.module.css";
import Order from "./Order";

const OrdersList = (props) => {
  return (
    <ul className={classes.orders}>
      {props.menu.map((item) => (
        <Order
          key={item.id}
          id={item.id}
          title={item.title}
          category={item.category}
          price={item.price}
          img={item.img}
          desc={item.desc}
        />
      ))}
    </ul>
  );
};

export default OrdersList;
