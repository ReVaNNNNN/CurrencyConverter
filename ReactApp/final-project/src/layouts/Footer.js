import React from "react";
import { Route } from "react-router-dom";

const Footer = () => {
  return (
    <div>
      <h2>Stopka</h2>
      <Route
        path="/"
        exact
        render={() => {
          return <p>Dodatkowe informacje</p>;
        }}
      ></Route>
    </div>
  );
};

export default Footer;
