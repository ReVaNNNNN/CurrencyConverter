import React from "react";
import "./Word.css";

const Word = (props) => (
  <li>
    Słowo po angielsku: <strong>{props.en}</strong>. Tłumaczenie:
    <strong>{props.pl}</strong>
  </li>
);

export default Word;
