import React from "react";
import classes from "./styles/Order.module.css";
import item1 from "../assets/item-1.jpeg";

const Order = () => {
  return (
    <div className={classes.order_details}>
      <section className={classes.left}>
        <img src={item1} alt="item1" />
      </section>

      <section className={classes.right}>
        <article className={classes.order_descrption}>
          <h2 className={classes.title}>Fajita Sandwich Combo</h2>
          <p className={classes.price}>$60</p>
        </article>
        <p className={classes.descrption}>
          cronyms are used to save time, avoid typing and ensure a social media
          post stays within a certain character limit. Although many seem as if
        </p>
      </section>
    </div>
  );
};

export default Order;
