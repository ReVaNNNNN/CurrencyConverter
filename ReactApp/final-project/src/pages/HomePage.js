import React from "react";
import Article from "../components/Article";

const articles = [
  {
    id: 1,
    title: "Co by tu wymyślić ?",
    text: "Ile dałbym by zapoznac cie wszystkie chwiel to co nie co nie",
  },
  {
    id: 2,
    title: "Myślę więc jestem, czy nie ?",
    text: "Ile dałbym by zapoznac cie wszystkie chwiel to co nie co nie",
  },
  {
    id: 3,
    title: "Możesz wszystko, ale czy chesz ?",
    text: "Ile dałbym by zapoznac cie wszystkie chwiel to co nie co nie",
  },
];

const HomePage = () => {
  const artList = articles.map((article) => (
    <Article key={article.id} {...article} />
  ));

  return <div>{artList}</div>;
};

export default HomePage;
