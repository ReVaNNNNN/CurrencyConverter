import React from "react";

const Products = (props) => {
  return (
    <article className="product">
      <h1>{props.name}</h1>
    </article>
  );
};

export default Products;
