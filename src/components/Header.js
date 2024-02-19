import React from "react";
import classes from "./styles/Header.module.css";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <header className={classes.header}>
      <h1>menu</h1>

      <nav className="menu_categories">
        <NavLink
          className={({ isActive }) => (isActive ? classes.active : undefined)}
          to="/"
        >
          All
        </NavLink>
        <NavLink
          className={({ isActive }) => (isActive ? classes.active : undefined)}
          to="/breakfast"
        >
          Breakfast
        </NavLink>
        <NavLink
          className={({ isActive }) => (isActive ? classes.active : undefined)}
          to="/lunch"
        >
          Lunch
        </NavLink>
        <NavLink
          className={({ isActive }) => (isActive ? classes.active : undefined)}
          to="/shakes"
        >
          Shakes
        </NavLink>
      </nav>
    </header>
  );
};

export default Header;
