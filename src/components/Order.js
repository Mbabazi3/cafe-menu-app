import React from "react";
import classes from "./styles/Order.module.css";
// import item1 from "../assets/item-1.jpeg";

const Order = ({ id, title, category, price, img, desc }) => {
  return (
    <div className={classes.order_details}>
      <section className={classes.left}>
        <img
          src={img}
          alt={title}
          onError={(event) => {
            event.target.src =
              "https://glovoapp.com/images/svg/bckg-pattern.svg";
            event.onerror = null;
          }}
        />
      </section>

      <section className={classes.right}>
        <article className={classes.order_descrption}>
          <h2 className={classes.title}>{title}</h2>
          <p className={classes.price}>${price}</p>
        </article>
        <p className={classes.descrption}>{desc}</p>
      </section>
    </div>
  );
};

export default Order;
