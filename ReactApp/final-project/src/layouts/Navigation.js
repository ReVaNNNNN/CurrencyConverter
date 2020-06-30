import React from "react";
import { NavLink } from "react-router-dom";
import "../styles/Navigation.css";

const list = [
  {
    name: "start",
    path: "/",
    exact: true,
  },
  {
    name: "produkty",
    path: "/products",
  },
  {
    name: "kontakt",
    path: "/contact",
  },
  {
    name: "panel admina",
    path: "/admin",
  },
];

const Navigation = () => {
  const menu = list.map((item) => (
    <li>
      <NavLink to={item.path} exact={item.exact}>
        {item.name}
      </NavLink>
    </li>
  ));
  return (
    <nav>
      <ul>{menu}</ul>
    </nav>
  );
};

export default Navigation;
