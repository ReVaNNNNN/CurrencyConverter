import React from "react";
import Product from "../components/Products";
import { Link } from "react-router-dom";

const ProductPage = (props) => {
  return (
    <>
      <div>Strona produktu</div>
      <Product name={props.match.params.name} />
      <Link to="/products">Powrót do listy produktów</Link>
    </>
  );
};

export default ProductPage;
